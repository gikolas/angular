import { Component } from '@angular/core';
import { firebaseService } from './firebase/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: firebaseService) { }
  loadingStatus: boolean;
  ngOnInit() {
    this.fb.loadingSubject.subscribe((status: boolean) => {
      this.loadingStatus = status;
    });
  }

}
