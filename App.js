import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'


const AppNavigator = createStackNavigator();


export default class App extends React.Component {

  render()
  {
    return (
      <NavigationContainer>
        <AppNavigator.Navigator>
          <AppNavigator.Screen name='Home' component={EventList} options={{title:'Welcome'}} />
          <AppNavigator.Screen name='Form' component={EventForm} options={{title:'New Event Form'}}/>
        </AppNavigator.Navigator>
      </NavigationContainer>
    );
  }
}
