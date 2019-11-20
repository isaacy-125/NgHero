import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";


const routes: Routes = [{
  // 这个路由会把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'heroes',
  component: HeroesComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'detail/:id',
  component: HeroDetailComponent
}];

@NgModule({
  // 初始化路由器 开始监听浏览器中的地址变化
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }