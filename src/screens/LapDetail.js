import React from 'react';
import { 
    View,
    ScrollView, 
    Image, 
    StyleSheet,
    Button 
} from 'react-native';
import Line from '../components/Line';
import { connect } from 'react-redux';
import { deleteLap } from '../actions';

class LapDetail extends React.Component {
    render(){
        const { volta } = this.props.navigation.state.params;
        return(
            <ScrollView>
                <Image
                    source={{
                        uri: `data:image/jpeg;base64,${volta.img}`
                    }}
                    style={styles.image}
                />
                <View style={styles.detailContainer}>
                    <Line label='Nome do circuito: ' content={volta.circuit}/>
                    <Line label='Tempo de volta: ' content={volta.laptime}/>
                    <Line label='Data: ' content={volta.date}/>
                </View>
                <View style={styles.button}>
                        <Button title="Editar" onPress={ () => {
                            this.props.navigation.replace('LapRegister', {voltaToEdit: volta});
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Excluir" color="red" onPress={ async () => {
                        const hasDeleted = await this.props.deleteLap(volta)
                        if (hasDeleted) {
                            this.props.navigation.goBack();
                        }
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
    },
    button: {
        margin: 10
    }
})

export default connect(null, {deleteLap})(LapDetail);