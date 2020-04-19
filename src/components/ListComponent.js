import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, View } from 'react-native';


class ListComponent extends Component {

    render(){
        return(
            <View>
                <FlatList
                    data={this.props.items}
                    renderItem={(item)=>this.props.listItem(item)}
                    keyExtractor={(item)=> this.props.keyExtractor(item)}
                />
            </View>
        )
    }
}

export default ListComponent;