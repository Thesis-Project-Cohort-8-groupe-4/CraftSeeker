import React, { useState, useEffect } from 'react';
import { FontAwesome } from 'react-native-vector-icons';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  Button,
} from 'react-native';

import axios from 'axios';
import Profil from './Profil';
//import { useState,useEffect } from 'react';


const EditProfil = () => {

    const [clientFirstName, setFirstName] = useState('');
    const [clientLastName, setLastName] = useState('');
    const [clientEmail, setEmail] = useState('');
    const [clientAddress, setAddress] = useState('');
    const [clientPhoneNumber, setPhone] = useState('');
    const [clientDateOfBirth, setBirth] = useState('');

    const [profilePicture, setProfilePicture] = useState(null);

    
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleSave = async () => {
    const data = new FormData();
    data.append('profilePicture', {
      uri: profilePicture,
      type: 'image/jpeg',
      name: 'profilePicture.jpg',
    });
    data.append('firstName', clientFirstName);
    data.append('lastName', clientLastName);
    data.append('email', clientEmail);
    data.append('address', clientAddress);
    data.append('Phone Number', clientPhoneNumber);
    data.append('Date Of Birthday', clientDateOfBirth);
   
    try {
      const response = await axios.put('http:/api/client', data);
      // set the state values to the updated worker information
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
      setAddress(response.data.address);
      setPhone(response.data.phoneNumber);
      setBirth(response.data.DateOfBirth)
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile.');
    }
  };

  const handleSelectPicture = async () => {
    let result = null;
    
    if (Platform.OS === 'web') {
      // On web, use file input to select a picture
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => {
        result = event.target.files[0];
      };
      input.click();
    } else {
      // On native platforms, launch the camera app
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
      
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }
  
    if (result) {
      setProfilePicture(result.uri);
    }
  };



  return (
    <ScrollView >
      <TouchableOpacity style={styles.profilePictureContainer} >
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Text style={styles.profilePicturePlaceholderText}>Choose a Profile Picture</Text>
            


          </View>
        )}
      </TouchableOpacity>
      <Button title="Select Picture" onPress={handleSelectPicture}  />


      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={clientFirstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={clientLastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={clientEmail}
        onChangeText={setEmail}
      />
 <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={clientPhoneNumber}
        onChangeText={setPhone}
      />


      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={clientAddress}
        onChangeText={setAddress}
      />

<Text style={styles.label}>Date Of Birthday</Text>
      <TextInput
        style={styles.input}
        value={clientDateOfBirth}
        onChangeText={setFirstName}
      />

     


<Button title="Save" onPress={handleSave} icon={<FontAwesome name="save" size={20} color="white" />} buttonStyle={styles.saveButton}/>
    </ScrollView>
  );






};
const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    },
    saveButton: {
    backgroundColor: '#6c757d',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    },
    saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    },
    profilePictureContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    },
    profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    },
    profilePicturePlaceholder: {
    backgroundColor: '#dcdcdc',
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    },
    profilePicturePlaceholderText: {
    color: '#333',
    fontSize: 18,
    },
    });


 export default EditProfil