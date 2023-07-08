interface MajorCredits {
credits: number
}

interface MinorCredits {
credits: number
}

function sumMajorCredits: MajorCredits(subject1, subject2){
let major: MajorCredits = {credits: subject1.credits + subject2.credits};
return major;
}

function sumMinorCredits: MinorCredits(subject1, subject2){
let minor: MinorCredits = {credits: subject1.credits + subject2.credits};
return major;
}
