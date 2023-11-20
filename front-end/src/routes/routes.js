import { NavigationContainer } from "@react-navigation/native";
import AppStack from './appStack';
import {AuthStack} from './authStack';

export function Router() {
    const auth = false;
    return (
        <NavigationContainer>
          {auth ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      );
}