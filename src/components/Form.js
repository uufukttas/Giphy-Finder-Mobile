import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { GIPHY_REQUEST_API_KEY } from "@env";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { searchGiphy, setGiphyURL, isLoading } from '../actions/giphyAction';

const Form = ({ searchGiphy, setGiphyURL, isLoading, searchedGiphy }) => {
    const [formText, setFormText] = useState('');
    const getGiphy = async () => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_REQUEST_API_KEY}&tag=${formText}&rating=g`);
            const giphyURL = response?.data?.data?.images?.original?.url

            setGiphyURL(giphyURL);
            isLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = () => {
        isLoading(true);
        getGiphy(formText);
        searchGiphy(formText);
        console.log('searchedGiphy', searchedGiphy)
    };

    return (
        <View style={styles.card}>
            <Text style={styles.label}>Type your context:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type context"
                onChangeText={text => setFormText(text)}
                value={formText}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    handleSubmit();
                    console.log('searchedGiphy', searchedGiphy)
                }}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'left',
    },
    input: {
        width: '100%',
        padding: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
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
});

const mapDispatchToProps = {
    searchGiphy,
    setGiphyURL,
    isLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
