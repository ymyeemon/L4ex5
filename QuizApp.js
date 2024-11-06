// import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, Image, Alert, Button, Text, ScrollView} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import Icon from "react-native-vector-icons/FontAwesome6";
//
// const styles = StyleSheet.create({
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 30,
//     letterSpacing: 4,
//     backgroundColor: 'lightblue',
//     width: 350,
//     padding: 20
//   },
//
//   card: {
//     marginHorizontal: 30,
//     marginVertical: 30,
//     borderWidth: 2,
//     borderColor: 'orange',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     maxHeight: 600,
//   },
//
//   question: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     letterSpacing: 2,
//     fontStyle: 'italic',
//     backgroundColor: 'lightgrey',
//   },
// });
//
// const Pic = ({pic}) => {
//   return (
//       <View>
//         <Image source={pic} style={{width:348, height: 400}}/>
//       </View>
//   );
// };
//
// const Ques = ({ques}) => {
//   return (
//       <View>
//         <Text style={styles.question}>{ques}</Text>
//       </View>
//   );
// };
//
// const App = () => {
//   const [name1, setName1] = useState('');
//   const [name2, setName2] = useState('');
//   const [name3, setName3] = useState('');
//   return (
//       <ScrollView>
//         <StatusBar hidden={true} />
//
//         <Icon name = "face-laugh-squint" style={styles.title}>
//           <Text>WELCOME TO GUESSING GAME!</Text>
//         </Icon>
//
//         <View style={styles.card}>
//           <Pic pic={{uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg?quality=90&resize=960%2C872'}} />
//           <Ques ques="Question 1: What fruit is this?"/>
//           <RNPickerSelect
//               onValueChange={(value) => setName1(value)}
//               items={[
//                 { label: 'Apple', value: 'Apple' },
//                 { label: 'Banana', value: 'Banana' },
//                 { label: 'Kiwi', value: 'Kiwi' },
//                 { label: 'Orange', value: 'Orange' },
//               ]}
//           />
//         </View>
//
//         <View style={styles.card}>
//           <Pic pic={{uri: 'https://th.bing.com/th/id/R.86dad7b0c0ab1f85a8d8a71721139790?rik=HzFSvTTEMAWl6w&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd3%2fKiwi_aka.jpg&ehk=3vSeaIg%2bqI81ocb%2fuj6skPJB4uBTzHVGFAq2C7ptAaE%3d&risl=&pid=ImgRaw&r=0'}}/>
//           <Ques ques="Question 2: What fruit is this?"/>
//           <RNPickerSelect
//               onValueChange={(value) => setName2(value)}
//               items={[
//                 { label: 'Apple', value: 'Apple' },
//                 { label: 'Banana', value: 'Banana' },
//                 { label: 'Kiwi', value: 'Kiwi' },
//                 { label: 'Orange', value: 'Orange' },
//               ]}
//           />
//         </View>
//
//         <View style={styles.card}>
//           <Pic pic={{uri: 'https://th.bing.com/th/id/OIP.Smb_1_Z_vcxD05M6EVEMAwHaHa?w=612&h=612&rs=1&pid=ImgDetMain'}}/>
//           <Ques ques="Question 3: What fruit is this?"/>
//           <RNPickerSelect
//               onValueChange={(value) => setName3(value)}
//               items={[
//                 { label: 'Apple', value: 'Apple' },
//                 { label: 'Banana', value: 'Banana' },
//                 { label: 'Kiwi', value: 'Kiwi' },
//                 { label: 'Orange', value: 'Orange' },
//               ]}
//           />
//         </View>
//
//         <Button onPress={ () => {
//           const correctAns1 = 'Banana';
//           const correctAns2 = 'Kiwi';
//           const correctAns3 = 'Apple';
//           let num = 0;
//           let score = 0;
//           let message = '';
//
//           if (name1 === correctAns1) {
//             score += 1;
//             num += 1;
//           }
//
//           if (name2 === correctAns2) {
//             score += 1;
//             num += 1;
//           }
//
//           if (name3 === correctAns3) {
//             score += 1;
//             num += 1;
//           }
//
//           if (score >= 2) {
//             message = `You have ` + num + ' ' + `correct answers! Well Done!`;
//           } else {
//             message = `You have ` + num + ' ' + `correct answers! You can do better next time!`;
//           }
//
//           Alert.alert(message);
//         }
//         } title="SUBMIT ANSWERS" color="#E4080A">
//         </Button>
//
//       </ScrollView>
//   );
// }
//
// export default App;
