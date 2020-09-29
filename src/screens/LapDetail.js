import React from 'react';
import { 
    View,
    ScrollView, 
    Image, 
    StyleSheet,
    Button 
} from 'react-native';
import Line from '../components/Line';

export default class LapDetail extends React.Component {
    render(){
        const { volta } = this.props.navigation.state.params;
        const picUrl = volta.img
        return(
            <ScrollView>
                <Image
                    source={{
                        uri: picUrl
                    }}
                    style={styles.image}
                />
                <View style={styles.detailContainer}>
                    <Line label='Nome do circuito: ' content={volta.circuit}/>
                    <Line label='Tempo de volta: ' content={volta.laptime}/>
                    <Line label='Data: ' content={volta.date}/>
                    <Button title="Editar" onPress={ () => {
                        this.props.navigation.replace('LapRegister', {voltaToEdit: volta});
                    }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
    },
    detailContainer: {
        backgroundColor: '#E13232',
        marginTop: 20,
        elevation: 1,
        marginBottom: 20
    }
})