import { CreateEventComponent } from "../create-event.component";

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You should not have saved this event, do you really want to exit?');
  }
  return true;
}
