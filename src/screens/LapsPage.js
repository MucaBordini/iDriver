import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import AddButton from '../components/AddButton';
import LapCard from '../components/LapCard';
import { connect } from 'react-redux';
import { myLaps } from '../actions';

const isLeft = number => number % 2 === 0;

class LapsPage extends React.Component {

    componentDidMount() {
        this.props.myLaps();
    }

    render(){
        if(this.props.voltas === null) {
            return (<View>
                <ActivityIndicator />
                <AddButton onNavigate={() => this.props.navigation.navigate('LapRegister')}/>
                </View>)
            
        }
         return (
            <View>
                <FlatList 
                    data={[...this.props.voltas, {isLast: true}]}
                    renderItem={({item, index}) => {
                        return(
                            item.isLast ? 
                            <AddButton onNavigate={() => this.props.navigation.navigate('LapRegister')}/>
                            :
                            <LapCard 
                                volta={item} 
                                isLeft={isLeft(index)}
                                onNavigate={() => this.props.navigation.navigate('LapDetail', {volta: item})}
                            />
                        );
                    }}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
         )
    }
}

const mapStateToProps = state => {
    const { listaVoltas } = state;

    if(listaVoltas === null) {
        return {voltas : listaVoltas};
    }

    const keys = Object.keys(listaVoltas);

    const listaVoltasWithId = keys.map(key => {
        return { ...listaVoltas[key], id: key }
    })
    return {voltas : listaVoltasWithId};
}

export default connect(mapStateToProps, {myLaps})(LapsPage);
