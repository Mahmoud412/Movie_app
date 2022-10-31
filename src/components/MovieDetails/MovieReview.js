import {View, Text} from 'react-native';
import React from 'react';
import styles from './MovieDetailsStyle';
import {useCallback} from 'react';
import {useState} from 'react';

const MovieReview = (props) => {
  const review = props.review;
  const index = props.index;
  const NUM_OF_LINES = 4;
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };
  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= NUM_OF_LINES); //to check the text is more than 4 lines or not
  }, []);

  return (
    <View key={index}>
      <View style={styles.review}>
        <Text style={styles.reviewAuthor}>{review.author}</Text>
        <View>
          <Text
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}
            style={styles.reviewContent}>
            {review.content}
          </Text>
          {lengthMore ? (
            <Text onPress={toggleNumberOfLines} style={styles.showMore}>
              {textShown ? 'Read Less...' : 'Read More...'}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default MovieReview;
