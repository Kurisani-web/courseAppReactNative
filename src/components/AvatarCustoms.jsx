import {Image, StyleSheet} from 'react-native';
import Constants from '~/common/Constants';
import VectorIcon from './VectorIcon';

function AvatarCustoms(props) {
  return (
    <>
      {props.imageUrl ? (
        <Image source={{uri: props.imageUrl}} style={props.style || styles.avatar} />
      ) : (
        <VectorIcon.FontAwesomeVectorIcon
          name="user-circle"
          style={props.style || styles.avatar}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: Constants.white,
    color: Constants.white,
    fontSize: 70,
    resizeMode: 'cover',
    borderRadius: 99,
  },
});

export default AvatarCustoms;
