import { makeAutoObservable } from "mobx"

class Auth {
    isAuth: boolean = true;
    user: any = {};

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {

    }

    setAuth(data: boolean) {
        this.isAuth = data;
    }

    setUser(data: any) {
        this.user = data;
    }
}

const authStore = new Auth()
export default authStore;