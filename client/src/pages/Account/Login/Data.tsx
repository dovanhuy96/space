
import { login } from '../../../services/Auth';
import Login from './Index';
import { FormLogin, ILoginData } from './model';
import { useAppDispatch } from '../../../store/hooks'
import { setLoading } from '../../../store/slices/loadingStore.slice'
import { useHistory } from 'react-router-dom';


function LoginData(props: ILoginData) {
    const dispatch = useAppDispatch()
    let history = useHistory();
    const {
        setAuth
    } = props;

    const handleLogin = async (data: FormLogin) => {
        try {
            dispatch(setLoading(true))
            delete data['remember'];
            const res: any = await login(data);
            
            if (res.status == 'success') {
                setAuth(true);
                setTimeout(() => {
                    history.push('/')
                }, 300)
            }
            
        } catch (error) {
            console.log("err", error)
        } finally {
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 500)
        }
        
    }
    return(<Login onLogin={handleLogin} />);
}

export default LoginData;