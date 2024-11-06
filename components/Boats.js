import {View, StyleSheet, Image, ScrollView, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const styles = StyleSheet.create({
    cards: {
       marginHorizontal: 40,
       marginVertical: 40,
       flexDirection: 'column',
       justifyContent: 'center',
       maxHeight: 600,
    },

    text: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 1,
    },

    title: {
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 3,
        marginBottom: 10,
        backgroundColor: 'lightblue',
        padding: 13,
        color: 'black',
    },
    
    img: {
        width: 331,
        height: 400,
        borderRadius: 10,
    },
});

const Boat = ({name, description, icon_name, picture}) => {
    return (
        <ScrollView>
            <View style={styles.cards}>
                <Icon style={styles.title} name = {icon_name} size={20}><Text>{name}</Text></Icon>
                <Text style={styles.text}>{description}</Text>
                <Image source={picture} style={styles.img}/>
            </View>
        </ScrollView>
    );
}

export default Boat;
