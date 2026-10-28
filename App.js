import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/Screens/ModuleListScreen';
import ModuleAddScreen from './src/components/Screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/Screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/Screens/ModuleModifyScreen';

const Stack = createNativeStackNavigator();
//Initialisations--------------------------------------------
//State------------------------------------------------------
//handlers---------------------------------------------------
//View-------------------------------------------------------

export const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='ModuleListScreen'
          screenOptions={{
            headerStyle: { backgroundColor: 'black'},
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name='ModuleListScreen'
            component={ModuleListScreen}
            options={{ title: 'Module List' }}
          />
          <Stack.Screen
            name='ModuleAddScreen'
            component={ModuleAddScreen}
            options={{ title: 'Module Add' }}
          />
          <Stack.Screen
            name='ModuleViewScreen'
            component={ModuleViewScreen}
            options={{ title: 'Module View' }}
          />
          <Stack.Screen
            name='ModuleModifyScreen'
            component={ModuleModifyScreen}
            options={{ title: 'Module Modify' }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
