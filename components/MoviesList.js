import * as React from 'react';
import { Text, View, StyleSheet, Image, Linking, FlatList, TouchableOpacity } from 'react-native';

const data = require('../MovieInfo.json');

class Item extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderBottomWidth: 1, borderColor: 'gray' }}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Image style={styles.image} source={{ uri: this.props.item.image }} />
        </View>
        <View  style={{ borderTopWidth: 1, borderTopColor: 'gray' }}>
          <TouchableOpacity style={styles.link}
            onPress={() => {
              Linking.openURL(this.props.item.url);
            }}>
            <Text style={{ color: 'blue', textAlign: 'center' }}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class MoviesList extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <Item item={item} />;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
  },
  title: {
    marginVertical: 5,
    marginLeft: 5,
    fontSize: 15,
  },
  image: {
    height: 280,
    width: '100%',
    alignSelf: 'center',
  },
  link: {
    fontSize: 15,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 12,
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
  },
});
