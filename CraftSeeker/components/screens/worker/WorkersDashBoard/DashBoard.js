// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


// import { useNavigation } from '@react-navigation/native';

// const Dashboard = () => {

//     const navigation = useNavigation();

//     return (
//         <>
//             <View style={styles.logoContainer}>
//                 <Text >DashBoard</Text>
              
//             </View>
//             <View style={styles.container}>

//                 <View style={styles.topThreeContainer}>
//                     <View style={styles.activeTask}>
//                         <Text>Active Task</Text>
//                     </View>
//                     <View style={styles.lastTask}>
//                         <Text>Last Task Review</Text>
//                     </View>
//                     <View style={styles.offerRequests}>
//                         <Text>Offers Requests</Text>

//                     </View>
//                 </View>
//                 <View style={styles.bottomContainer}>
//                     <View style={styles.reports}>
//                         <Text>Reports</Text>
                        

//                     </View>
//                     <View style={styles.bottomRightContainer}>
//                         <View style={styles.availability}>
//                             <Text>Available in : 5 days</Text>

//                         </View>
//                         <View style={styles.ratings}>
                            
//                         </View>
//                         <TouchableOpacity style={styles.history} onPress={() => navigation.navigate('TaskHistory')}>
//                             <Text>Show History</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//             </View>
//         </>
//     );
// };

// export default Dashboard;
// const styles = StyleSheet.create({
//     logoContainer: {
//         flexDirection: 'row',
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: 0,
//         backgroundColor: "#d8d1d1"
//     },
//     logo: {
//         width: 140,
//         height: 140,
//     },
//     container: {
//         paddingTop: 0,
//         flex: 1,
//         justifyContent: "space-between",
//         width: "100%",
//         padding: 16
//     },

//     topThreeContainer: {
//         marginVertical: 16,
//         flex: 1,
//         justifyContent: "flex-start",
//     },

//     bottomContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         alignSelf: "stretch"

//     },
//     bottomRightContainer: {
//         flex: 1,
//         flexDirection: 'column',
//         borderRadius: 8,

//     },
//     activeTask: {
//         flex: 2,
//         backgroundColor: "#D3EFD2",
//         alignSelf: "stretch",
//         marginBottom: 16,
//         borderRadius: 8,
//     },
//     lastTask: {
//         flex: 1,
//         backgroundColor: "#F0F4E3",
//         alignSelf: "stretch",
//         marginBottom: 16,
//         borderRadius: 8,

//     },
//     offerRequests: {
//         flex: 2,
//         backgroundColor: '#E3EEF4',
//         alignSelf: "stretch",
//         borderRadius: 8,


//     },
//     reports: {
//         borderRadius: 8,
//         marginRight: 16,
//         flex: 1,
//         backgroundColor: '#EFBCBC',
//     },
//     availability: {
//         borderRadius: 8,
//         backgroundColor: '#E3D2A6',
//         width: "100%",
//         height: 100,
//         flex: 1,
//         marginBottom: 16,

//     },
//     ratings: {
//         flex: 2,
//         backgroundColor: '#E3EEF4',
//         alignSelf: "stretch",
//         marginBottom: 16,
//         borderRadius: 8,
//     },
//     history: {
//         flex: 1,
//         backgroundColor: '#E3D2A6',
//         alignSelf: "stretch",
//         borderRadius: 8,
//     },



// })