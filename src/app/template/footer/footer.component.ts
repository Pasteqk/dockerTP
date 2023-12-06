import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
[x: string]: any;
    constructor(public auth:AuthService, public users:UsersService){}
  verifAdmin() {
    // console.log(Date.now());
    if(this.auth.firebaseUser === undefined){ 
      let res = false;
      return false;
    }
    return this.users.lireDoc().then(currentUser => {
      return currentUser?.status == 'superAdmin'});
  }

}