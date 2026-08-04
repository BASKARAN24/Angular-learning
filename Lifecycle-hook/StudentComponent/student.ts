import { Component, Input,OnInit,OnChanges,OnDestroy,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.scss',
})
export class Student implements OnInit,OnChanges,OnDestroy{
  @Input()
  name = '';

  count = 0;
  
  constructor(){
    alert('Component is created');
  }

  ngOnInit(){
    alert("Value assinged for the name field is: "+this.name);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['name'].firstChange){
      alert(`Name assinged is "${this.name}"`);
    this.count++;
    }
    else{
      if(changes['name']){
      const prevValue = changes['name'].previousValue;
      const currValue = changes['name'].currentValue;
      
      alert(`Name changed from "${prevValue}" to "${currValue}"`);
    }
    }
  }

  ngOnDestroy(){
    alert('Student is being destroyed');
  }
}
