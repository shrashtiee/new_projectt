import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from "./style";
import { ScreenHeader } from "../../components";

const CountryDetailsView = (props) => {
  const { item, handleBackButton } = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScreenHeader
        headerTitle={'Country Details'}
        handleBackButton={handleBackButton}
      />
      <View style={styles.innerViewStyle}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.titleTextStyle}>Capital: </Text>
          <Text style={styles.textStyle}>{item.capital}</Text>
        </View>
        {item.languages ? (
          <View style={styles.flexDirectionRow}>
            <Text style={styles.titleTextStyle}>Languages: </Text>
            <Text style={styles.textStyle}>{Object.values(item.languages).join(', ')}</Text>
          </View>
        ) : (
          <Text style={styles.textStyle}>Languages: Not specified</Text>
        )}
        {item.timezones ? (
          <View style={styles.flexDirectionRow}>
            <Text style={styles.titleTextStyle}>Time Zone: </Text>
            <Text style={styles.textStyle}>{item.timezones.join(', ')}</Text>
          </View>

        ) : (
          <Text style={styles.textStyle}>Time Zone: Not specified</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(CountryDetailsView);