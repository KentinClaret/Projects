import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        // used to store current user in local storage to keep user logged when page refreshes
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.get<User>(`http://dev4.wizzcad.com:8081/logins?login=${username}&password=${password}`)
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user[0]));
            this.currentUserSubject.next(user[0]);
            return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    getDatas() {
        return this.http.get<any[]>(`http://dev4.wizzcad.com:8081/${this.currentUserValue.token}`)
        .pipe(map(datas => {
            return datas;
        }));
    }
}