import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CountryDetailsView from "./view";

const CountryDetailsScreen = (props) => {
    const { navigation, route } = props;
    const { item } = route.params

    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <CountryDetailsView
            handleBackButton={handleBackButton}
            item={item}
        />
    );
}
CountryDetailsScreen.navigationOptions = () => ({
});

CountryDetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(CountryDetailsScreen);
