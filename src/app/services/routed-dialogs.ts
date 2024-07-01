import { ENVIRONMENT_INITIALIZER, Provider, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

export type RoutedDialogConfig = MatDialogConfig;

const getAllChildren = (route: ActivatedRouteSnapshot): ActivatedRouteSnapshot[] => {
  return route.children.flatMap((child) => [child, ...getAllChildren(child)]);
};

const isDialogRoute = (route: ActivatedRouteSnapshot): boolean => {
  return !!route.component && 'dialogConfig' in route.component;
};

const isDialogRoot = (route: ActivatedRouteSnapshot): boolean => {
  return 'dialogRoot' in route.data && (!route.parent || !('dialogRoot' in route.parent.data));
};

export const withRoutedDialogs = (): Provider => {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => {
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
          const dialogRoot = getAllChildren(event.snapshot.root).reverse().find(isDialogRoot);

          if (!component || !('dialogConfig' in component) || !dialogRoot) return;

          const dialogRef = matDialog.open(component, {
            closeOnNavigation: false,
          });
          dialogRef.afterClosed().subscribe(() => {
            router.navigate(dialogRoot.pathFromRoot.flatMap((route) => route.url.map((url) => url.path)));
          });
        });
      };
    },
  };
};
