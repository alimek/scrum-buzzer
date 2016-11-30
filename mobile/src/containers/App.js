/** @flow */

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Router from '../routes';
import store from '../store';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <NavigationProvider router={Router}>
            <StatusBar
              barStyle="light-content"
              animated
            />
            <StackNavigation initialRoute={Router.getRoute('home')} />
          </NavigationProvider>
      </Provider>
    )
  }
}

export default App;