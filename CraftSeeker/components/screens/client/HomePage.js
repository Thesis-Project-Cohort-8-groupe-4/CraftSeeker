import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TouchableHighlight, Text, FlatList, Pressable } from 'react-native';
 import axios from 'axios';
 import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import StarRating from 'react-native-star-rating-widget';
const HomePage = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [data, setData] = useState([]);
   const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false);
const [isPriceAscending, setPriceAscending] = useState(true);
 useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://192.168.173.162:4000/api/workers/getWorkersInfo');//192.168.110.162
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
    
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };
  const filterAscending = () => {
    const sortedData = [...data].sort((a, b) => a.workerHourlyPrice - b.workerHourlyPrice);
    setData(sortedData);
    setPriceAscending(true);
    toggleFilter();
  };
  
  const filterDescending = () => {
    const sortedData = [...data].sort((a, b) => b.workerRating - a.workerRating);
    setData(sortedData);
    setPriceAscending(false);
    toggleFilter();
  };
  
  const renderItem = ({ item }) => {
    if (searchQuery && !item.workerFirstName.toLowerCase().includes(searchQuery.toLowerCase())) {
    
      return null;
    }

    return (
      <View style={[styles.card, { zIndex: 1 }]}>

        <Image source={require('../client/hello.jpg')} style={styles.cardImage} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.cardTitle}>{item.workerFirstName}</Text>
          <Text style={styles.cardText}>{item.workerJob}</Text>
          <Text style={styles.cardText}>{item.workerHourlyPrice}$/hour</Text>
          <Text style={styles.ratingg}>({item.workerRating})</Text>
          <StarRating style={styles.rating}
  rating={item.workerRating}
  starSize={20}
  starStyle={{ marginRight: -5 }}
  starSpacing={5}
/>

        </View>
      </View>
    );
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      
       <View style={styles.header}>
        <TouchableOpacity style={{ flex:0.9 }} onPress={toggleMenu}>
          <Image source={require('../client/menu-icon-5.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <Image source={require('../client/Screenshot_1.png')} style={styles.logo} />
        
         </View>
        

         {isFilterVisible && (
  <View style={styles.filterMenu}>
    <TouchableOpacity onPress={filterAscending}>
      <Text style={[styles.filterMenuItem, isPriceAscending && styles.filterMenuItemActive]}>
        Price (Ascending)
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={filterDescending}>
      <Text style={[styles.filterMenuItem, !isPriceAscending && styles.filterMenuItemActive]}>
      rating
      </Text>
    </TouchableOpacity>
  </View>
)}

      {isMenuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profil')}>
  <Text>Profile</Text>
</TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={()=>navigation.navigate('Categories')}>
            <Text>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, { marginBottom: 200 }]}>
            <Text>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
<SearchBar
  style={styles.search}
  inputStyle={{backgroundColor: 'white'}}
  containerStyle={{
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: '60%',
    top:20,
  height:60,
  left:20,
  }}
  inputContainerStyle={{backgroundColor: 'white'}}
  placeholderTextColor={'#g5g5g5'}
  placeholder="type here..."
  value={searchQuery}
  onChangeText={(query) => setSearchQuery(query)}
/>
<Pressable style={styles.filtring} onPress={toggleFilter}>
  <Image source={require('../client/filter.png')} style={styles.filter} />
</Pressable>
<View style={styles.list}>  
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
</View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 16,
    height: '94.8%',
    top: '5%',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#036BB9',
    borderRadius: 10,
  },
  subcontainer: {
    borderWidth: 8,
    height: '102%',
    width: '102%',
    borderRadius: 8,
    left: '-1.5%',
    borderColor: 'white',
    top: '-1%',
  },
 filter:{
left:250,
height:40,
width:50,
top:-35,
 },
 filterMenu: {
  position: 'absolute',
  top: 200,
  right: 15,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderRadius: 5,
  padding: 10,
},
filterMenuItem: {
  fontSize: 10,
  fontWeight: 'bold',
  padding: 5,
},
filtring:{
top:10,
marginBottom:10,

},
filterMenuItemActive: {
  backgroundColor: '#ccc',
},

 title:{
   flex: "center",
 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'relative',
  },
  menuIcon: {
    top: -10,
    right: 16,
    width: 70,
    height: 70,
    position: 'relative',
    resizeMode: 'contain',
  },
  logo: {
    position: 'absolute',
    top: 0,
    right:0,
    width: 80,
    height: 60,
  },
 
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    zIndex: 1,
    width: 180,
    height: 550,
    marginTop: 70
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
rating:{
 top:-90,
 left:70,
},
ratingg:{
  top:-74,
  left:180,
 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height:110,
    borderWidth:2,
    borderRadius:10,
    borderColor:'grey',
    marginBottom:10,
  },

  cardImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  list: {
    position:"relative",
    marginTop:70, 
    height:440,
  },
});

export default HomePage; 