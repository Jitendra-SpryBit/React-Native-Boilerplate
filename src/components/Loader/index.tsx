import React, { FC } from 'react';
import { ActivityIndicator, Image, Modal, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { commonStyles } from '../../theme';

type DefaultProps = Readonly<any>;


type Props = {

} & Partial<DefaultProps>;


const Loading: FC<Props> = (posps:Props) => {
  const {isLoading}=useSelector((state:any)=>state.app)
  console.log("isLoading",isLoading);
  
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isLoading}
      style={{ zIndex: 1100 }}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={isLoading} color="black" />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  ...commonStyles,
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

export default Loading;
