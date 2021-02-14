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
import {SharedElement} from 'react-navigation-shared-element';
import {navigate} from 'react-navigation';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'BitCoin',
    incdec: '+%0,088',
    acron: 'BTC',
    position: 1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Etherium',
    acron: 'ETH',
    incdec: '+%1,908',
    position: 1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455719d272',
    title: 'DogeCoin',
    acron: 'DOGE',
    incdec: '-%0,720',
    position: 2,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e223d72',
    title: 'Cekomastic',
    incdec: 'Deprecated',
    acron: 'CKO',
    position: 3,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e229472',
    title: '216Coin',
    incdec: '+%3,120',
    acron: 'TOS',
    position: 1,
  },
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {numerator: '1231'};
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
  itemPress(item) {
    this.props.navigation.navigate('AnalysisOverviewPage', {item: item});
  }
  ListItem = ({item, index}) => {
    return (
      <SharedElement id={this.state.numerator}>
        <TouchableOpacity
          style={this.listItemStyling(item)}
          onPress={(item) => this.itemPress(item)}>
          <View style={styles.listItemWrap}>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text>{item.incdec}</Text>
            </View>
            <View
              style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 35}}>
                {item.acron}
              </Text>
            </View>
          </View>

          <View style={{alignContent: 'flex-end'}}>
            <Text>Max</Text>
          </View>
        </TouchableOpacity>
      </SharedElement>
    );
  };
  render() {
    const datas = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
      {
        month: new Date(2015, 4, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
      },
    ];

    const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
    const keys = ['apples', 'bananas', 'cherries', 'dates'];
    const svgs = [
      {onPress: () => console.log('apples')},
      {onPress: () => console.log('bananas')},
      {onPress: () => console.log('cherries')},
      {onPress: () => console.log('dates')},
    ];
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            renderItem={this.ListItem}
            keyExtractor={(item) => item.id}
            data={DATA}
            style={styles.FlatList}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 60,
            }}>
            <AppleCard
              smallTitle="Move foward"
              largeTitle="Analyze latest jumpers"
              footnoteText="Not an invesment advice"
              resizeMode="cover"
              source={require('../assets/analysis.png')}
              backgroundStyle={{
                height: 200,
              }}
              onPress={() => {}}
            />
            <View style={{marginVertical: 20}}></View>
            <AppleCard
              smallTitle="Catch up"
              largeTitle="Little briefing for new comers"
              footnoteText=""
              resizeMode="cover"
              source={require('../assets/40k.jpg')}
              backgroundStyle={{
                height: 200,
              }}
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.Start}></TouchableOpacity>
        </View>
      </View>
    );
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
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  listItemWrap: {
    flexDirection: 'column',
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
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
    backgroundColor: '#fff',

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
