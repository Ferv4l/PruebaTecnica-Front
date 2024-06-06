declare global {
    interface Array<T> {
      toSorted(compareFn?: (a: T, b: T) => number): T[]
    }
  }
  
 // userInterface.ts
export interface User {
    email: string;
    name: {
      first: string;
      last: string;
    };
    location: {
      country: string;
    };
    picture: {
      thumbnail: string;
    };
  }
  
  export interface Ajustes {
    deleteUser: (email: string) => void
    cambiarColores: boolean
    users: User[];
  }