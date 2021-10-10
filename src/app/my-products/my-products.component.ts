import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  Uid: string | undefined;
  stt: string | undefined 

  constructor(private fs :AngularFirestore,private as:AuthService) { 
    this.as.user$.subscribe(user=>{
      this.Uid=user?.uid
    })

   
   }

  ngOnInit(): void {
    
  }
  
  addproduct(f: { value: any; }){
    let data=f.value
    this.fs.collection("products").add({
      title:data.title,
      description:data.description,
      image:data.image,
      uid:this.Uid
    })
}
}
