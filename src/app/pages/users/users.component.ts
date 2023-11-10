import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
	listeUsers:Array<UsersI> = [
		{
			nom: "Pépito",
			prenom: "Micolassonne",
			email: "pepito@yahoo.fr",
			status: "user"
		},
		{
			nom: "Pincemi",
			prenom: "Pincemoi",
			email: "pincemi@pincemoi.fr",
			status: "admin"
		},
	];

}
