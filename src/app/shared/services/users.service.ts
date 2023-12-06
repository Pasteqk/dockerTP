import { Injectable, inject } from '@angular/core';
import { Firestore, getDocs, doc, collection, addDoc, setDoc, updateDoc, deleteDoc, getDoc, DocumentSnapshot } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersI } from 'src/app/shared/models/users-i';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private store: Firestore) { 
    }

    auth = inject(AuthService);
    listUsers: UsersI[] = [];


    creerProfil(profil: UsersI) {
        addDoc(collection(this.store, 'users'), {
            email: this.auth.firebaseUser!.email,
            nom: profil.nom,
            prenom: profil.prenom,
            statut: profil.status,
            token: profil.token
        })
    }

    newUser(profil: UsersI, login: string, password: string) {
        this.auth.createUser(login, password).then(user => {
            if (user == null)
                return;
            const monDoc = doc(this.store, 'users', user.uid);
            setDoc(monDoc, {
                email: this.auth.firebaseUser!.email,
                nom: profil.nom,
                prenom: profil.prenom,
                status: profil.status,
                token: profil.token
            }, { merge: true }); // Si l'objet existe déjà, on le met à jour
        });
    }

    gereDoc(profil: UsersI) {
        const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
        setDoc(monDoc, {
            email: this.auth.firebaseUser!.email,
            nom: profil.nom,
            prenom: profil.prenom,
            status: profil.status,
            token: profil.token
        }, { merge: true }); // Si l'objet existe déjà, on le met à jour
    }

    lireDoc(): Promise<UsersI | null> {
        const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
        return getDoc(monDoc).then(document => {return document.data() as UsersI})
            .catch(er => {
                console.log(er);
                return (null)
            });
    }
    supprimerDoc() {
        const monDoc = doc(this.store, 'users', this.auth.firebaseUser!.uid);
        deleteDoc(monDoc);
    }
    getAllUsers(): Promise<Array<UsersI>> {
        this.listUsers = [];
        return getDocs(collection(this.store, 'users'))
        .then((us) => {
            us.forEach(u => {
                this.listUsers.push(u.data() as UsersI);
            })
            return this.listUsers;
        });
    }
}