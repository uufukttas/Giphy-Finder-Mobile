import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Image, Button, StyleSheet, Text, Clipboard, TouchableOpacity } from 'react-native';
import loading from '../../assets/loading.webp';

const GiphyContainer = ({ searchedGiphy, giphyURL, isLoading }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const copyToClipboard = () => {
    Clipboard.setString(giphyURL.split('?')[0]);

    setTimeout(() => {
      setCopySuccess(false);
    }, 5000);
  };

  return (
    <View style={styles.card}>
      {
        isLoading ? (
          <Image source={loading} style={styles.image} alt='loading' className='items-center justify-center' />
        ) : (
          searchedGiphy ? (
            <>
              <Image source={{ uri: giphyURL }} style={styles.image} />
              <TouchableOpacity onPress={() => copyToClipboard()} style={styles.button}>
                <Text style={styles.buttonText}>{copySuccess ? 'Copied URL!' : 'Copy Giphy URL'}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text>Search for a Giphy</Text>
          ))
      }
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    backgroundColor: '#0073e6',
    borderRadius: 50,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  searchedGiphy: state.searchedGiphy,
  giphyURL: state.giphyURL,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(GiphyContainer)