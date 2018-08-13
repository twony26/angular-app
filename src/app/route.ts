import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  //EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index';

import { Error404Component } from "./errors/404.component";

export const appRoutes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events_data: EventListResolver}},
  { path:'events/session/new', component: CreateSessionComponent},
  // {path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator]},
  {path: 'events/:id', component: EventsDetailsComponent, resolve: {event: EventResolver}}
  {path: '404', component: Error404Component},
  {path: '', redirectTo:'/events', pathMatch:'full'},
  {path: 'user', loadChildren:'./user/user.module#UserModule'}
]
