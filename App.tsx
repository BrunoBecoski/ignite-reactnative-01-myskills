import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';

import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://6b8105312c7a4882a9021bfb09accc18@o1185744.ingest.sentry.io/6305709",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

import { Home } from './src/pages/Home';

function App() {

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE
    });

    // throw new Error('Não foi possível abrir a aplicação. Não fique triste, tente mais tarde.');

    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={'#121015'}
      />
      <Home />
    </>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(App);