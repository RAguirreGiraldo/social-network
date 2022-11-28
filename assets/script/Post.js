class Post  {
    constructor(_id, _postDate, _description) {
      this.id = _id;
      this.postDate = _postDate;
      this.description = _description;
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
