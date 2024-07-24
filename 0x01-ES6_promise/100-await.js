import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const firstFunction = await uploadPhoto();
  const secondFunction = await createUser();
  const object = {
    photo: { status: firstFunction.status, body: firstFunction.body },
    user: { firstName: secondFunction.firstName, lastName: secondFunction.lastName },
  };
  return object;
}
