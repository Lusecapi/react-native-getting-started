import React from 'react';
import {FlatList, Text,  StyleSheet} from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({

    list:{
        flex:1,
        paddingTop:20,
        backgroundColor:'#f3f3f3'
    }
});

class EventList extends React.Component
{
    constructor(props){
        super(props);
        this.handleAddEvent = this.handleAddEvent.bind(this);

        this.state = {
            events: []
        }
    }

    handleAddEvent(){
        this.props.navigation.navigate('Form');
    }

    componentDidMount(){

        setInterval(()=>{
            this.setState({
                events: this.state.events.map(e =>({
                    ...e,
                    timer: Date.now()
                }))
            });
        }, 1000)

        const events = require('../db.json').events.map(e =>({
            ...e,
            date: new Date(e.date)
        }));
        // const events = [{name:"Luis"}, {name:"Sebastian"}];
        this.setState({events});
    }

    render()
    {
        return(
            <div>
            <FlatList
                style={styles.list}
                data={this.state.events}
                renderItem={({item}) => <EventCard event={item}/> }
                keyExtractor={(item) => item.id}
            />
            <ActionButton onPress={this.handleAddEvent} buttonColor="rgba(231,76,60,1)"/>
            </div>
        );
    }

}

export default EventList;