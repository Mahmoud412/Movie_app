import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import Loader from '../Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './MovieDetailsStyle';
import {useNavigation, useRoute} from '@react-navigation/native';
import MovieReview from './MovieReview';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToFavorites,
  isFavMovieSelector,
  removeFromFavorites,
} from '../../redux/features/favoritSlice';

const ShowMovieDetails = () => {
  const route = useRoute();
  const id = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
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

    const getReviews = async () => {
      const data = await GET(`/movie/${id}/reviews`);
      setReviews(data.results);
    };

    getDetails();
    getReviews();
  }, []);

  

  const isFav = useSelector(state => isFavMovieSelector(state, details.id));
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}>
            <Ionicons name="chevron-back" size={30} color="white" />
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const data = {id: details.id, poster_path: details.poster_path};
              dispatch(isFav ? removeFromFavorites(data) : addToFavorites(data));
            }}>
            <AntDesign name={isFav ? 'heart' : 'hearto'} size={25} color="white" />

            <Text style={styles.buttonText}>
              {isFav ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
            </Text>
          </TouchableOpacity>
          <View style={styles.overviewContainer}>
            <Text style={styles.overViewTilte}>OVERVIEW</Text>
            <Text style={styles.overViewText}>{details.overview}</Text>
          </View>
          <Text style={styles.reviewsText}>Reviews</Text>
          {reviews && reviews == '' ? (
            <Text style={styles.noReviewsText}>No Reviews</Text>
          ) : (
            <View>
              {reviews.map((review, index) => (
                <MovieReview review={review} index={index} />
              ))}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default ShowMovieDetails;
