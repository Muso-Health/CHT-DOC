import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {FormsComponent} from "./pages/forms/forms.component";
import {TasksComponent} from "./pages/tasks/tasks.component";
import {FormComponent} from "./pages/form/form.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "forms",
    component: FormsComponent
  },
  {
    path: "forms/:id",
    component: FormComponent
  },
  {
    path: "tasks",
    component: TasksComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
