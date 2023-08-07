import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularAuthUI';
  showLogin: boolean = false; // Initially, the login div is hidden

  signupUsers:any[]=[];
  signupobj:any={username:'',email:'', password:''};
  loginobj:any={
    username:'', 
     email:'',password:''
  };

ngOnInit():void
{
const localdata=localStorage.getItem('signupUsers');
if(localdata!=null)
{
  this.signupUsers=JSON.parse(localdata);
}
}  

onsignup()
{
   this.signupUsers.push(this.signupobj);
   localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers)); 
   this.signupobj={username:'',email:'', password:''};
 this.showLogin=true;
}
onlogin()
{
  const isUserExist=this.signupUsers.find(m=>m.email==this.loginobj.email && m.password==this.loginobj.password);
  if(isUserExist!=undefined)
  alert("user login sucessfully ");
  else
  alert("wrong credential !");

  this.loginobj={
    username:'', 
     email:'',password:''
  };
}
}
