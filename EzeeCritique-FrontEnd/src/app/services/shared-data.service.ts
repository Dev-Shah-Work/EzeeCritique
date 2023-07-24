import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from './user.service';
import User from '../model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements OnInit{
  activeUser:User|undefined
  constructor(private user:UserService ) {}
  ngOnInit(): void {
    this.user.getUserDetails().subscribe(val=>{
      this.activeUser=val
      console.warn(this.activeUser)
    })
  }
 
}
