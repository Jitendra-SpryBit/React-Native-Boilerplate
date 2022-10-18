import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useSelector } from 'react-redux';
import { commonStyles } from '../../theme';

type DefaultProps = Readonly<any>;

type Props = {
  children?: React.ReactNode;
} & Partial<DefaultProps>;

const mapStateToProps = (state: any) => ({
  app: state.app
});

const Container: FC<Props> = (props: Props) => {
  const { isNetworkAvailable } = useSelector((state: any) => state.app)
  console.log('container', isNetworkAvailable);

  return <SafeAreaView edges={['top']} style={commonStyles.container}>
    {isNetworkAvailable ? props.children : null}
  </SafeAreaView>
};

export default connect(mapStateToProps, null)(Container);