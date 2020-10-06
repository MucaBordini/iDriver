import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Image, 
    Dimensions, 
    TouchableOpacity
} from 'react-native';

const LapCard = ({ volta, isLeft, onNavigate }) => (
    <TouchableOpacity
        onPress={onNavigate}
        style={[styles.container, isLeft ? styles.leftColumn : styles.rightColumn]}>
        <View style={styles.card}>
            <Image 
                style={styles.image}
                source={
                    {
                        uri: `data:image/jpeg;base64,${volta.img}`
                    }
                }
                aspectRatio={1}
                resizeMode="cover"
            />
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{ `${volta.circuit} - ${volta.date}` }</Text>
            </View>
            
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10
    },
    cardTitleContainer: {
        borderRadius:10,
        backgroundColor: '#E13232',
        opacity: 0.8,
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft: 5,
        alignItems: 'center',
    },
    cardTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        borderRadius: 10
    },
    leftColumn: {
        paddingLeft: 10
    },
    rightColumn: {
        paddingRight: 10
    }  
})

export default LapCard;