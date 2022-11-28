class Post  {
    constructor(_id, _postDate, _description) {
      this.id = _id;
      this.postDate = _postDate;
      this.description = _description;
    }

    constructor(_name, _city, _email) {
      this.name = _name;
      this.city = _city;
      this.email = _email;
  }

  get Id() {
      return this.id;
  }

  get getPostdate() {
      return this.postDate;
  }

  get Description() {
      return this.email;
  }

}
  

export default Contact;
