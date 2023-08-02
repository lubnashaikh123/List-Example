import { Component } from '@angular/core';
import { Iteam } from './shared/models/Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List-Example';
  team :Array<Iteam>=[
    {           fname:"Shikhar", 
                lname:"Dhavan",
            role:"Top-order batsman",
            batting:"left-Handed",
            age:34,
          
    },
    {
                fname:"virat", 
                lname:"kohli",
            role:"Top-order batsman",
            batting:"right-Handed",
            age:34,
                     
    },		  
    
    {
                fname:"Hardik", 
                lname:"pandya",
            role:"Top-order batsman",
            batting:"right-Handed",
            age:34,
          
    },
    {
                fname:"Mohammad", 
                lname:"siraj",
            role:"Bowler",
            batting:"right-Handed",
            age:31,
          
    },		  
    ];
}
