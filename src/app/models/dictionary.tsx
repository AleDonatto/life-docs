export interface Users {
  uuid?: string;
  username: string;
  nombre: string;
  grado: string;
  active?: boolean;
  role?: string;
  rolId?: string;
  password?: string;
}

export interface Roles {
  uuid: string;
  nameRol: string;
}
