import { Component, OnInit } from '@angular/core';

interface Country {
  Programme:string;
  Category:string;
  Course:string;
  Pathway:string;
  LessonNote:string;
  ClassFormat:string;
  Fee:string;
  Duration:string;
  CreatedOn:string;
  Actions:string;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    Programme:'Music',
    Category:'Strings',
    Course:'Cello',
    Pathway:'Graded',
    LessonNote:'Notes',
    ClassFormat:'Group',
    Fee:'$100',
    Duration:'30 min',
    CreatedOn:'17-09-2021',
    Actions:'',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    Programme:'Music',
    Category:'Strings',
    Course:'Cello',
    Pathway:'Graded',
    LessonNote:'Notes',
    ClassFormat:'Group',
    Fee:'$100',
    Duration:'30 min',
    CreatedOn:'17-09-2021',
    Actions:'',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    Programme:'Music',
    Category:'Strings',
    Course:'Cello',
    Pathway:'Graded',
    LessonNote:'Notes',
    ClassFormat:'Group',
    Fee:'$100',
    Duration:'30 min',
    CreatedOn:'17-09-2021',
    Actions:'',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
 
];


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  countries = COUNTRIES;

  constructor() { }

  ngOnInit(): void {
  }

}
