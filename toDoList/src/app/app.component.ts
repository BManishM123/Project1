import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';
  tasks=[
    {
      id:1,
      task:'First Task',
      status:'Completed',
      delete:'Not Deleted'
    },
    {
      id:2,
      task:'Second Task',
      status:'Not Completed',
      delete:'Not Deleted'
    }
  ]
}
