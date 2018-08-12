import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth.service';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  checkDirtyState,
  EventListResolver,
  EventRouteActivator,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { JQ_TOKEN, TOASTR_TOKEN, CollapsibleWellComponent, IToastr, SimpleModalComponent, ModalTriggerComponent } from './common/index';
import { appRoutes } from './route';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr:IToastr = window['toaster'];
let jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerComponent,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr } ,
    { provide: JQ_TOKEN, useValue: jquery } ,
    EventListResolver,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

