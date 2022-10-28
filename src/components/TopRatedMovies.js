import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {GET} from '../Services/API';
import {IMAGE_POSTER_URL} from '../config';
import Loader from './Loader';
const TopRatedMovies = props => {
  const naivgation = useNavigation();
  const [topRated, setTopRated] = useState([]);
  const [loading , setLoading] = useState(true)


  useEffect(() => {
    const getMovies = async () => {
      const respone = await GET('/movie/top_rated');
      setTopRated(respone.results);
      setLoading(false)
    };

    getMovies();
  }, []);
  return (
    <>
    {loading ? (<Loader/>) :(
      <FlatList
      numColumns={2}
      data={topRated}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => naivgation.navigate('TopRatedDetailScreen', item.id)}>
          <Image
            style={styles.posterImage}
            source={{uri: IMAGE_POSTER_URL + item.poster_path}}
          />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
    
    )}
      
    </>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: 220,
    height: 300,
  },
});
export default TopRatedMovies;
