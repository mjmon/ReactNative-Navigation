import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {
   createAppContainer
 } from 'react-navigation';
import HomeActivity from '../screens/Home';
import ProfileActivity from '../screens/Profile';

const Project = createStackNavigator({
   MyHome: {
      screen: HomeActivity
   },
   MyProfile: {
      screen: ProfileActivity
   }
},{
   initialRouteName: 'MyHome'
});

export default createAppContainer(Project);
