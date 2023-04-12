import { Button, Checkbox, Form, Input } from "antd";
import './styles.scss';
import BannerLogin from '../../../assets/images/banner-login.avif'
import { useState } from 'react';
import { useForm } from "antd/es/form/Form";

import { FormLogin, Ilogin } from "./model";

const Login = ({ onLogin }: Ilogin): JSX.Element => {


    const [form] = useForm();
    const [formValue, setFormValue] = useState<FormLogin>({ email: '', password: '', remember: true });

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={BannerLogin} alt="Login" />
                </div>
                <Form
                    form={form}
                    name="login-form"
                    initialValues={formValue}
                    onFinish={onLogin}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>
                    <Form.Item
                        name="email"
                        validateTrigger={['onBlur']}
                        rules={[
                            () => ({
                                validator(_, value) {
                                    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Email is not a valid email!'));
                                },
                            }),
                        ]}
                    >
                        <Input
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        validateTrigger={['onBlur']}
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { max: 20, message: 'Password must be up to 20 characters' },
                            { min: 6, message: 'Password must be at least 6 characters' },
                        ]}
                    >
                        <Input.Password
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                disabled={
                                    form.getFieldsError().filter(({ errors }) => errors.length).length > 0
                                }
                            >
                                LOGIN
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Login;