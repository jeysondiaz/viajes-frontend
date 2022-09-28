import IRole from "./IRole";

export default interface IUser {
  idUser?: number;
	name: string;
	surname: string;
	email: string;
	password: string;
	enabled: number;
	idRol: IRole;
}

export const USER_DUMMY: IUser = {
  email: "",
  password: "",
  name: "",
  surname: "",
  enabled: 1,
  idRol: {
    idRol: 1,
    description: "admin_user",
    enabled: 1,
    role: "admin",
  },
};