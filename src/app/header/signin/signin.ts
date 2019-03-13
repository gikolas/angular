import { Component } from '@angular/core';
import { modalService } from '../../modal/modalservice';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { firebaseService } from '../../firebase/firebase.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PasswordValidation } from './validators';
import { animate, trigger, style, transition, state } from '@angular/animations';

@Component({
    selector: 'signin',
    templateUrl: './signin.html',
    styleUrls: ['./signin.css'],
    animations: [
        trigger('forebaseModal', [
            state('fadeIn', style({
                opacity: 0.1
            })),
            state('fadeOut', style({
                opacity: 1
            })),
            transition("fadeIn<=>fadeOut", [animate('1.5s')])
        ])
    ]

})



export class signin {
    showSignUp = false;
    setColor = false;
    loadingStatus: boolean;
    activateStatus: boolean;
    showModalnav: boolean = false;
    modalText: string;
    fadeState = "fadeIn";
    showModalSuccess: boolean = false;
    successText = "Registration Completed Successfully";
    SignIn() {
        this.showSignUp = false;
        this.setColor = false;
    }

    SignUp() {
        this.showSignUp = true;
        this.setColor = true;
    }

    constructor(
        private modalService: modalService,
        private firebaseService: firebaseService,
        private route: Router,
        private fb: FormBuilder
    ) {

    }

    ModalStatus: boolean = true;
    closeModal() {

        setTimeout(() => {

            this.ModalStatus = true;
        }, 300);


    }

    showModal() {
        setTimeout(() => {

            this.ModalStatus = false;
        }, 300);
    }

    signInForm = new FormGroup({
        username: new FormControl('',
            [Validators.email, Validators.required]),
        password: new FormControl('',
            [Validators.required, Validators.minLength(6)])
    })
    get password() {
        return this.signInForm.get('password');
    }

    get username() {
        return this.signInForm.get('username');
    }

    signUpForm = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rpassword: ['', [Validators.required]]

    },
        {
            validator: PasswordValidation.MatchPassword
        })

    get passwordUp() {
        return this.signUpForm.get('password');
    }

    get usernameUp() {
        return this.signUpForm.get('username');
    }

    get rpassword() {
        return this.signUpForm.get('rpassword');
    }


    Param: boolean = false;
    onSubmit(e: Event) {

        setTimeout(() => {
            this.ModalStatus = true;
        }, 200)

        e.preventDefault();
        this.loadingStatus = true;
        this.firebaseService.loadingSubject.next(true);
        this.firebaseService.logIn(this.signInForm.controls.username.value,
            this.signInForm.controls.password.value).then((res) => {
                this.firebaseService.loadingSubject.next(false);
                window.localStorage.setItem('activate', '0');
                this.firebaseService.userNameSubject.next(this.signInForm.controls.username.value);
                window.localStorage.setItem('username', this.signInForm.controls.username.value);
                this.firebaseService.canAcitaveSubjet.next(false);
                this.firebaseService.Username = window.localStorage.getItem('username');
                this.activateStatus = true;
                this.Param = true;
                this.route.navigate(['myApp']);
            }).catch((err) => {
                setTimeout(() => {
                    this.showModalnav = true;
                    this.modalText = err;
                    this.fadeState = "fadeOut";
                }, 500);

                this.Param = false, this.firebaseService.loadingSubject.next(false);
            }

            )


    }

    onSubmitUp(e: Event) {
        e.preventDefault();
        setTimeout(() => {
            this.ModalStatus = true;
        }, 200)
        this.firebaseService.loadingSubject.next(true);
        this.firebaseService.register(this.signUpForm.controls.username.value,
            this.signUpForm.controls.password.value).then((res) => {
                this.firebaseService.loadingSubject.next(false);
                this.showModalSuccess = true;
                this.fadeState = "fadeOut";
            }).catch((err) => {
                setTimeout(() => {
                    this.showModalnav = true;
                    this.modalText = err;
                    this.fadeState = "fadeOut";
                }, 500);
                this.firebaseService.loadingSubject.next(false);
            })
    }


    ngOnInit() {
        this.fadeState = "fadeIn";
        if (window.localStorage.getItem('activate')) {
            this.activateStatus = true;
        }
        else {
            this.activateStatus = false;
        }
        firebase.initializeApp({
            apiKey: "AIzaSyDVpS3ltAn_CWIXQTtdPuw3YL1DX4-I2IQ",
            authDomain: "angular-http-7477a.firebaseapp.com",
        })
    }

    LogOut(e: Event) {
        e.preventDefault();
        window.localStorage.removeItem('activate');
        window.localStorage.removeItem('username');
        this.activateStatus = false;
        setTimeout(() => {
            this.ModalStatus = true;
        }, 200)
        this.route.navigate(['./']);
        this.firebaseService.canAcitaveSubjet.next(true);
    }
    closeModalemail() {
        this.fadeState = "fadeIn";
        setTimeout(() => {
            this.showModalnav = false
        }, 500)

    }

    plsSignIn() {
        this.fadeState = "fadeIn";
        this.route.navigate(['./']);
        setTimeout(() => {
            this.showModalSuccess = false
        }, 500)
    }
}