import React, { useEffect, FC, Dispatch } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';

import styles from './styles';
import Assets from '../../resources';

//redux 
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/reducers';
import { splashLunached } from '../../redux/actions/auth';

interface Props {
    splashLunached?: () => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<void>;
}
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<any> => ({
    splashLunached: () => dispatch(splashLunached()),

});
const SplashScreen: FC<Props> = ({ splashLunached }) => {
    useEffect(() => {
        splashLunached && splashLunached()
    }, [])
    return <ImageBackground style={styles.fullSize} source={Assets.splash} />
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);