import { EventsListComponent } from "./events/events-list.component";
import { EventsDetailsComponent } from "./event-details/event-details.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "./events/create-event.component";


export const appRoutes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventsDetailsComponent},
  {path: '', redirectTo:'/events', pathMatch:'full'}
]
