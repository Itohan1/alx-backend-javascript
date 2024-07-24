import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const firstFunction = await uploadPhoto();
  const secondFunction = await createUser();
  const fileName = 'photo-profile-1';
  const object = {
    photo: { status: firstFunction.status, body: fileName },
    user: { firstName: secondFunction.firstName, lastName: secondFunction.lastName },
  };
  return object;
}
