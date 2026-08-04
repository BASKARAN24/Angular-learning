import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Student],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lifecyclehook-student-app');
  name = 'Baskaran';
  changeName(){
    this.name='Legend Baskaran';
  }
  showName = true;
  removeStudent(){
    this.showName = false;
  }

  showNamefunc(){
    if(this.showName){
      alert(this.name);
    }
    else{
      alert('Name is destroyed');
    }
  }
}
