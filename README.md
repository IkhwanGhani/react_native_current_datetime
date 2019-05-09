# React Native Current DateTime

## Installation
1. ``` npm install ```

## Example Code

```sh

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import defaultStyle from "./styles/styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[defaultStyle.container, defaultStyle.middleCenter]}>
        <Text style={[defaultStyle.display4]}>App</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({});

```

## Reference
- https://momentjs.com/
- https://medium.com/quick-code/using-moment-js-in-react-native-d1b6ebe226d4
