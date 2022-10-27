import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import Loader from '../Loader';

const PopularMovieDetail = ({movieId}) => {
  const id = movieId;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${id}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Image
            style={styles.backdropImage}
            source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
          />
          <View style={styles.subContainer}>
            <Image
              style={{width: '50%', height: 300}}
              source={{uri: `${IMAGE_POSTER_URL}${details.poster_path}`}}
            />
            <View>
              <Text>{details.release_date}</Text>
              <Text>{details.title}</Text>
              <Text>{details.runtime} Minutes</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backdropImage: {
    width: '100%',
    height: 300,
  },
  posterImage:{
    width: '50%', 
    height: 300,
  },
  container:{
    backgroundColor:'#1e2634',
    height:'100%'
  },
  subContainer: {
    flexDirection: 'row',
    marginVertical:10
  },
});
export default PopularMovieDetail;
