import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';
import { FormComponent } from './pages/form/form.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './pages/task/task.component';
import { AboutComponent } from './pages/about/about.component';

import {  MatTableModule } from "@angular/material/table";
import {MatSidenavModule } from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatSort} from "@angular/material/sort";
import { FormTableComponent } from './widgets/form-table/form-table.component';
import { HashtagListComponent } from './widgets/hashtag-list/hashtag-list.component';
import { ActorListComponent } from './widgets/actor-list/actor-list.component';
import { FormActionComponent } from './widgets/form-action/form-action.component';
import { TargetListComponent } from './widgets/target-list/target-list.component';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatAutocomplete} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    FormComponent,
    TasksComponent,
    TaskComponent,
    AboutComponent,
    FormTableComponent,
    HashtagListComponent,
    HashtagListComponent,
    ActorListComponent,
    FormActionComponent,
    TargetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatListItem,
    MatIcon,
    MatNavList,
    MatToolbar,
    MatIconButton,
    MatAnchor,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatGridListModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButton,
    NgOptimizedImage,
    MatSort,
    MatCardAvatar,
    MatTabGroup,
    MatTab,
    MatFormFieldModule,
    MatSelect,
    MatAutocomplete,
    MatOption
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
