import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">
    Time: {{event?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
  <div *ngIf="event?.onlineUrl">
    Online Url: {{ event?.onlineUrl }}
  </div>
  </div>
  `,
  styles: [`
  .green { color : green; !important; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;
  // @Output() eventClick = new EventEmitter();

  // handleClickMe() {
  //     this.eventClick.emit(this.event.name);
  // }

  logFoo() {
    console.log('logfoo');
  }
}
