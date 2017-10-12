// Import React library for getting a component
import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Header from './src/Components/header';
import AlbumList from './src/Components/AlbumList';

//Create a component
export default class App extends Component<{}>{
  render(){
    return(
      <View style={{flex:1}}>
     <Header headerText="Albums"/>
     <AlbumList />
     </View>
      );
    };
};
