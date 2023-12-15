import { Role } from './role.model';

export interface User {
  id: number;
  idArgos: string;
  userName: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  email: string;
  roles?: Role[];
}
