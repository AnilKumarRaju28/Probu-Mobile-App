import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Dashboard from './src/screens/Dashboard';
import Organization from './src/screens/organization/Organization';
import Projects from './src/screens/projects/Projects';
import Clients from './src/screens/Clients/Clients';
import Employee from './src/screens/Employee/Employee';
import Tasks from './src/screens/Tasks/Tasks';
import Users from './src/screens/Users/Users';
import Vendors from './src/screens/Vendors/Vendors';
import Teams from './src/screens/Teams/Teams';
import ProjectCreate from './src/screens/projects/ProjectCreate';
import ClientCreate from './src/screens/Clients/ClientCreate';
import EmployeeCreate from './src/screens/Employee/EmployeeCreate';
import TeamCreate from './src/screens/Teams/TeamCreate';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"Login"} component={LoginScreen} />
          <Stack.Screen name={"SignUp"} component={SignUpScreen} />
          <Stack.Screen name="Organization" component={Organization} />
          <Stack.Screen name="Projects" component={Projects} />
          <Stack.Screen name={"Clients"} component={Clients} />
          <Stack.Screen name={"Teams"} component={Teams} />
          <Stack.Screen name={"Employee"} component={Employee} />
          <Stack.Screen name={"Tasks"} component={Tasks} />
          <Stack.Screen name={"Dashboard"} component={Dashboard} />
          <Stack.Screen name={"Users"} component={Users} />
          <Stack.Screen name={"Vendors"} component={Vendors} />
          <Stack.Screen name={"ProjectCreate"} component={ProjectCreate} />
          <Stack.Screen name={"ClientCreate"} component={ClientCreate} />
          <Stack.Screen name={"EmployeeCreate"} component={EmployeeCreate} />
          <Stack.Screen name={"TeamCreate"} component={TeamCreate} />
        </Stack.Navigator>
      </NavigationContainer >
    </GestureHandlerRootView>
  );
}

export default App;