import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
  em { float:right; color:red; padding-left: 10px; }
  .error input { background-color: #E3C3C5; }
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; }

  `]
})
export class CreateEventComponent {
  newEvent
  isDirty:boolean = true;

  constructor(private router: Router, private eventService:EventService) {

  }

  Cancel() {
    this.router.navigate(['/events']);
  }


  saveEvent(formValues){
    this.eventService.saveEvent(formValues).subscribe((data:any) => {
      console.log(data);
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }
}
