interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
	}
const st1: Student = {firstName: 'first', lastName: 'last', age: 33, location: 'Kano'};
const st2: Student = {firstName: 'first2', lastName: 'last2', age: 23, location: 'Kebbi'};

const arr: [Student, Student]  = [st1, st2];

for(const st in arr){
	console.log(st.firstName + '\t' + st.location);
}
