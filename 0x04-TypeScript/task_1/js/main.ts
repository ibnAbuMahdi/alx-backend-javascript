interface Teacher{
readonly firstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: value]: any;
}

interface Directors extends Teacher{
numberOfReports: number;
}

function printTeacher(f: string, l: string): string | undefined{
	if (f.length && l.length){
		return f[0] + '. ' + l;
		}
		return undefined;
		}

interface printTeacherFunction {
  printTeacher: (f: string, l: string) => string | undefined;
}


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}




















































































