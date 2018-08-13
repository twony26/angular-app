import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators'
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {

  constructor(private eventService: EventService) {

  }

  resolve(route:ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}

