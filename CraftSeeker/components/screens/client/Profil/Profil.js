import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,Image} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import axios from 'axios';
import { useNavigation,useRoute } from '@react-navigation/native';
import url from '../../../../link'


const ClientProfil = (props) => {
  const [client, setclient] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { profilePictureUrl } = route.params;
  console.log(props.route.params.id);
const [up,setup]=useState(false)

  const fetchclientData = async () => {
    try {
      const response = await axios.get(`http://${url}:4000/api/clients/getone/${props.route.params.id}`);
      setclient(response.data);
    } catch (error) {
      console.log('Failed to fetch worker data:', error);
    }
  }

  useEffect(() => {
    fetchclientData();
  }, [up]);

  if (client.length === 0) {
    return <Text>Loading...</Text>;
  }

  const clientData = client[0]; // Get the first item in the worker array




  return (
    <View style={styles.container}>
      <View style={styles.card}>
      {console.log(clientData.imageUrl.slice(1,clientData.imageUrl.length-1))}
        
        <Image source={{ uri: clientData.imageUrl.slice(1,clientData.imageUrl.length-1)}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{clientData.clientFirstName}</Text>
          <Text style={styles.email}>{clientData.clientEmail}</Text>
          <Text style={styles.phone}>{clientData.clientFirstName}</Text>
          <Text style={styles.address}>{clientData.clientLastName}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Button style={styles.requests}>the requests.</Button>
      </View>
      <View style={styles.card}>
        <Button style={styles.history}>history</Button>
     
      </View>
      <View style={styles.container}>
      <Button
        icon={<Icon name="EditProfil" type="font-awesome" color="#ffffff" />}
        title="EditProfil"
        onPress={() => navigation.navigate('EditProfil', { id: props.route.params.id ,setup:setup,up:up})}
        buttonStyle={styles.editButton}
      />
      </View>
    </View>
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
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
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
  requests: {
    fontSize: 16,
  },
  history: {
    fontSize: 16,
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});

export default ClientProfil;