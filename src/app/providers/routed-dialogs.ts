import {
  Directive,
  ENVIRONMENT_INITIALIZER,
  Injectable,
  Injector,
  Provider,
  SimpleChange,
  effect,
  inject,
  input,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, ActivationEnd, Router, RouterLink, Routes } from '@angular/router';
import { getAllChildren, getAllParents } from '@app/utils/router';
import { filter, map } from 'rxjs';

export const DIALOG_OUTLET_NAME = 'dialog';

const toDialogRoute = (route: any[]): any[] => ['/', { outlets: { [DIALOG_OUTLET_NAME]: route } }];

@Directive({
  selector: '[dialogLink]',
  hostDirectives: [RouterLink],
  standalone: true,
})
export class DialogLinkDirective {
  public dialogLink = input.required<any[]>();
  private routerLink = inject(RouterLink);
  private toChange = (value: any): SimpleChange => ({
    currentValue: value,
    previousValue: undefined,
    firstChange: false,
    isFirstChange: () => false,
  });
  constructor() {
    this.routerLink.queryParamsHandling = 'preserve';
    this.routerLink.ngOnChanges({
      queryParamsHandling: this.toChange('preserve'),
    });
    effect(() => {
      const dialogLink = this.dialogLink();
      const link = toDialogRoute(dialogLink);
      this.routerLink.routerLink = link;
      this.routerLink.ngOnChanges({
        routerLink: this.toChange(link),
      });
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class RoutedDialogs {
  private router = inject(Router);
  public navigate(route: any[]) {
    return this.router.navigate(toDialogRoute(route), {
      queryParamsHandling: 'preserve',
    });
  }
  close() {
    return this.router.navigate(['.', { outlets: { [DIALOG_OUTLET_NAME]: null } }], {
      queryParamsHandling: 'preserve',
    });
  }
}

export const provideDialogRoutes = (routes: Routes): Provider[] => {
  const rootRoute = {
    outlet: DIALOG_OUTLET_NAME,
    path: '',
    children: routes,
  };
  const isDialogRoute = (route: ActivatedRouteSnapshot): boolean => {
    return !!route.component && getAllParents(route).some((parent) => parent.outlet === DIALOG_OUTLET_NAME);
  };
  return [
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const injector = inject(Injector);
        const router = inject(Router);
        const matDialog = inject(MatDialog);
        router.resetConfig([...router.config, rootRoute]);
        return () => {
          router.events
            .pipe(
              filter((event) => event instanceof ActivationEnd),
              map((event) => event as ActivationEnd),
              takeUntilDestroyed(),
            )
            .subscribe(async (event) => {
              const openDialogSnapshots = getAllChildren(event.snapshot.root).filter(isDialogRoute);
              matDialog.openDialogs.forEach((dialogRef) => {
                if (
                  !openDialogSnapshots.some(
                    (snapshot) => snapshot.component === dialogRef.componentInstance.constructor,
                  )
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
                router.navigate(['..', { outlets: { [DIALOG_OUTLET_NAME]: null } }], {
                  queryParamsHandling: 'preserve',
                });
              });
            });
        };
      },
    },
  ];
};
