import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { commonStyles } from '../../theme';
import Typography from '../Typography';

type DefaultProps = Readonly<any>;

export interface Item {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type Props = {
  children?: React.ReactNode;
  item: Item;
  index: number;
  separators: any;
} & Partial<DefaultProps>;


const UserItem: FC<Props> = ({ item }) => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <Image source={{ uri: item.avatar }} style={style.avtar} />
        <View style={style.detailContaier}>
          <Typography font='MEDIUM'>{`${item.first_name} ${item.last_name}`}</Typography>
          <Typography>{`${item.email}`}</Typography>
        </View>
        <View style={style.colorView}>
        <Typography>{`${item.id}`}</Typography>
        </View>
      </View>
    </View>)
};

const style = StyleSheet.create({
  ...commonStyles,
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding:10,
    margin:10
  },
  avtar: {
    height: 48,
    width: 48,
    borderRadius: 24
  },
  detailContaier:{
    marginStart:20,
    flex:1
  },
  colorView:{
    backgroundColor:"orange",
    height:30,
    width:"15%",
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default UserItem;
