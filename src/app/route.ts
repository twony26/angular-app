import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';

import { Error404Component } from "./errors/404.component";

export const appRoutes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events_data: EventListResolver}},
  {path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo:'/events', pathMatch:'full'},
  {path: 'user', loadChildren:'./user/user.module#UserModule'}
]
