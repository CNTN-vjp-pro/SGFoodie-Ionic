import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoricalPageComponent } from './categorical-page/categorical-page.component';
import { FooterPage } from './footer/footer.page';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path:'category/:category',component:CategoricalPageComponent},
  {path: 'footer', 
  loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{path:'navigation-bar',component:NavigationBarComponent},
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [NavigationBarComponent,CategoricalPageComponent]
