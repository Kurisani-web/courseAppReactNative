import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {trackingProgress} from '~/services/myCourseService';

const {width} = Dimensions.get('window');

const VideoCustom = ({data}) => {
  const [reachedSeventyPercent, setReachedSeventyPercent] = useState(false);
  const isFocus = useIsFocused();

  const onProgress = event => {
    if (!reachedSeventyPercent) {
      const percentPlayed = event.currentTime / event.seekableDuration;
      if (percentPlayed >= 0.7) {
        setReachedSeventyPercent(true);
      }
    }
  };

  const putTracking = () => {
    trackingProgress({lessonId: data._id, courseId: data.courseId})
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (reachedSeventyPercent) {
      putTracking();
    }
  }, [reachedSeventyPercent]);

  return (
    <Video
      source={{uri: data.videoUrl}}
      style={styles.video}
      resizeMode="contain"
      controls
      paused={!isFocus}
      onProgress={onProgress}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: width,
    height: 300,
  },
});

export default VideoCustom;
