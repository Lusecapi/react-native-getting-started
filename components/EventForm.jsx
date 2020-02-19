import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate} from '../api';

const styles = StyleSheet.create({
    fieldContainer:{
        marginTop:20,
        marginBottom:20,
        backgroundColor:'#fff'
    },
    text:{
        height:40,
        margin:0,
        marginRight:7,
        paddingLeft:10
    },
    button:{
        height:50,
        backgroundColor:"#48bbec",
        borderColor:"#48bbec",
        alignSelf:'stretch',
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    buttonText:{
        color:'#fff',
        fontSize:20
    }
});

class EventForm extends React.Component{

    constructor(props)
    {
        super(props)
        this.handleAddPress = this.handleAddPress.bind(this);

        this.state ={
            title : "",
            date: null
        }
    }
    handleAddPress()
    {
        this.props.navigation.goBack();
    }

    render()
    {
        return(
            <View style={{flex:1}}>
                
                <View style={styles.fieldContainer}>
                    <TextInput onChangeText={(text) => this.setState({title:text})} value={this.state.eventTitle} style={styles.text} placeholder="Event Title" spellCheck={false}/>
                    
                </View>

                <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default EventForm;