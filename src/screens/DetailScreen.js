import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text ,Image,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {charactersAction} from '../_actions'
// import { Image } from 'react-native-elements';



class DetailScreen extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
       
        // this.props.getCharacter(this.props.mother);
    }


    render(){
        // let characterList = [this.props.father,this.props.mother]
        // this.props.getMultipleCharacters(characterList);
        this.props.getCharacter(this.props.father);
        var characterId= this.props.url.split("/")
        var avatarUrl = `https://i.picsum.photos/id/${characterId[characterId.length-1]}/200/300.jpg`
        return(
            <View>
                <ScrollView>
                <View style={styles.ImageContainer}>
                <Image
                source={{uri:avatarUrl}}
                style={styles.ImageStyle}
                />
                </View>
                <View style={styles.CharacterContainer}>
                    <Text 
                    style={styles.CharacterName}>{this.props.name}</Text>
                </View>
                <View style={styles.MiscContainer}>
                    <Text style={styles.NormalText}>
                        Gender: {this.props.gender}
                    </Text>
                </View>
                <View style={styles.MiscContainer}>
                    <Text style={styles.NormalText}>
                        Born: {this.props.born}
                    </Text>
                </View>
                <View style={styles.MiscContainer}>
                    <Text style={styles.NormalText}>
                        Died: {this.props.died}
                    </Text>
                </View>
                <View style={styles.MiscContainer}>
                    <Text style={{
                        fontSize:20,
                        textDecorationLine:"underline"
                    }}>
                        Titles 
                    </Text>
    
                        {
                            this.props.titles.map((name,index)=>(
                                <Text
                                key={index}
                                style={styles.NormalText}>
                                    {`- ${name}`}
                                </Text>
                            ))
                        }
                   
                    
                </View>

                <View style={styles.MiscContainer}>
                        <Text style={styles.NormalText}>
                            Father: {this.props.cName}
                        </Text>
                </View>

                {/* <View style={styles.MiscContainer}>
                        <Text style={styles.NormalText}>
                            Mother: {this.props.mother}
                        </Text>
                </View> */}

                <View style={styles.MiscContainer}>
                    <Text style={{
                        fontSize:20,
                        textDecorationLine:"underline"
                    }}>
                        Allegiences 
                    </Text>
    
                        {
                            this.props.allegiances.map((name,index)=>(
                                <Text
                                key={index}
                                style={styles.NormalText}>
                                    {`- ${name}`}
                                </Text>
                            ))
                        }
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    ImageStyle:{
        width: 300,
        resizeMode: 'contain',
        height:300,
        borderRadius:500/2
    },
    ImageContainer:{
        alignItems:'center',
        marginTop:30
    },
    CharacterContainer:{
        padding:20,
        borderBottomWidth:1
    },
    CharacterName:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:40
    },
    MiscContainer:{
        padding:15,
    },
    TitlesName:{
        
    },
    NormalText:{
        fontSize:20
    }

  });

function mapStateToProps(state){
    console.log(state)
    const {url,name,gender,born,died,titles,father,allegiances,mother,error,loading} = state.singleCharacter;

    const {cName} = state.Characters;
    return{
        url,
        name,
        gender,
        born,
        died,
        titles,
        father,
        mother,
        allegiances,
        error,
        loading,
        cName
    }
}

const actionCreators = {
    getCharacter: charactersAction.getCharacter,
    getMultipleCharacters:charactersAction.getMultipleCharacters,
}

export default connect(mapStateToProps,actionCreators)(DetailScreen)