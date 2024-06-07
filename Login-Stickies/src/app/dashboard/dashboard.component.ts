import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  result!: any; 
  notes!: any;
  existing_data!:any;
  editIndex: number | null = null;

  constructor(private builder: FormBuilder, private router: Router,private http:HttpClient,private service:UserAuthService) {} 

  newNotesForm = this.builder.group({
    note: this.builder.control('', Validators.required)
  });

  
 
  // get's the user_id from the session storage
  user_id = sessionStorage.getItem('user_id');
  ngOnInit(){
    // fetches the user details and stores it in the result variable
    // by using result.name we can fetch the user's name in the html page
    this.service.getUserbyId(this.user_id).subscribe(item => {this.result=item;console.log(this.result)})
  }

  // clears the session storage and redirects the user to login page
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  addingNote(){
    if (this.newNotesForm.valid) {
      this.service.getUserbyId(this.user_id).subscribe((res)=>{
          this.existing_data=res;
          console.log(this.existing_data.notes)
          this.existing_data.notes.push(this.newNotesForm.value.note)
      this.service.addNewNote(this.user_id,this.existing_data.notes).subscribe((res)=>{
        this.result=res;
        alert("Note Added Succesfully");
        this.newNotesForm.reset();
      })
    })
    } else {
      console.log("Please Enter Valid Details");
      alert("Please Enter Valid Details");
    }
  }

  // Function to edit a note
  editNote(index: number) {
    this.editIndex = index;
    this.newNotesForm.setValue({ note: this.result.notes[index] });
  }

  
  saveNote() {
    if (this.newNotesForm.valid && this.editIndex !== null) {
      this.existing_data.notes[this.editIndex] = this.newNotesForm.value.note;
      this.service
        .addNewNote(this.user_id, this.existing_data.notes)
        .subscribe((res) => {
          this.result = res;
          this.editIndex = null;
          this.newNotesForm.reset();
          alert('Note Updated Successfully');
        });
    }
  }

  deleteNote(index: number) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.existing_data.notes.splice(index, 1);
      this.service
        .addNewNote(this.user_id, this.existing_data.notes)
        .subscribe((res) => {
          this.result = res;
          alert('Note Deleted Successfully');
        });
    }
  }

  cancelEdit() {
    this.editIndex = null;
    this.newNotesForm.reset();
  }

  



}
