import { StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GET} from '../../Services/API';
import MovieGrid from '../MovieGrid';
import Loader from '../Loader';
const TopRatedMovies = props => {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const respone = await GET('/movie/top_rated');
      setTopRated(respone.results);
      setLoading(false);
    };

    getMovies();
  }, []);
  return <>{loading ? <Loader/> : <MovieGrid movies={topRated} />}</>;
};

const styles = StyleSheet.create({
  posterImage: {
    width: 220,
    height: 300,
  },
});
export default TopRatedMovies;
