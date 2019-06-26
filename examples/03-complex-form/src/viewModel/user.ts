export interface User {
  name: string;
  email: string;
  address: Address;
}

interface Address {
  name: string;
  number: string;
}

export const createEmptyUser = (): User => ({
  name: '',
  email: '',
  address: {
    name: '',
    number: '',
  },
});
