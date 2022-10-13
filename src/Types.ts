export interface NewUser {
  name: string;
  password: string;
  position: string;
  confirmpassword: string;
}

export interface LoginInput {
  username: string;
  password: string;
}
