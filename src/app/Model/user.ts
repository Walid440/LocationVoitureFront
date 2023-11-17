import { Role } from './role';

export class User {
  id!: number;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  avatar!: string;
  role!: Role;
  token?: string;
  telephone!:string;
delivre!:string;
permis!:string;
naissance!:string;
}
