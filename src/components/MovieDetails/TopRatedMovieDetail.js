import React, {useState, useEffect} from 'react';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import Loader from '../Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './PopularMovieStyle';
import {useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TopRatedMovieDetail = ({movieId}) => {
    const id = movieId
   const navigation = useNavigation()
    const NUM_OF_LINES = 4;
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => {
      //To toggle the show text or hide it
      setTextShown(!textShown);
    };
    const onTextLayout = useCallback(e => {
      setLengthMore(e.nativeEvent.lines.length >= NUM_OF_LINES); //to check the text is more than 4 lines or not
    }, []);
    const tofix = Math.trunc(details.vote_average);
    const ratings = [tofix];
    const starArray = [...Array(10).keys()].map(i => i + 1);
    const Rating = ({rating}) =>
      starArray.map(i => (
        <FontAwesome
          key={i}
          name="star"
          size={25}
          color={rating >= i ? '#f3be11' : 'lightgrey'}
        />
      ));
  
    useEffect(() => {
      const getDetails = async () => {
        const data = await GET(`/movie/${id}`);
        setDetails(data);
        setLoading(false);
      };
  
      const getVideos = async () => {
        const data = await GET(`/movie/${id}/reviews`);
        setReviews(data.results);
      };
  
      getDetails();
      getVideos();
    }, []);
  
    return (
      <ScrollView style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <View>
          <TouchableOpacity  onPress={()=> navigation.navigate('Top Rated')} style={styles.backIcon}>
        <Ionicons name='chevron-back' size={30} color='white' />

        </TouchableOpacity>
            <Image
              style={styles.backdropImage}
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
            />
            <View style={styles.subContainer}>
              <Image
                style={{width: '50%', height: 300}}
                source={{uri: `${IMAGE_POSTER_URL}${details.poster_path}`}}
              />
              <View style={styles.textView}>
                <Text style={styles.release_date}> {details.release_date} </Text>
                <Text style={styles.title}>{details.title}</Text>
                <View style={styles.runtimeOver}>
                  <Ionicons name="time-outline" size={25} color="#f3be11" />
                  <Text style={styles.runtime}> {details.runtime} Minutes</Text>
                </View>
              </View>
            </View>
            <View style={styles.sectionTwo}>
              <View>
                <Text style={styles.vote_average}>{tofix}</Text>
              </View>
              <View style={{marginLeft: 10}}>
                {ratings.map((rating, i) => (
                  <View key={i}>
                    <Text>
                      <Rating rating={rating} />
                    </Text>
                  </View>
                ))}
                <Text style={styles.vote_count}>{details.vote_count} VOTES</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <AntDesign name="heart" size={25} color="white" />
  
              <Text style={styles.buttonText}> ADD TO FAVORITES </Text>
            </TouchableOpacity>
            <View style={styles.overviewContainer}>
              <Text style={styles.overViewTilte}>OVERVIEW</Text>
              <Text style={styles.overViewText}>{details.overview}</Text>
            </View>
            <Text style={styles.reviewsText}>Reviews</Text>
            {reviews.map((review, index) => (
              <View key={index} style={styles.review}>
                <Text style={styles.reviewAuthor}>{review.author}</Text>
               <View>
               <Text
               onTextLayout={onTextLayout}
               numberOfLines={textShown ? undefined : 4}
               style={styles.reviewContent}>
               {review.content}
             </Text>
             {lengthMore ? (
               <Text
                 onPress={toggleNumberOfLines}
                 style={styles.showMore}>
                 {textShown ? 'Read Less...' : 'Read More...'}
               </Text>
             ) : null}
               </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    );
  };

export default TopRatedMovieDetail