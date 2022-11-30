export default class User{

    constructor(_id, _name, _userName, _email){
        this.id = _id;
        this.name = _name;
        this.userName = _userName;
        this.email = _email;
    }

    get #getId(){
        return this._id;        
    }

    get #getName(){
        return this._name;
    }

    get #getEmail(){
        return this._email;
    }

    get #getUsername(){
        return this._username;
    }

    getInfo(){ 
        let info = [ this.id,this.userName,this.email,this.name ];
        return info;
    } 
}
