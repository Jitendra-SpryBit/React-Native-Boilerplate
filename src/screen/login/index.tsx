import React, { FC, useState, Dispatch } from 'react';
import { Button, TextInput, View } from 'react-native';
//style
import styles from './styles';

//redux 
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { loginUser } from '../../redux/actions/auth'
//navigation
import { NavigationProp } from '@react-navigation/native';
import { RootState } from '../../redux/reducers';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    loginUser?: (params: any) => (dispatch: Dispatch<any>, getState: () => RootState) => Promise<void>;
}

const mapStateToProps = (state: any) => ({
    user: state.auth
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<any> => ({
    loginUser: (params: any) => dispatch(loginUser(params)),
});

const LoginScreen: FC<Props> = (props: Props) => {
    const [email, setEmail] = useState<string>("eve.holt@reqres.in")
    const [password, setPassword] = useState<string>("pistol")


    const onPressLoginButton = () => {
        let user: { email: string, password: string } = { email: "", password: "" }
        user.email = email
        user.password = password
        props.loginUser && props.loginUser(user)
    }
    return <View>
        <TextInput
            style={styles.inputTextStyle}
            autoCapitalize={"none"}
            placeholder="Email"
            keyboardAppearance='default'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address' />
        <TextInput
            style={styles.inputTextStyle}
            autoCapitalize={"none"}
            placeholder="Password"
            keyboardAppearance='default'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            keyboardType='default' />
        <Button title='Login' onPress={onPressLoginButton} color="#841584" />
    </View>
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
