import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.setOptions({
        headerLeft: () => (
          <Pressable
            style={{marginLeft: 5}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <IonIcon name="reorder-three-outline" size={50} />
          </Pressable>
        ),
      })}
    </>
  );
};
