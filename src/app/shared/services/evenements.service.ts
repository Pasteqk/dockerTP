import { Injectable, inject } from '@angular/core';
import { EvenementI } from 'src/app/shared/models/evenement-i';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, from } from 'rxjs';
import { Firestore, doc, collection, getDocs, addDoc, setDoc, updateDoc, deleteDoc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';


@Injectable({
	providedIn: 'root'
})
export class EvenementsService {
	listeEvents: Array<EvenementI> = [];
	listeEventsID: Array<String> = [];
	listeEvents$: BehaviorSubject<Array<EvenementI>> = new BehaviorSubject([] as Array<EvenementI>);


	constructor(private http: HttpClient, private store: Firestore) {
		this.getAllEvents();
	}


	getAllEvents() {
		this.listeEvents = [];
		getDocs(collection(this.store, 'events'))
			.then((us) => {
				us.forEach(u => {
					console.log(u.data());
					this.listeEvents.push(u.data() as EvenementI);
					this.listeEventsID.push(u.id as String);
				})
			});
	}

	getEvents(id: any) {
		const monDoc = doc(this.store, 'events', id);
		return getDoc(monDoc).then(document => {
			return document.data() as EvenementI
		})
			.catch(er => {
				console.log(er);
				return (null)
			});
	}

	newEvent(events: EvenementI) {
		const monDoc = doc(this.store, 'events', `${events.date}`);
		setDoc(monDoc, events,
			{ merge: true }).then().catch( er => console.error(er));
			 // Si l'objet existe déjà, on le met à jour
	}
}
