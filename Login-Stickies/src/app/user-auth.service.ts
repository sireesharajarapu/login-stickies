import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }
  // basic apiurl of the users data
  apiurl = "https://login-stickies-backend.onrender.com/users";
  

  // on succesful login of the user to post the data into the database
  registerUser(inputData:any){
    return this.http.post(this.apiurl,inputData);
  }

  // to get the user by email id to validate in login section
  getUserbyEmail(email:any){
    return this.http.get(this.apiurl+`?email=${email}`);
  }

  // to get the user by id to showcase the name in the dashboard section
  getUserbyId(id:any){
    return this.http.get(this.apiurl+`/${id}`);
  }

  addNewNote(id:any,newNote:any){
    return this.http.patch(this.apiurl+`/${id}`,{notes:newNote});
  }

}
