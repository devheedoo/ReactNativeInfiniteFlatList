/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [
        { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
      ],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    }
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  render() {
    return (
        <FlatList
          ListHeaderComponent={() => {
            return <View style={styles.side}><Text style={[styles.center, styles.title]}>List Header Component</Text></View>;
          }}
          data={this.state.data}
          renderItem={ ({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{`${item.name.first} ${item.name.last} ${index + 1}`}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
          ListFooterComponent={() => {
            return <View style={styles.side}><Text style={[styles.center, styles.title]}>List Footer Component</Text></View>
          }}
          keyExtractor={item => item.email}
        />
    );
  }
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  side: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default App;
