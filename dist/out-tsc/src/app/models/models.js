export class user {
    constructor(name, email, phone, password, myHisoryAqars, myRemainders) {
        this.myHisoryAqars = [];
        this.myRemainders = [];
        this.name = name;
        this.phone = phone;
        this.myHisoryAqars = myHisoryAqars;
        this.myRemainders = myRemainders;
        this.email = email;
        this.password = password;
    }
}
export class remainder {
    constructor(title, date, time) {
        this.title = title;
        this.date = date;
        this.time = time;
    }
}
export class aqar {
    constructor(name, description, price, imgUrl) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}
//# sourceMappingURL=models.js.map