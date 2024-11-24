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
import {IonIcon} from '../../components/shared/IonIcon';

export const HomeScreen = () => {
  const navigtation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigtation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigtation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="reorder-three-outline" size={50} />
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
