import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../shared/services/user.profile.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private profileService: UserProfileService) {
    this.user = new User();
  }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe((user) => {
        this.user = user;
      }, (error) => {
        console.log('Profile Service is failing....');
      });
  }

}
