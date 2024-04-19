import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeView from "./view";
import axios from 'axios';

const HomeScreen = (props) => {
    const { navigation } = props;
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);

    const api = axios.create({
        baseURL: 'https://restcountries.com/v3.1/',
    });

    api.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const handleFetch = async () => {
        setLoading(true)
        api.get('/all')
            .then((response) => {
                setLoading(false)
                setCountryData(response);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });

        // const url = `https://restcountries.com/v3.1/all`;
        // const res = await fetch(url);
        // const data = await res.json();
        // setLoading(false)
        // setCountryData(data);
    }

    const handleItem = (item) => {
        navigation.navigate('CountryDetailsScreen', { item: item })
    }

    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <HomeView
            handleBackButton={handleBackButton}
            handleFetch={handleFetch}
            countryData={countryData}
            handleItem={handleItem}
            loading={loading}
        />
    );
}
HomeScreen.navigationOptions = () => ({
});

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(HomeScreen);
