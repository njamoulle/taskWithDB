import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

import { TaskServiceService } from './task-service.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'Tasks',
    pathMatch: 'full'
  },
  {
    path: 'Tasks',
    component: TaskComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
