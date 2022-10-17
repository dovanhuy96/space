import { makeAutoObservable } from "mobx"

class Auth {
    isAuth: boolean = true;

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {

    }
}

const authStore = new Auth()
export default authStore;