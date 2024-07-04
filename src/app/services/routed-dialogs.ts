import { ENVIRONMENT_INITIALIZER, Injector, Provider, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { getAllChildren, getAllParents } from '@app/utils/router';
import { filter, map } from 'rxjs';

const isDialogRoute = (route: ActivatedRouteSnapshot): boolean => {
  return !!route.component && getAllParents(route).some((parent) => parent.outlet === 'dialog');
};

export const withRoutedDialogs = (): Provider => {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => {
      const injector = inject(Injector);
      const router = inject(Router);
      const matDialog = inject(MatDialog);
      const activationEnd$ = router.events.pipe(
        filter((event) => event instanceof ActivationEnd),
        map((event) => event as ActivationEnd),
      );
      return () => {
        activationEnd$.subscribe(async (event) => {
          const openDialogSnapshots = getAllChildren(event.snapshot.root).filter(isDialogRoute);
          matDialog.openDialogs.forEach((dialogRef) => {
            if (
              !openDialogSnapshots.some((snapshot) => snapshot.component === dialogRef.componentInstance.constructor)
            ) {
              dialogRef.close();
            }
          });

          const component = event.snapshot.component;

          if (!component || !isDialogRoute(event.snapshot)) return;

          const dialogInjector = Injector.create({
            parent: injector,
            providers: [
              {
                provide: ActivatedRouteSnapshot,
                useFactory: () => event.snapshot,
              },
            ],
          });

          const dialogRef = matDialog.open(component, {
            closeOnNavigation: false,
            injector: dialogInjector,
            ...('dialogConfig' in component ? (component.dialogConfig as MatDialogConfig) : {}),
          });
          dialogRef.afterClosed().subscribe(() => {
            router.navigate(['..', { outlets: { dialog: null } }], { queryParamsHandling: 'preserve' });
          });
        });
      };
    },
  };
};
