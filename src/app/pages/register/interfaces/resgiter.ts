export interface DataRegister {
  bornDate: string;
  document: string;
  documentType: number;
  email: string;
  expeditionDate: string;
  gender: number;
  password: string;
  phone: string;
}

export class RegisterContract {
  status: string;
  code: number;
  tittle: string;
  contract: string;
}

export interface RegisterResponse {
  status: string;
  message: string;
  code: number;
}
