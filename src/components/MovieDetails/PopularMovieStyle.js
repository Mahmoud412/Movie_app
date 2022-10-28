import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




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
    }, 
    review:{
      backgroundColor:'#1e2634',
      margin:10,
      borderRadius:10
    },
    reviewAuthor:{
      color:'#f3be11',
      padding:10,
      fontWeight:'bold',
      fontSize:18
    },
    reviewContent:{
      color:'white',
      fontWeight:'bold',
      fontSize:16,
      padding:10
    },
  
    reviewsText:{
      color:'#636c81',
      padding:10,
      left:10,
      fontWeight:'bold',
      fontSize:18
    },
    showMore:{
      color:'#f3be11',
      textDecorationLine:'underline',
      fontWeight:'bold',
      fontSize:17,
      left:10,
      bottom:10,
      lineHeight:30,
    },
    backIcon:{
     position:'absolute' , zIndex:100, padding:20 , top:20 , fontWeight:'bold' , marginRight:10
    }
  });

export default styles
