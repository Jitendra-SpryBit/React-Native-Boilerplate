import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../theme';

type DefaultProps = Readonly<any>;

type Props = {
  children?: React.ReactNode;
} & Partial<DefaultProps>;


const Container: FC<Props> = (props: Props) => {
  return <SafeAreaView edges={['top']} style={commonStyles.container}>
    {props.children}
  </SafeAreaView>
};

export default Container;