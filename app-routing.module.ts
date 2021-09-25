import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path:'AddStudent',component:AddStudentComponent},
  { path:'StudentDetails',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ReactiveFormsModule,
            BrowserModule,
            HttpClientModule
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
