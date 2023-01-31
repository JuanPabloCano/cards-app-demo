import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { first } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public readonly auth: AngularFireAuth) {
  }

  public async login({ email, password }: any) {
    try {
      return this.auth.signInWithEmailAndPassword(email, password);
    } catch ( err ) {
      return err;
    }
  }

  public async register({ email, password }: any) {
    try {
      return this.auth.createUserWithEmailAndPassword(email, password);
    } catch ( err ) {
      return err;
    }
  }

  public async logout() {
    try {
      return this.auth.signOut();
    } catch ( err ) {
      return err;
    }
  }

  public async googleLogin() {
    try {
      return this.auth.signInWithPopup(new GoogleAuthProvider());
    } catch ( err ) {
      return err;
    }
  }

  public async getCurrentUser() {
    try {
      return this.auth.authState.pipe(first()).toPromise();
    } catch ( err ) {
      return err;
    }
  }
}
