import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class AuthDataProvider {

    fireAuth: any;

    constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {

        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.fireAuth = user;
            }
        });

    }

}
