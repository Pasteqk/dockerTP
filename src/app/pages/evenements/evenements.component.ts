import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent {
	filtre: string = '';
	constructor(public events: EvenementsService) {}
}
