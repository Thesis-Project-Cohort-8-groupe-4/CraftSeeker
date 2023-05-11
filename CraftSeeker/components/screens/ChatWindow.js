import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { TextInput,StyleSheet } from 'react-native'
import { io } from 'socket.io-client'
// import { Center, Divider } from "native-base";
export default function ChatWindow() {
  const  [messageText, setMessageText] = useState("")
  const  [uniqueId ,setUniqueId] = useState("")
  const  [messages,setMessages] = useState([])
  const socket = io("http://192.168.0.101:5000",{
    query :{uniqueId :"bea3edf1-3e3e-4d7b-9f8c-cbaf50a11c85"}
  })

  useEffect(()=>{
    socket.on("messages",(data)=>{
      setMessages(data)
      console.log(messages)
    })  
  },[]) 
  // add messages as a dependency
   
  const handleMessageSending=()=>{
    const messageObj = {
      uniqueId :"bea3edf1-3e3e-4d7b-9f8c-cbaf50a11c85",
      workerId: "1",
      clientId :"2",
      senderClient: true,
      messageText : messageText,
      createdAt : Date.now()
    }
    if (messageObj.messageText.length){
      socket.emit("receive",messageObj)
    }
  }

  // const createChatRoom =()=>{
  //   socket.emit("createaroom",{
  //      workerId : 11,
  //      clientId :4
  //   })
  // }

  return (
    // <Center>
    <View >
      <Text>ChatWindow Client name</Text>
      <View>
        {messages.map((e,i)=>{
          console.log(e.messageText)
           return(<View key = {i}>
            <Text >{e.messageText}</Text>
            
           </View>)
        })}
      </View>
      <TextInput title = "message" onChangeText={text =>setMessageText(text)} ></TextInput>
      <Button title ="Send" onPress={handleMessageSending}></Button>
      {/* <Button title ="Create a Room" onPress={createChatRoom}></Button> */}
      </View>
   
  )
}
const styles=StyleSheet.create({

})
