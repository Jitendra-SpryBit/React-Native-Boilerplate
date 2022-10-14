import React, { FC, useEffect, Dispatch } from 'react';
import { TouchableOpacity, View } from 'react-native';
//style
import styles from './styles';

//redux 
import { connect, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getRandomJoks } from '../../redux/actions/home';

//navigation
import { NavigationProp } from '@react-navigation/native';
import { Container, Typography } from '../../components';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    getRandomJoks?: () => (dispatch: Dispatch<any>) => Promise<void>;

}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<any> => ({
    getRandomJoks: () => dispatch(getRandomJoks())

});

const JokesScreen: FC<Props> = ({ getRandomJoks }) => {

    const { jokes } = useSelector((state: any) => state.home)

    useEffect(() => {
        getNewJoks()
    }, [])

    const getNewJoks = () => {
        getRandomJoks && getRandomJoks()
    }

    return <Container>
        <View style={[styles.container, styles.center]}>
            <View style={[styles.container, styles.center, styles.padding]}>
                <Typography font='REGULAR' size={20}>{jokes.text}</Typography>
            </View>
            <View style={styles.roundView}>
                <TouchableOpacity onPress={getNewJoks}>
                    <Typography font='REGULAR' size={40}>{'↻'}</Typography>
                </TouchableOpacity>
            </View>
        </View>
    </Container>

};

export default connect(null, mapDispatchToProps)(JokesScreen);
