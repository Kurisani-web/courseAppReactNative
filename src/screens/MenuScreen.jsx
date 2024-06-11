import {useNavigation} from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Constants from '~/common/Constants';
import AvatarCustoms from '~/components/AvatarCustoms';
import ButtonCustom from '~/components/ButtonCustom';
import VectorIcon from '~/components/VectorIcon';
import {dataUser, logout} from '~/redux/features/userReducer';

const {height} = Dimensions.get('screen');

const MENU_ITEM = [
  {
    title: 'Khóa học đã mua',
    navigate: 'MyCourse',
  },
  {
    title: 'Công việc đã ứng tuyển',
    navigate: 'MyRecruitment',
  },
];

function MenuScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(dataUser);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <View style={styles.boxInfo}>
            <AvatarCustoms imageUrl={currentUser.imageUrl} />
            <Text style={styles.titleFullName}>{currentUser.fullName}</Text>

            <TouchableOpacity
              style={styles.btnEdit}
              onPress={() => navigation.navigate('EditProfile')}>
              <VectorIcon.AntDesignVectorIcon
                name="edit"
                size={20}
                color={Constants.black}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.labelInfo}>
            <VectorIcon.MaterialCommunityVectorIcon
              name="email"
              size={25}
              color={Constants.white}
              style={{marginRight: 8}}
            />
            <Text style={styles.titleInfo}>{currentUser.email}</Text>
          </View>
          <View style={styles.labelInfo}>
            <VectorIcon.EntypoVectorIcon
              name="location-pin"
              size={25}
              color={Constants.white}
              style={{marginRight: 8}}
            />
            <Text style={styles.titleInfo}>{currentUser.address}</Text>
          </View>
          <View style={styles.labelInfo}>
            <VectorIcon.EntypoVectorIcon
              name="phone"
              size={25}
              color={Constants.white}
              style={{marginRight: 8}}
            />
            <Text style={styles.titleInfo}>{currentUser.phone}</Text>
          </View>
        </View>

        <View style={styles.boxLogin}>
          <View>
            <Text style={{fontSize: 16}}>Cài đặt</Text>

            {MENU_ITEM.map(item => (
              <TouchableOpacity
                style={styles.btnInBox}
                activeOpacity={1}
                onPress={() => navigation.navigate(item.navigate)}
                key={item.navigate}>
                <Text style={styles.textInBox}>{item.title}</Text>
                <VectorIcon.MaterialVectorIcon
                  name="keyboard-arrow-right"
                  size={20}
                />
              </TouchableOpacity>
            ))}
          </View>

          <ButtonCustom
            title={'Đăng xuất'}
            onPress={() => dispatch(logout())}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.darkBlue,
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 20,
  },
  boxInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: Constants.white,
    resizeMode: 'cover',
    borderRadius: 99,
  },
  btnEdit: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: Constants.white,
    padding: 6,
    borderRadius: 4,
  },
  labelInfo: {flexDirection: 'row', alignItems: 'center', marginVertical: 6},
  boxLogin: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: height * 0.6,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
  },
  titleFullName: {
    marginHorizontal: 10,
    textAlignVertical: 'bottom',
    color: Constants.white,
    fontWeight: '700',
    fontSize: 20,
  },
  titleInfo: {
    marginHorizontal: 10,
    color: Constants.white,
    fontWeight: '700',
    fontSize: 14,
  },
  btnLogout: {position: 'absolute', bottom: 10, width: '100%'},

  btnInBox: {
    borderBottomWidth: 1,
    borderColor: Constants.borderGray,
    paddingVertical: 16,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textInBox: {
    color: Constants.darkBlue,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MenuScreen;
