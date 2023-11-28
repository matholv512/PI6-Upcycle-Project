import { NavigationContainer } from "@react-navigation/native";
import AppStack from './appStack';
import {AuthStack} from './authStack';
import { useAuth } from '../hook/index';

export function Router() {
  const { user } = useAuth();
  return (
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
}