import { Component, OnInit } from '@angular/core'

import { ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared';



@Component({
  selector: 'event-details',
  templateUrl: './event-detail.component.html',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px; }
  .event-image { height: 100px; }
  a { cursor: pointer; }
`]
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
    // this.event = this.eventService.getEvent(
    //   +this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }


}
