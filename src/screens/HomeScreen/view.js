import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import styles from "./style";
import { ScreenHeader } from "../../components";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeView = (props) => {
  const { handleFetch, countryData, handleItem, handleBackButton, loading } = props;

  return (
    <View style={styles.mainContainer}>
      <ScreenHeader
        headerTitle={'List Of Countries'}
        handleBackButton={handleBackButton}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={handleFetch}
          style={styles.fetchButtonStyle}>
          <Text style={styles.buttonText}>Fetch</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 50 }}>
        {loading ? <ActivityIndicator animating={true} color={'black'}/> : null}
        <FlatList
          data={countryData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.01}
          renderItem={({ item, i }) => (
            <TouchableOpacity
              style={styles.itemStyle}
              onPress={() => handleItem(item)}>
              <View style={styles.innerViewStyle}>
                <Text style={styles.textStyle}>{item?.name?.common}</Text>
                <View style={styles.imageViewStyle}>
                  <Image source={{ uri: item?.flags?.png }}
                    style={styles.imageStyle} />
                </View>
              </View>
              {item.currencies ? (
                <Text style={styles.textStyle}>National Currency: {Object.values(item?.currencies)[0]?.name}</Text>
              ) : (
                <Text style={styles.textStyle}>National Currency: Not specified</Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomeView);