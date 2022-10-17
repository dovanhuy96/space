import { Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {routes, renderRoute } from './routes/index';
import useStyles from './container/styles';
import MainApp from "./container";

const App = (): JSX.Element => {
    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(false);
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <>
            {loading ? (
                <div>loadingApp...</div>
            ) : (
                <BrowserRouter>
                    <Suspense fallback={<div>loadingComponent...</div>}>
                        <div className="space-app">
                                <Switch>
                            <MainApp>
                                    {renderRoute(routes, auth)}
                                    {/* <Route path="*">
                                        <Redirect to="/" />
                                    </Route> */}
                            </MainApp>
                                </Switch>
                        </div>
                    </Suspense>
                </BrowserRouter>
            )}
            
        </>
    );
}

export default App;
