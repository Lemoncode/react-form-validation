import { Login } from '../model/login';

export const loginRequest = (login: Login): Promise<boolean> =>
  Promise.resolve(login.name === 'admin' && login.password === 'test');
