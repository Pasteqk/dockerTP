import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
	constructor(public users: UsersService){
		this.users.getAllUsers().then(us => this.listeUsers = us);
	};
	listeUsers:Array<UsersI> = [];
	
}
