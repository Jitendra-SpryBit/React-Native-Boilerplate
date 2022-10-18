import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet,AppState, Platform,NativeModules } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { isNetworkAvailable } from '../../redux/actions/app';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

interface Props {
  isNetworkAvailable?: (params: any) => (dispatch: Dispatch<any>) => Promise<void>;

}

class NetworkInfo extends PureComponent<Props> {
  connectivityChange: any=null;

  state = {
    isConnected: true,
  };

  componentDidMount() {
    console.log("Is connected?", 'componentDidMount');
    // Subscribe
    this.connectivityChange = NetInfo.addEventListener(this.handleConnectivityChange);
  }

  componentWillUnmount() {
    // Unsubscribe
    if (this.connectivityChange != null) this.connectivityChange()
  }

  handleConnectivityChange = (state: any) => {
    this.setState({ isConnected: state.isConnected });
    console.log('connectivityChange--',state);

    this.props.isNetworkAvailable && this.props.isNetworkAvailable(state.isConnected)
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
  },
  offlineText: { color: '#fff' },
});


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<any> => ({
  isNetworkAvailable: (params: boolean) => dispatch(isNetworkAvailable(params)),
});

export default connect(null, mapDispatchToProps)(NetworkInfo);

