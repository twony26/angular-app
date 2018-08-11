import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>Crare form here</h3>
      <br/>
      <br/>
      <button class="btn btn-primary">Save</button>
      <button class="btn btn-default" (click)="Cancel()">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {
  isDirty:boolean = true;

  constructor(private router: Router) {

  }

  Cancel() {
    this.router.navigate(['/events']);
  }

}
