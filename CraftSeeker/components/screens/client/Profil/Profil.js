import React from 'react';
import { View, Text, Image,StyleSheet} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Profil = () => {
  const navigation = useNavigation(); // get the navigation object
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./hi.png')} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>nawres benali</Text>
          <Text style={styles.email}>nawres@example.com</Text>
          <Text style={styles.phone}>Phone: (555) 123-4567</Text>
          <Text style={styles.address}>nabeul city haha</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.requests}>the requests.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.history}>we have some history here</Text>
     
      </View>
      <View style={styles.container}>
        <Button 
          onPress={()=>{navigation.navigate('EditProfil')}}
          icon={<Icon name="edit" type="font-awesome" color="#ffffff" />}
          title="EditProfil"
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

export default Profil;
