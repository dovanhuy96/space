import { Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {routes, renderRoute } from './routes/index';

const App = (): JSX.Element => {

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
                                {renderRoute(routes, auth)}
                                <Route path="*">
                                    <Redirect to="/" />
                                </Route>
                            </Switch>
                        </div>
                    </Suspense>
                </BrowserRouter>
            )}
            
        </>
    );
}

export default App;
