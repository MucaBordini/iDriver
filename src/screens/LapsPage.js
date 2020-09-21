import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import AddButton from '../components/AddButton';
import LapCard from '../components/LapCard';
import voltas from '../../voltas.json'

const isLeft = number => number % 2 === 0;

const LapsPage = props => (
    <View>
        <FlatList 
            data={[...voltas, {isLast: true}]}
            renderItem={({item, index}) => {
                return(
                    item.isLast ? 
                    <AddButton onNavigate={() => props.navigation.navigate('LapRegister')}/>
                    :
                    <LapCard 
                        volta={item} 
                        isLeft={isLeft(index)}
                        onNavigate={() => props.navigation.navigate('LapDetail', {volta: item})}
                    />
                );
            }}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    </View>
)

export default LapsPage;
//     constructor(props) {
//         super(props);
//         this.state = {
//             laps: [],
//             loading: false,
//             error: false
//         };
//     }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.linetext}>AQUI DEVEM FICAR AS VOLTAS REGISTRADAS PELO USUÁRIO</Text>
//                 <LapsList/>
//                 <AddButton name={"Registrar nova volta"} page={'LapRegister'} nav={(parameters) => this.props.navigation.navigate(parameters)}/>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     error: {
//       fontSize: 20,
//       color: 'red',
//       alignSelf: 'center'
//     },
//     linetext: {
//         backgroundColor: '#E5C4C4',
//         color: 'white',
//         fontSize: 42,
//         paddingLeft: 15,
//         flex: 7
//     },

//   })