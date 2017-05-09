import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomePage } from '..\\pages\\home\\home';
import { BillDataProvider } from '..\\providers\\bill-data\\bill-data';
import { AuthDataProvider } from '..\\providers\\auth-data\\auth-data';
import { MyApp } from '.\\app.component';

const firebaseConfig = {
    apiKey: "AIzaSyAHzpjh7ckhWoG1txvvgWb7UcV-EULWb74",
    authDomain: "debttracker-adff0.firebaseapp.com",
    databaseURL: "https://debttracker-adff0.firebaseio.com",
    projectId: "debttracker-adff0",
    storageBucket: "debttracker-adff0.appspot.com",
    messagingSenderId: "692321075824"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        BillDataProvider,
        AuthDataProvider,
        Camera
    ]
})
export class AppModule { }
