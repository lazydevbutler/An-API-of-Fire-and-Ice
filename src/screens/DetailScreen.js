import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text ,Image,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {charactersAction} from '../_actions'
import { Divider } from 'react-native-elements';
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
        var avatarUrl = `https://i.picsum.photos/id/${characterId[characterId.length-1]}/500/500.jpg`
        return(
            <View style = {styles.container}>
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
                {/* <Divider /> */}

                <View style={styles.MiscContainer}>
                    <Text style={styles.LeftText}>
                    Gender
                    </Text>
                    <Text style={styles.NormalText}>
                        {this.props.gender}
                    </Text>
                   
                </View>
                <View style={styles.MiscContainer}>
                    <Text style={styles.LeftText}>
                        Born
                    </Text>
                    <Text style={styles.NormalText}>
                        {this.props.born}
                    </Text>
                </View>
                <View style={styles.MiscContainer}>
                    <Text style={styles.LeftText}>
                        Died
                    </Text>
                    <Text style={styles.NormalText}>
                        {this.props.died}
                    </Text>
                </View>
                <View style={styles.TitlesContainer}>
                    <Text style={styles.TitlesName}>
                        Titles 
                    </Text>
    
                        {
                            this.props.titles.map((name,index)=>(
                                <Text
                                key={index}
                                style={styles.TitlesNameList}>
                                     <Text key={index}>{'\u2022' + " "}</Text>{name}
                                </Text>
                            ))
                        }
                   
                    
                </View>
                <View style={styles.TitlesContainer}>
                    <Text style={styles.TitlesName}>
                        Aliases 
                    </Text>
    
                        {
                            this.props.aliases.map((name,index)=>(
                                <Text
                                key={index}
                                style={styles.TitlesNameList}>
                                     <Text key={index}>{'\u2022' + " "}</Text>{name}
                                </Text>
                            ))
                        }
                   
                    
                </View>

                <View style={styles.MiscContainer}>
                    <Text style={styles.LeftText}>
                        Father
                    </Text>
                    <Text style={styles.NormalText}>
                        {this.props.cName}
                    </Text>
                </View>

                {/* <View style={styles.MiscContainer}>
                        <Text style={styles.NormalText}>
                            Mother: {this.props.mother}
                        </Text>
                </View> */}

                <View style={styles.MiscContainer}>
                    <Text style={styles.TitlesName}>
                        Allegiences 
                    </Text>
    
                        {
                            this.props.allegiances.map((name,index)=>(
                                <Text
                                key={index}
                                style={styles.TitlesNameList}>
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
      flexDirection:"column",
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
        
    },
    CharacterName:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:40
    },
    MiscContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:15,
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        elevation:1,
        marginTop:10
    },
    TitlesContainer:{
        padding:15,
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        elevation:1,
        marginTop:10
    },
    TitlesName:{
        textAlign:'left',
        color:'#A9A9A9',
        fontSize:20
    },
    NormalText:{
        fontSize:20
    },
    LeftText:{
        fontSize:20,
        marginRight:20,
        color:'#A9A9A9'
    },
    TitlesNameList:{
        fontSize:18,
        padding:8
    }

  });

function mapStateToProps(state){
    // console.log(state)
    const {url,name,gender,born,died,titles,aliases,father,allegiances,mother,error,loading} = state.singleCharacter;
    const {characterList} = state.characterList;
    const {cName} = state.Characters;
    return{
        url,
        name,
        gender,
        born,
        died,
        titles,
        aliases,
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