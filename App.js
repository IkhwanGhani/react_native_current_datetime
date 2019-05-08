import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
//Library
import moment from "moment";

//const
//import * from "./constant";

//style
//import DEFAULT_COLOR from "./color";
import mainStyle from "./styles/styles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //https://momentjs.com/
      day: moment().format("dddd"),
      date: moment().format("D/MM/YYYY"),
      time12: moment().format("hh:mm:ss a"),
      time24: moment().format("HH:mm:ss"),
    };
  }

  render() {
    return (
      <View style={[mainStyle.container, mainStyle.middleCenter]}>
        <Text style={[mainStyle.subheading]}>{this.state.day}</Text>
        <Text style={[mainStyle.subheading]}>{this.state.date}</Text>
        <Text style={[mainStyle.caption]}>{this.state.time12}</Text>
        <Text style={[mainStyle.caption]}>{this.state.time24}</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({});
