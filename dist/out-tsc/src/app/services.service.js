import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { user, aqar } from './models/models';
let ServicesService = class ServicesService {
    constructor(myAuth, db, router) {
        this.myAuth = myAuth;
        this.db = db;
        this.router = router;
        this.aqar = new aqar("", "", "", "");
        this.searchedAqar = new aqar("", "", "", "");
        this.aqar1 = new aqar("", "", "", "");
        this.aqar2 = new aqar("", "", "", "");
        this.aqar3 = new aqar("", "", "", "");
        this.aqar4 = new aqar("", "", "", "");
        this.aqars = [this.aqar1, this.aqar2, this.aqar3, this.aqar4];
        this.aqars2 = [];
    }
    signUp(User) {
        this.newUser = User;
        // additional data to DB
        this.db.firestore.collection('user Information').add({
            username: this.newUser.name,
            password: this.newUser.password,
            phone: this.newUser.phone,
            email: this.newUser.email,
        });
        // our authanticaion
        return this.myAuth.auth.createUserWithEmailAndPassword(this.newUser.email, this.newUser.password).then((success) => {
            alert("Thank you for joing Us");
            this.router.navigate(['/member']);
        }).catch((failed) => {
            alert(failed);
        });
    }
    logIn(mail, password) {
        return this.myAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(user);
            alert("You have LogIn");
            yield this.updateUser(mail);
            this.router.navigate(['/member']);
        })).catch((failed) => {
            alert(failed);
        });
    }
    logOut() {
        return this.myAuth.auth.signOut().then(succes => {
            alert("you have signOut");
            this.newUser = null;
            this.router.navigate(["/login"]);
        }).catch(fail => { alert(fail); });
    }
    isLogIn() {
        this.myAuth.auth.onAuthStateChanged(firebase => {
            return firebase;
        });
    }
    addaqar() {
        //initialize array 
        this.aqar1.name = 'VapoRub';
        this.aqar1.description = 'يوضع على موضع الالم ويدللك ل 3-4 د ';
        this.aqar1.price = '10';
        this.aqar2.name = 'VapoRub';
        this.aqar2.description = 'يوضع على موضع الالم ويدللك ل 3-4 د ';
        this.aqar2.price = '10';
        this.aqar3.name = 'VapoRub';
        this.aqar3.description = 'يوضع على موضع الالم ويدللك ل 3-4 د ';
        this.aqar3.price = '10';
        this.aqar4.name = 'VapoRub';
        this.aqar4.description = 'يوضع على موضع الالم ويدللك ل 3-4 د ';
        this.aqar4.price = '10';
        //add to DB
        this.aqars.forEach(element => {
            this.db.firestore.collection('aqar').add({
                name: element.name,
                price: element.price,
                description: element.description
            });
        });
    }
    pullAqars() {
        this.aqars = [];
        this.db.firestore.collection('aqar').get().then((snapshot) => snapshot.docs.forEach(doc => {
            this.aqars2.push(doc.data());
        }));
        return this.aqars2;
    }
    searchAqar(name) {
        let searchAqar = new aqar("", "", "", "");
        this.db.firestore.collection('aqar').where('name', '==', name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                searchAqar.name = doc.data().name;
                searchAqar.price = doc.data().price;
                searchAqar.description = doc.data().description;
            });
        }).catch(err => {
            alert(err);
        });
        return searchAqar;
    }
    getId(email) {
        let id;
        //get id of User
        this.db.firestore.collection('user Information').where('email', '==', email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                id = doc.id;
            });
        }).then(succes => {
            console.log(id);
            return id;
        }).catch(err => {
            alert(err);
        });
    }
    addReminder(aqar, remaindInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let user = yield this.getUser();
            if (user == null) {
                alert("null");
                return;
            }
            // let id:string;
            // console.log(this.getId(user));
            let userId;
            //get id of User
            yield this.db.firestore.collection('user Information').where('email', '==', user.email).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    userId = doc.id;
                });
            }).catch(err => {
                alert(err);
            });
            //add Remainder to RemainderDb and HisoryAqar to HisoryDB
            this.db.firestore.collection('RemainderDb').add({
                id: userId,
                title: remaindInfo.title,
                date: remaindInfo.date,
                time: remaindInfo.time,
            }).then((succes) => {
                console.log("RemainderDb is added");
            }).catch(err => {
                console.log(err);
            });
            this.db.firestore.collection('HisoryAqar').add({
                id: userId,
                name: aqar.name,
                description: aqar.description,
                price: aqar.price,
                imgUrl: aqar.imgUrl,
            }).then((succes) => {
                console.log("HisoryAqar is added");
            }).catch(err => {
                console.log(err);
            });
            alert("Remainder is Addes");
        });
    }
    isAnonymous() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let isAnonymous;
            yield this.myAuth.auth.onAuthStateChanged(user => {
                isAnonymous = user.isAnonymous;
            });
            return isAnonymous;
        });
    }
    getUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.newUser != undefined && this.newUser != null)
                return this.newUser;
            else {
                yield this.myAuth.auth.onAuthStateChanged((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (user != null) {
                        yield this.updateUser(user.email);
                    }
                }));
                return this.newUser;
            }
        });
    }
    updateUser(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let currentUser = new user();
            this.newUser = yield this.db.firestore.collection('user Information').where('email', '==', email).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    currentUser.name = doc.data().username;
                    currentUser.phone = doc.data().phone;
                    currentUser.myHisoryAqars = doc.data().myHisoryAqars;
                    currentUser.myRemainders = doc.data().myRemainders;
                    currentUser.password = doc.data().password;
                    currentUser.email = email;
                });
                return currentUser;
            }).catch(err => {
                alert(err);
                return null;
            });
        });
    }
    signInAsGuset() {
        this.myAuth.auth.signInAnonymously().then(succes => {
            alert("Thank you for joining us");
            this.router.navigate(['member']);
        });
    }
    pullMyHistory() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let currentUser = yield this.getUser();
            let userId;
            let historyAqars = [];
            //get id of User
            yield this.db.firestore.collection('user Information').where('email', '==', currentUser.email).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    userId = doc.id;
                });
                return userId;
            }).catch(err => {
                alert(err);
            });
            // pull hisory recond with id
            this.db.firestore.collection("HisoryAqar").where("id", "==", userId)
                .get()
                .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    historyAqars.push(doc.data());
                    console.log(doc.data());
                });
                console.log(historyAqars);
            })
                .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
            return historyAqars;
        });
    }
    pullMyRemainders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let currentUser = yield this.getUser();
            let userId;
            let remainders = [];
            //get id of User
            yield this.db.firestore.collection('user Information').where('email', '==', currentUser.email).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    userId = doc.id;
                });
                return userId;
            }).catch(err => {
                alert(err);
            });
            this.db.firestore.collection("RemainderDb").where("id", "==", userId)
                .get()
                .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    remainders.push(doc.data());
                    console.log(doc.data());
                });
                console.log(remainders);
            })
                .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        });
    }
    getAqarInfo(Name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let searchedAqar;
            yield this.db.firestore.collection('aqar').where('name', '==', Name).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    searchedAqar = doc.data();
                });
            }).catch(err => {
                alert(err);
            });
            return searchedAqar;
        });
    }
};
ServicesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ServicesService);
export { ServicesService };
//# sourceMappingURL=services.service.js.map