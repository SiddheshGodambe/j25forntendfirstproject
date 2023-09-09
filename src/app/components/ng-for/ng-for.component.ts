import { Component } from '@angular/core';
import { Students } from 'src/app/Model/Students';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
//city=["Pune", "Delhi","Lucknow"];
students=[new Students("Keshav", 3652147899,"CS"),
new Students("Kaushal", 125478896354,"M.E."),
new Students("Ketan", 120365498,"M.Com"),
new Students("Kaushik", 325698432168,"MBBS")]
}
