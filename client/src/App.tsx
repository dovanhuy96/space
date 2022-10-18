import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {routes, renderRoute } from './routes/index';
import MainApp from "./container";
import Background from "./components/Common/Background";
import GlobalLoading from "./components/Common/Loading";
import authStore from "./store/AuthStore";
import Avata from './assets/images/avatars/7.png';

const MOCK_USER_DATA = {
    id: '1',
    userName: 'Daenerys',
    fullName: 'Daenerys Targaryen',
    avatar: Avata,
}

const App = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        authStore.setUser(MOCK_USER_DATA);
        authStore.setAuth(true);
    }, [])
    
    return (
        <>
            {loading ? (
                <GlobalLoading />
            ) : (
                <BrowserRouter>
                    <Suspense fallback={<div>loading...</div>}>
                        <div className="space-app">
                            <MainApp>
                                <Switch>
                                    {renderRoute(routes, authStore.isAuth)}
                                    <Route path="*">
                                        <Redirect to="/" />
                                    </Route>
                                </Switch>
                                <Background />
                            </MainApp>
                        </div>
                    </Suspense>
                </BrowserRouter>
            )}
            
        </>
    );
}

export default App;
