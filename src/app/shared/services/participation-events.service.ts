import { Injectable } from '@angular/core';
import { Firestore, doc, collection, getDocs, addDoc, setDoc, updateDoc, deleteDoc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable, from } from 'rxjs';
import { AuthService } from './auth.service';
import { query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ParticipationEventsService {
  participe(idEvent: string) {
    addDoc(collection(this.store, 'participationEvents'), {
      idEvent: idEvent,
      idUser: this.auth.firebaseUser!.uid
    },)
  }

  async verifInscription(idEvent: string) {
    const recherche = query(
      collection(this.store, 'participationEvents'),
      where("idEvent", "==", idEvent),
      where("idUser", "==", this.auth.firebaseUser!.uid)
    );
    await getDocs(recherche).then(docs => { return (!docs.empty) })
  };

  desinscription(idEvent: string) {
    const recherche = query(
      collection(this.store, 'participationEvents'),
      where("idEvent", "==", idEvent),
      where("idUser", "==", this.auth.firebaseUser!.uid)
    );
    getDocs(recherche).then(
      documentRecup => documentRecup.forEach(
        document => deleteDoc(doc(this.store, 'participationEvents', document.id))
      )
    );
  }
  constructor(private store: Firestore, private auth: AuthService) { }
}
