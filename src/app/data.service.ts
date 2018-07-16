import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 private goals = new BehaviorSubject<any>(['First', 'Second']);

 goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
