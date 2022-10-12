import React, {
    FC, useState, useEffect, Dispatch
} from 'react';
import { Button, FlatList, TextInput, View } from 'react-native';
//style
import styles from './styles';

//redux 
import { connect, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
//navigation
import { NavigationProp } from '@react-navigation/native';
import { Container, UserItem } from '../../components';
import { getUserList } from '../../redux/actions/home';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    getUserList?: (params: object) => (dispatch: Dispatch<any>) => Promise<void>;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): Partial<any> => ({
    getUserList: (obj: object) => dispatch(getUserList(obj))
});

const UserListScreen: FC<Props> = ({ getUserList }) => {
    const [userArr, setUserArr] = useState<Array<any>>([])
    
    const { userList } = useSelector((state: any) => state.home)
    useEffect(() => {
        getUserList && getUserList({ page: 1 })
    }, [])

    useEffect(() => {
        if (userArr && userArr.length > 0) {
            setUserArr([...userArr, ...userList.data])
        } else {
            setUserArr(userList.data)
        }
    }, [userList])

    const loadMore = () => {
        let currentPage = userList.page + 1
        console.log(currentPage);
        console.log(currentPage <= userList.total_pages);
        if (currentPage <= userList.total_pages) {
            getUserList && getUserList({ page: 2 })
        }
    }

    return (
        <Container>
            <FlatList
                data={userArr}
                extraData={userList}
                renderItem={UserItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={1}
            />
        </Container>
    )
};

export default connect(null, mapDispatchToProps)(UserListScreen);
