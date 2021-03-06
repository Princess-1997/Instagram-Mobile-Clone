import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'


export default function AddNewPost({navigation}) {

  return (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikPostUploader navigation={navigation}/>
    </View>
  )
}

const Header=({navigation})=>(
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.push('HomeScreen')}>
            <Image source={require('../../assets/LeftArrow.png')}
            style={{width:30,height:30}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>ADD NEW POST</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginTop:22
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
    },
    headerText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginRight:25,
    }
})