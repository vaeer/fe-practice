import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {lazy, Suspense} from 'react';
import './App.css';


const routes = require.context('./', true, /.(js|tx|jsx)$/).keys().filter(item => item.includes('routes'));
const execPath = path => '/' + path.split('/')[2];

export default () => (
    <Suspense fallback={<div>loading。。。。。</div>}>
        <Router>
            <Switch>
                {
                    routes.map((route, index) => {
                        const C = lazy(() => import(`${route}`));
                        console.log(execPath(route));
                        return (<Route
                            exact
                            path={execPath(route)}
                            key={index}
                            render={() => <C/>}
                        />);
                    })
                }
            </Switch>
        </Router>
    </Suspense>
);