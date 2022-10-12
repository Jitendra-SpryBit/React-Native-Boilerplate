import React, { FC } from 'react';

type DefaultProps = Readonly<any>;

type Props = {
  children?: React.ReactNode;
} & Partial<DefaultProps>;


const CustomTextInput: FC<Props> = (props: Props) => {
  return null
};

export default CustomTextInput;