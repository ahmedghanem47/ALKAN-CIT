import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./modules/home/home.module').then((m) => m.HomeModule),
            },
        ],
    },
];
