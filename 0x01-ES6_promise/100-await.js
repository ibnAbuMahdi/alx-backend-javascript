import { uploadPhoto, createUser } from './utils'

export default async function asyncUploadUser(){
  let photo = uploadPhoto();
  let user =  createUser();
  if (await photo && await user){
    return { photo: photo.then((res)=> res), user: user.then((res)=> res), };
  } else {
    return { photo: null, user: null, };
  }
}
