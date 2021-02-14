import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from './pages/Home';
import AnalysisOverviewPage from './pages/AnalysisOverviewPage.js';

const stackNavigator = createSharedElementStackNavigator(
  {
    Home: Home,
    AnalysisOverviewPage: AnalysisOverviewPage,
  },
  {
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
/*const ModalStack = createStackNavigator(
    {
      Main: MainStack,
      ModalSearch: ModalSearch,
      ModalAppointmentUser: ModalAppointmentUser,
      ModalAppointmentDanisman: ModalAppointmentDanisman,
    },
    {
      mode: 'modal',
      headerMode: 'none',
    },
  );*/
