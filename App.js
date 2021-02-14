import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
  Text,
  PanResponder,
} from 'react-native';

import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';
import {StackedAreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {AppleCard} from 'react-native-apple-card-views';
import Router from './Router';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getColor = (item) => {
    switch (item.position) {
      case 1:
        return '#49a617';
      case 2:
        return '#c40c3a';
      default:
        return '#4185f2';
    }
  };

  listItemStyling(item) {
    return {
      height: 110,
      margin: 10,
      marginTop: 20,
      width: 110,
      borderRadius: 7,

      backgroundColor: this.getColor(item),
      shadowColor: 'white',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 2,
    };
  }

  ListItem = ({item, index}) => {
    return (
      <TouchableOpacity style={this.listItemStyling(item)}>
        <View style={styles.listItemWrap}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>{item.incdec}</Text>
          </View>
          <View
            style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 35}}>{item.acron}</Text>
          </View>
        </View>

        <View style={{alignContent: 'flex-end'}}>
          <Text>Hey</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return <Router />;
  }
  makeChart(datas, keys, colors, svgs) {
    //{this.makeChart(datas, keys, colors, svgs)}
    return (
      <StackedAreaChart
        style={{
          marginTop: 20,
          height: 200,
          paddingVertical: 16,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 16.0,

          elevation: 24,
        }}
        data={datas}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
        svgs={svgs}
      />
    );
  }
}
const styles = StyleSheet.create({
  itemComponent: {
    margin: 10,
  },
  listItemWrap: {
    flexDirection: 'column',
    flex: 1,
  },
  shadow: {
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 24,
  },
  FlatList: {
    flexDirection: 'row',
    height: 130,
  },
  container: {
    backgroundColor: '#000',

    flexDirection: 'column',
  },
  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  itemContainter: {
    height: 70,
    marginBottom: 20,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {},
});
