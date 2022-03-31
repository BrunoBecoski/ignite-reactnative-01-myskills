import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';

import { Home } from './src/pages/Home';

function App() {

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE
    });

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