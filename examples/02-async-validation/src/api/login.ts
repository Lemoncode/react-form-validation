import { Login } from '../model/login';

const githubUrl: string = 'https://api.github.com/users/';

const checkStatus = (response: Response) => {
  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return response;
};

export const doesLoginExist = (name: string): Promise<boolean> =>
  fetch(`${githubUrl}${name}`)
    .then(checkStatus)
    .then(response => response.json())
    .then(() => true)
    .catch(() => false);

export const loginRequest = (login: Login): Promise<boolean> =>
  Promise.resolve(login.name === 'admin' && login.password === 'test');
