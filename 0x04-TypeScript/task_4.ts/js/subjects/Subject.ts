/// <reference path="Teacher.ts" />
namespace Subjects {
export class Subject{
	constructor(teacher: Teacher){
		this.teacher = teacher;
		}

	set setTeacher(teacher: Teacher){
		this.teacher = teacher;
		}
}
}
