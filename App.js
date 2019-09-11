/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

const App = () => {
  return (
      <FlatList
        ListHeaderComponent={() => {
          return <View style={styles.side}><Text style={[styles.center, styles.title]}>List Header Component</Text></View>;
        }}
        data={[
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
          { name: { first: 'Choco', last: 'Kim' }, email: 'choco@wavetogether.com' },
        ]}
        renderItem={ ({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{`${item.name.first} ${item.name.last}`}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
        ListFooterComponent={() => {
          return <View style={styles.side}><Text style={[styles.center, styles.title]}>List Footer Component</Text></View>
        }}
      />
  );
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
