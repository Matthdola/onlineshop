import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'todos', component: TodoOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
