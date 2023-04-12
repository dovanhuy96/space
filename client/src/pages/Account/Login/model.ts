export interface FormLogin {
    email: string;
    password: string;
    remember?: Boolean
}
export interface Ilogin {
    onLogin: (data: FormLogin) => void
}

export interface ILoginData {
    setAuth: any
}