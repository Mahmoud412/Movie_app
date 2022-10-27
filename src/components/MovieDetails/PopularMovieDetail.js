import {View, Text, Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import Loader from '../Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';



const PopularMovieDetail = ({movieId}) => {
  const id = movieId;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [videos ,setVideos ] = useState([])
  console.log(videos)
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

    const getVideos = async ()=>{
      const video = await GET(`/movie/${id}/videos`);
      setVideos(video.results)

    }

    getDetails();
    getVideos();

  }, []);

  return (
    <ScrollView style={styles.container}>
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
            <View style={styles.textView}>
              <Text style={styles.release_date}> {details.release_date} </Text>
              <Text   style={styles.title}>{details.title}</Text>
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
          <View style={{marginLeft:10}}>
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
          <AntDesign name='heart' size={25} color='white'/>

          <Text style={styles.buttonText}> ADD TO FAVORITES </Text>
          </TouchableOpacity>
        <View style={styles.overviewContainer}>
        <Text  style={styles.overViewTilte}>OVERVIEW</Text>
        <Text style={styles.overViewText}>{details.overview}</Text>
        </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backdropImage: {
    width: '100%',
    height: 300,
  },
  posterImage: {
    width: '50%',
    height: 300,
  },
  container: {
    backgroundColor: '#151c25',
    height: '100%',
  },
  subContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  textView: {
    margin: 10,
  },
  release_date: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f3be11',
    fontSize: 16,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    
    
  },
  runtimeOver: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  runtime: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionTwo: {
    margin: 10,
    flexDirection:'row',
    alignItems:'center'
  },
  vote_average: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  vote_count:{
    color:'#636c81',
    fontWeight:'bold',
    fontSize:18

  },
  button:{
    color:'white',
    backgroundColor:'#f3be11',
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold'
  },
  overviewContainer:{
    margin:10
  },
  overViewTilte:{
    color:'#636c81',
    fontWeight:'bold',
    fontSize:18,
    marginVertical:10
  },
  overViewText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16,
    marginBottom:10
  }
});
export default PopularMovieDetail;
