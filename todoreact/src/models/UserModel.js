export class UserModel {
	// id: Object ID
	// name: String
	// lastName: String
	// createdAt: String
	// email: String
	// pass: String
	// imageProfile: String

	constructor(
		_name = null,
		_lastName = null,
		_email = null,
		_pass = null,
		_imageProfile = null,
		_createdAt = null,
		_id = null
	) {
		if (_id !== null) this.id = _id;
		if (_name !== null) this.name = _name;
		if (_lastName !== null) this.lastName = _lastName;
		if (_email !== null) this.email = _email;
		if (_pass !== null) this.pass = _pass;
		this.imageProfile = _imageProfile;
		this.createdAt =
			_createdAt === null ? new Date() : new Date(_createdAt);
	}
}
