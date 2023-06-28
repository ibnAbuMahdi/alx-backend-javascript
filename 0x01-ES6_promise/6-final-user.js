import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const out = [];
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((vals) => {
    for (const val of vals) {
      out[out.length] = { status: 'resolved', value: val };
    }
  }).catch((errs) => {
    out[out.length] = { status: 'resolved', value: errs };
  });
}
