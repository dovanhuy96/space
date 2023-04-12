import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {routes, renderRoute } from './routes/index';
import GlobalLoading from "./components/Common/Loading/GlobalLoading";
import LoadingOverlay from "./components/Common/Loading/LoadingOverlay";
import NotFound from "./components/NotFound/NotFound";
import { useAppSelector } from './store/hooks'
import LoginData from "./pages/Account/Login/Data";

const App = (): JSX.Element => {
    const loading = useAppSelector((state) => state.loads.loading)
    const [auth, setAuth] = useState<boolean>(false)

    useEffect(() => {

    }, [])
    
    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<GlobalLoading />}>
                    <div className="app">
                        <Switch>
                            {renderRoute(routes, auth)}
                            <Route path={'/login'} exact={true} render={() => <LoginData setAuth={setAuth} />} /> 
                            <Route path="*" exact={true}>
                                <NotFound />
                            </Route>
                        </Switch>
                        <LoadingOverlay loading={loading} />
                    </div>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
