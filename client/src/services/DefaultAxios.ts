import axios from 'axios';
import { RESPONSE_STATUS } from '../constants/Const';
import { localStorageHelper } from '../helpers';

class DefaultAxios {
    api;
    URL;
    constructor() {
        this.URL = 
            !process.env.NODE_ENV
            || process.env.NODE_ENV === 'development'
            ? process.env.REACT_APP_API_URL_LOCAL
            : process.env.REACT_APP_API_URL

        this.api = axios.create({
            baseURL: `${this.URL}/${process.env.API_CURRENT_VERSION}`,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            
        });
        this.api.interceptors.response.use(this.handleResponse, this.handleError);
    }


    setHeader = () => {
        this.api.defaults.responseType = 'json';
    }

    handleResponse = (response: any) => {
        return response?.data;
    }

    handleError = (error: any) => {
        if (RESPONSE_STATUS.FAIL.indexOf(error?.response?.status) > -1) {
            localStorageHelper.remove('token');
            const evt = new CustomEvent('rolbackRoute', {
                detail: '/login',
            });
            window.dispatchEvent(evt);
        }
        return Promise.reject(error);
    }

    get = (url = '', params = {}) => {
        this.setHeader();
        return this.api.get(url, { params });
    }

    post = (url = '', body = {}, config = {}) => {
        this.setHeader();
        return this.api.post(url, body, config);
    }

    patch = (url = '', body = {}, config = {}) => {
        this.setHeader();
        return this.api.patch(url, body, config);
    }

    put = (url = '', body = {}, config = {}) => {
        this.setHeader();
        return this.api.put(url, body, config);
    }

    delete = (url = '', config = {}) => {
        this.setHeader();
        return this.api.delete(url, config);
    }
}

export default new DefaultAxios()
