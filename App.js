import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FontAwesome } from '@expo/vector-icons';

import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Transferencia from './src/screens/Transferencia';
import Configuracoes from './src/screens/Configuracoes';
import Gestao from './src/screens/Gestao';
import Suporte from './src/screens/Suporte';
import Idiomas from './src/screens/Idiomas';
import MinhaConta from './src/screens/MinhaConta';
import Splash from './src/screens/Splash';
import Historico from './src/screens/Historico';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
    });

    setTimeout(() => {
      setShowSplash(false);
    }, 4300);

    return unsubscribe;
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <StatusBar barStyle="black-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={isUserLoggedIn ? 'Home' : 'Login'}
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'black',
            },
            tabBarActiveBackgroundColor: '#282A37',
            tabBarActiveTintColor: 'white',
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size }) => (
                <FontAwesome name="home" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Transferencia"
            component={Transferencia}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <FontAwesome name="money" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Historico"
            component={Historico}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <FontAwesome name="repeat" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Gestao"
            component={Gestao}
            options={{
              headerShown: false,
              tabBarButton: () => null,
              tabBarIcon: () => (
                <FontAwesome name="line-chart" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Configuracoes"
            component={Configuracoes}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <FontAwesome name="cog" size={20} color="grey" />
              ),
            }}
          />
          <Tab.Screen
            name="Suporte"
            component={Suporte}
            options={{ headerShown: false, tabBarButton: () => null }}
          />
          <Tab.Screen
            name="Idiomas"
            component={Idiomas}
            options={{ headerShown: false, tabBarButton: () => null }}
          />
          <Tab.Screen
            name="MinhaConta"
            component={MinhaConta}
            options={{ headerShown: false, tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
