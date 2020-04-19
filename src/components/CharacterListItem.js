import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

class CharacterListItem extends Component {


    render(){
        return(
            <ListItem
            title = {this.props.item.name}
            />
        )
    }

}

export default CharacterListItem