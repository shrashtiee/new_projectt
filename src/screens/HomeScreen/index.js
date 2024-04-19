import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeView from "./view";

const HomeScreen = (props) => {
    const { navigation } = props;
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
        setLoading(true)
        const url = `https://restcountries.com/v3.1/all`;
        const res = await fetch(url);
        const data = await res.json();
        setLoading(false)
        setCountryData(data);
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
