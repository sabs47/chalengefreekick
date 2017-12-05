import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import MentionsTextInput from 'react-native-mentions';
const { height, width } = Dimensions.get('window');
export default class BarcelonaService extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      wortsplice: "",
      data:[]
    }
  }
  
  componentDidMount(wortsplice) {
    this.props.callService() 

  }
  gendersugesrow({ item }, hidePanel) {
  
    return (
      <TouchableOpacity onPress={() => this.genderprest(item.gender, hidePanel)}>
        <View style={styles.gendersuggestion}>
        <View style={styles.genderbox}>
            <Text style={styles.gendertext}>{item.gender}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  genderprest(login, hidePanel) {
    hidePanel();
    const comment = this.state.value.slice(0, - this.state.wortsplice.length)
    this.setState({
      data: [],
      value:gender
    })
  }
  componentWillReceiveProps(nextProps,wortsplice) {
    if (nextProps != null) {
        console.log('barcelona data states', nextProps)
        this.setState({
          wortsplice:nextProps,            
           nextProps
                });    }

  } 
    render() {
    return (
      <View style={styles.container}>
        <MentionsTextInput
          textInputStyle={{ borderColor: '#ebebeb', borderWidth: 1, padding: 5, fontSize: 15 }}
          suggestionsPanelStyle={{ backgroundColor: 'rgba(100,100,100,0.1)' }}
          loadingComponent={() => <View style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>}
          textInputMinHeight={30}
          textInputMaxHeight={80}
          trigger={'@'}
          triggerLocation={'anywhere'} 
          value={this.state.value}
          onChangeText={(val) => { this.setState({ value: val }) }}
          triggerCallback={this.componentWillReceiveProps.bind(this)}
          renderSuggestionsRow={this.gendersugesrow.bind(this)}
          suggestionsData={this.state.data} 
          keyExtractor={(item, index) => item.gender} 
          suggestionRowHeight={45}
          horizontal={false} 
          MaxVisibleRowCount={3} 
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'flex-end',
    paddingTop: 100,
   
  },
  gendersuggestion: {
    flexDirection: 'row',
  },
 genderbox: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 15
  },
  gendertext: {
    fontSize: 13,
    fontWeight: '500'
  },
});


