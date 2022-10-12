import React, { FC, useState, Dispatch } from 'react';
import { Button, TextInput, View } from 'react-native';
//style
import styles from './styles';

//redux 
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
//navigation
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
}

const mapStateToProps = (state: any) => ({
    user: state.auth
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<any> => ({

});

const UserDetailScreen: FC<Props> = (props: Props) => {


    return <View>

    </View>
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailScreen);
