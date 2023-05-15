import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Edit from './components/screens/WorkerProfil/Edit';
import WorkerProfil from './components/screens/WorkerProfil/WorkerProfil';
import Dashboard from './components/screens/worker/WorkersDashBoard/DashBoard'
import Profil from './components/screens/client/Profil/Profil';
import HomePage from './components/screens/client/HomePage';
import Categories from './components/screens/client/Categories';
import CreateATask from  './components/screens/client/CreateATask';
import Workers from './components/screens/client/Workers';
import RegisterWorker from './components/screens/worker/RegisterWorker'
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false
  
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='HomePage' component={HomePage} />
       <Stack.Screen name='Categories' component={Categories} /> 
       <Stack.Screen name="Workers" component={Workers}/>
       <Stack.Screen name="CreateTask" component={CreateATask}/>
        <Stack.Screen name='WorkerProfil' component={WorkerProfil} />
        <Stack.Screen name='Profil' component={Profil} />
        
        <Stack.Screen name='Edit' component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
