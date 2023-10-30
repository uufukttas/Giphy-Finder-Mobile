import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Form from './src/components/Form';
import GiphyContainer from './src/components/GiphyContainer';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Form />
        <GiphyContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
