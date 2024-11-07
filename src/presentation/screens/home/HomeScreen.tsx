import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../themes/theme';
import {
  DrawerActions,
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';

export const HomeScreen = () => {
  const navigtation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigtation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigtation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigtation.navigate('Products')}
        label="Productos"
      />

      <PrimaryButton
        onPress={() => navigtation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
