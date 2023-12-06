import { Component } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';

@Component({
  selector: 'app-orga-events',
  templateUrl: './orga-events.component.html',
  styleUrls: ['./orga-events.component.css']
})
export class OrgaEventsComponent {
  date: Date = new Date();

  constructor(public event: EvenementsService) { }
  
  title = 'Enregister un évènement.';
  

  formData = {
    titre: '',
    date: 0,
    places: 0,
    horaires: {debut: '', fin: ''},
    image: '',
    alt: '',
    info: ''
  };

  onSubmit() {
    
    this.formData.date = (new Date (this.date)).getTime();
    this.event.newEvent(this.formData as EvenementI);
  }
}