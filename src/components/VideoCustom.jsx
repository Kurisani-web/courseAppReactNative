import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

const {width} = Dimensions.get('window');

const VideoCustom = ({data}) => {
  const [reachedSeventyPercent, setReachedSeventyPercent] = useState(false);

  const onProgress = event => {
    if (!reachedSeventyPercent) {
      const percentPlayed = event.currentTime / event.seekableDuration;
      if (percentPlayed >= 0.7) {
        setReachedSeventyPercent(true);
      }
    }
  };
console.log(data.courseId);
  const putTracking = () => {
    myCourseService
      .trackingProgress({lessonId: id, courseId: data.courseId})
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
      paused
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
