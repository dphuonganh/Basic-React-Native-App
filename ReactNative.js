import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import MoviesList from './components/MoviesList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ textAlign: 'center'}}>
      <Text style={styles.paragraph}>
      Top Ten Movies of IMDB
      </Text>
        <MoviesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    marginVertical: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
