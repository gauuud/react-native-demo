/*
 * Copyright (c) 2011-2018, Zingaya, Inc. All rights reserved.
 */

'use strict';

import React from 'react';

import RootStack from './src/routes/routes';
import NavigationService from './src/routes/NavigationService';

import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://05e63699420f457c9ecb224b08abd0e2@o527441.ingest.sentry.io/5643723', 
});



export default class App extends React.Component {
  render() {
    return <RootStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
    />;
  }
}
