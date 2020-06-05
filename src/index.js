import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/browser'

Sentry.init({dsn: "https://65aba6cf9b7f4fde8463f8d949f95b04@o394241.ingest.sentry.io/5244127"});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
