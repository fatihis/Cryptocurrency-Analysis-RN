import React, {Component} from 'react';
import {Text, View, setState, TouchableOpacity, StyleSheet} from 'react-native';
import {AppleCard} from 'react-native-apple-card-views';
import {SharedElement} from 'react-navigation-shared-element';
/*AnalysisOverviewPage.sharedElements = (
  navigation,
  otherNavigation,
  showing,
) => {
  const item = navigation.getParam('item');
  return [item.id];
};*/

export default class AnalysisOverwievPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numerator: '1231',
      item: {
        id: '',
        title: '',
        incdec: '',
        acron: '',
        position: 0,
      },
    };
  }
  componentDidMount() {
    this.setState({item: this.props.navigation.getParam('item')});
  }
  render() {
    console.log(this.state.item);
    return (
      <View>
        <SharedElement id={this.state.numerator}>
          <TouchableOpacity
            style={{
              height: 110,
              margin: 10,
              marginTop: 20,
              width: 110,
              borderRadius: 7,

              backgroundColor: '#000',

              shadowColor: 'white',
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 2,
            }}>
            <View style={styles.listItemWrap}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{color: '#fff'}}>{this.state.item.incdec}</Text>
              </View>
              <View
                style={{
                  flex: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 35}}>
                  {this.state.item.acron}
                </Text>
              </View>
            </View>

            <View style={{alignContent: 'flex-end'}}>
              <Text>Hey</Text>
            </View>
          </TouchableOpacity>
        </SharedElement>
      </View>
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
