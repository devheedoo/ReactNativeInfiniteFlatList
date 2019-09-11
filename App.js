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
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    // setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (this.state.refreshing) {
            this.setState({
              data: res.results,
              error: res.error || null,
              loading: false,
              refreshing: false,
            });
          } else {
            this.setState({
              data: [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false,
            });
          }
        })
        .catch(error => {
          this.setState({ error, loading: false, refreshing: false });
        });
    // }, 1500);
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
        seed: this.state.seed + 1,
      }, () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      }, () => {
        this.makeRemoteRequest();
      }
    );
  };

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
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
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
