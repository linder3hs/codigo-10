export class UserModel {
  constructor(
    _name = null,
    _lastName = null,
    _email = null,
    _pass = null,
    _imageProfile = null,
    _createdAt = null,
    _id = null
  ) {
    this.id = _id;
    this.name = _name;
    this.lastName = _lastName;
    this.email = _email;
    this.pass = _pass;
    this.imageProfile = _imageProfile;
    this.createdAt = !_createdAt ? new Date() : new Date(_createdAt);
  }

  getFullname() {
    return `${this.name} ${this.lastName}`;
  }

  getFullDetails() {
    return `${this.getFullname()} > ${this.createdAt.toDateString()}`;
  }
}
