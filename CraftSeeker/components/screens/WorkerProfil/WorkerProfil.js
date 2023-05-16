import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Link from '../Link';



const WorkerProfil = (props) => {
  console.log(props.route.params.id,'worker');
  let id=props.route.params.id
  const [worker, setWorker] = useState(null);
  const [available, setAvailable] = useState(true);
  const navigation = useNavigation();
  
  
  useEffect(() => {
    fetchWorkerData(); // Fetch worker data when the component mounts
  }, []);

  const fetchWorkerData = async () => {
    try {
      const response = await axios.get(`http://${Link}:4000/api/Workers/getWorker/${id}`); // Replace 'workerId' with the actual ID of the worker you want to fetch
      setWorker(response.data)
      console.log(response.data);
    
    } catch (error) {
      console.log('Failed to fetch worker data:', error);
    }
  }
  

  if (!worker) {
    return <Text>Loading...</Text>; // Show a loading indicator while fetching the worker data
  }

  return (
    
    <View  style={styles.container}>
      <View style={styles.card}>
        <View style={styles.info}>
        {/* <Image source={require('./hi.png')} style={styles.image} /> */}
          <Text style={styles.name}>{worker.FirstName}</Text>
          <Text style={styles.email}>{worker.Email}</Text>
          <Text style={styles.address}>{worker.Adress}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.bio}>{ worker.ProfessionalSummary}</Text>
      </View>
      <View style={styles.card}>
        
        <Text style={styles.phone}>{worker.PhoneNumber}</Text>
      </View>

      <Button 
  icon={<Icon name="edit" type="font-awesome" color="#ffffff" />}
   title="Edit"
  onPress={() => navigation.navigate('Edit', { id: worker.workersId})} 
  buttonStyle={styles.editButton}
/>


      <View style={styles.availablContainer }>
        <Button
          icon={<Icon name="check-circle" />}
          title={available ? 'Available' : 'Not Available'}
          onPress={() => setAvailable(prev => !prev)}
          buttonStyle={styles.editButton}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#E6F0FA',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
      overflow: 'hidden',
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  address: {
    fontSize: 16,
    marginTop: 5,
  },
  bio: {
    fontSize: 16,
  },
  website: {
    fontSize: 16,
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    marginTop: 5,
  },
  socialIcon: {
    fontSize: 5,
    color: '#333',
    flexDirection: 'row'
  },
  editContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  editButton: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  },
  availablContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    marginVertical: 20,
  },
  availableButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notAvailableButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default WorkerProfil;