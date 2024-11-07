import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  ProductScreen,
  ProductsScreen,
  SettingsScreen,
} from '../screens';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
