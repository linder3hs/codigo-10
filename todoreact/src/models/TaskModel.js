export class TaskModel {
	// id: Object ID
	// name: String
	// createdAt: String
	// doneAt: String
	// deletedAt: String

	constructor(
		_id = null,
		_name = null,
		_createdAt = null,
		_doneAt = null,
		_deletedAt = null
	) {
		if (_id !== null) this.id = _id;
		if (_name !== null) this.name = _name;
		this.createdAt =
			_createdAt === null ? new Date() : new Date(_createdAt);
		this.doneAt = _doneAt === null ? null : new Date(_doneAt);
		this.deletedAt = _deletedAt === null ? null : new Date(_deletedAt);
	}
}
