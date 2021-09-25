import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  data:any="";
  fname:any="";
  lname:any="";
  grade:any="";
  dob:any;
  gender:any="";
  email:any="";
  mobno:any="";
  address:any="";
  constructor(private http:HttpClient){}
 

  ngOnInit(): void {
  }
   
 
    postServer(){
      var data={"fname":this.fname,"lname":this.lname,"grade":this.grade,"dob":this.dob,"gender":this.gender,"email":this.email,"MobNo":this.mobno,"Address":this.address};
      this.http.post('http://localhost:9898/formdata',data).subscribe((a)=>
      {
        this.data=a;
      });
    }
}
