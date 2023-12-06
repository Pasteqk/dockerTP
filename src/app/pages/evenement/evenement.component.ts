import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { EvenementsService } from 'src/app/shared/services/evenements.service';
import { ParticipationEventsService } from 'src/app/shared/services/participation-events.service';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
desincriptionEvent() {
  this.participation.desinscription(this.antoine!);
  this.verif = false;
}
  participateEvent() {
    this.participation.participe(this.antoine!);
    this.verif = true;
  }
  antoine?: string;
  titre!: EvenementI;
  verif?: boolean;
//@Input('selectedE') selectedEvent!:EvenementI;
  constructor(public events: EvenementsService, private route:ActivatedRoute, public participation: ParticipationEventsService, public auth:AuthService){}

  ngOnInit():void{
    if(this.antoine !== "-1"){
      this.antoine = this.route.snapshot.paramMap.get('antoine') || '';
      this.events.getEvents(this.antoine).then(x =>{
         if(x != null)
          this.titre = x;
      });
    } 
    this.participation.verifInscription(this.antoine!).then(doc => this.verif = doc);
  }
}
