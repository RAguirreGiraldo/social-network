class User{
    constructor(_id, _name, _userName, _email){
        this._id = _id;
        this._name = _name;
        this._userName = _userName;
        this._email = _email;
    }

    get getId(){
        return this._id;
    }

    get getName(){
        return this._name;
    }

    get getEmail(){
        return this._email;
    }

    get getUsername(){
        return this._username;
    }
    
}