// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'
// import { StyleSheet } from 'react-native'
// import { Center } from 'native-base'
// import { useEffect,useState } from 'react'
// import axios from "axios"
// import { TouchableOpacity } from 'react-native'
// export default function Inbox() {
//    const[chatrooms,setChatRooms] =useState([])

//    useEffect(()=>{
//     axios.get(`http://192.168.0.101:4000/chatboxes/getworkerinbox/${11}`)
//     .then(res=>{
      
//       setChatRooms(res.data)
//     })
//     .catch(err=>{
//       console.log(err)})
//    },[])
//    console.log(chatrooms)


//   return (
//     <View style={styles.container}>
//       <View style={styles.subContainer}>
       
//       <Text style = {styles.title}>Inbox</Text>
//       <View style= {styles.chatroomsContainer}>
//         <ScrollView>
//       {
//         chatrooms.map((e,i)=>{
//           return(
//             <TouchableOpacity key ={i}>
//             <View style ={styles.chatbox} >
//              <Text style={styles.chatName}>{e.clientFirstName}</Text>
//             </View>
//             </TouchableOpacity>
//         )})
//       }
//       </ScrollView>
//       </View>
     
//       </View>
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//   container:{
//      borderWidth : 17,
//      height : 811,
//      borderColor : "#036BB9",
//      borderRadius: 10,

//   },
//   subContainer:{
//     borderWidth : 17,
//     height : 782,
//     width:382,
//     borderColor : "white",
//     borderRadius: 10,
//     left:-2,
//     top:-3,
//     bottom:-3
//   },
//   title:{
//     flex: 1,
//     textAlign : 'center',
//     fontSize: 30,
//     fontFamily : "Roboto",
//     fontWeight : "400",
//   },
//   chatroomsContainer:{
//     marginTop: 40,
//   },
//   chatbox:{
//     height:100,
//     borderWidth:1,
//     marginBottom:4,
//     borderRadius: 5,
//     backgroundColor: "#0386D0",
//     fontWeight :"bold",
//   },
//   chatName:{
//     fontWeight:100,
//     fontSize:20,
//     marginLeft: 20,
//     marginTop : 10,
//     color : "white",
//   }
// })



