import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import InputField from '../../../components/InputField';
import authStore from '../../../store/AuthStore';
import useStyles from './styles';

interface SigninFormValue {
    username: string;
    password: string;
}

function Login(): JSX.Element {
    // const { buttonClass, titleClass } = useCommonStyles();
    const classes = useStyles();
    const [error, setError] = useState({ isError: false, msg: '' });
    const formValues = useRef<SigninFormValue>({ username: '', password: '' });
    const [isSigning, setIsSigning] = useState<boolean>(false);
    const history = useHistory();
    const isAuth = authStore.isAuth;

    const onLogin = async (): Promise<void> => {
        const { username, password } = formValues.current;

        if (!username.trim() && !password.trim()) {
            setError({ isError: true, msg: 'Username or password is required !' });
            return;
        }

        setIsSigning(true);
            // const email = username + otherConstants.EMAIL_DOMAIN;
            // try {
            //     const userCredential = await signInWithEmailAndPassword(
            //         auth.getAuth(),
            //         email,
            //         password,
            //     );
            //     if (userCredential) {
            //         history.push('/');
            //     }
            // } catch (err: any) {
            //     if (err?.code) {
            //         setError({ isError: true, msg: err.code });
            //     }
            //     setIsSigning(false);
            // }
        };

    return (
        <>
            {isAuth ? (
                <Redirect to='/' />
            ) : (
                <Box 
                    p={10} 
                    className='flex-center flex-col'
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '16px'
                    }}
                >
                    <Box className={classes.formWrap}>
                        <Stack spacing={4}>
                            <Typography 
                                component='h3' 
                                variant='h3' 
                                sx={{ 
                                    textAlign: 'center',
                                    fontFamily: 'Mali',
                                    fontSize: '40px'
                                }}
                            >
                                LOGIN
                            </Typography>

                            {error.isError && (
                                <Typography component='p' className={classes.errorMessage}>
                                    {error.msg}
                                </Typography>
                            )}

                            <InputField
                                icon={PersonIcon}
                                placeholder='Username'
                                name='username'
                                maxLength={100}
                                type='text'
                                autoFocus={true}
                                onChange={(e) => (formValues.current.username = e.target.value)}
                            />

                            <InputField
                                icon={LockIcon}
                                placeholder='Password'
                                type='password'
                                maxLength={100}
                                name='password'
                                onChange={(e) => (formValues.current.password = e.target.value)}
                            />

                            <Button
                                className={`${classes.submitBtn} ${isSigning ? 'disabled' : ''
                                    }`}
                                variant='contained'
                                onClick={onLogin}
                            >
                                Login
                            </Button>

                            <Typography component='p' className={classes.redirectMessage}>
                                Not a member?{' '}
                                <Link to={'/signin'} className={classes.link}>
                                    Sign up now
                                </Link>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            )}
        </>
    );
}

export default Login;
