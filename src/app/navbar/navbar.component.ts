import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser: boolean | undefined

  constructor(private af :AngularFireAuth, private route:Router, private as:AuthService) { 
    this.as.user$.subscribe(user=>{
      if (user){
        this.isUser=true
      }
      else
      {
        this.isUser=false
      }
    })
  }

  ngOnInit(): void {
  }
  logout(){
    this.af.signOut().then(()=>{
     // console.log("oui")
     this.route.navigate(['/login'])
    })
    .catch(()=>{
      console.log("non")
    })
    }
  }


