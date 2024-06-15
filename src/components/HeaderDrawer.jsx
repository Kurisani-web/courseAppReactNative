import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import VectorIcon from './VectorIcon';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Constants from '~/common/Constants';

function HeaderDrawer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <VectorIcon.AntDesignVectorIcon name="arrowleft" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <VectorIcon.AntDesignVectorIcon name="menu-fold" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Constants.borderGray,
  },
});

export default HeaderDrawer;
