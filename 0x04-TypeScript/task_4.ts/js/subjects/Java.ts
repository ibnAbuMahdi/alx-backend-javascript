/// <referance path="Teacher.ts">


namespace Subjects {
	interface Teacher {
		experienceTeachingJava: number;
		}
export class React extends Subject {
getRequirements(): string{
	return 'Here is the list of requirements for Java';
	}

	getAvailableTeacher (): string{
		return this.teacher.experienceTeachingJava ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';	
		}
}


