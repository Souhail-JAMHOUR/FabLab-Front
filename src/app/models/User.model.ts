export interface UserRegisterRequest {
  username: string
  name: string
  email: string
  password: string
  confirmedPassword: string
  imageUrl: string
  cin: string
  birthDate: string
  sex: string
  status: string
  etablissment: string
}


export interface AdminRegisterRequest {
  username: string
  name: string
  email: string
  password: string
  imageUrl: string
  confirmedPassword: string
  cin: string
  birthDate: string
  sex: string
  poste: string
}
