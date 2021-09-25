import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

    data:any="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  callserver(){
    this.http.get("http://localhost:9898/StudentDetails").subscribe((info)=>{
        this.data=info;
    });
  }
}
