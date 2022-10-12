import React, { FC } from 'react';

type DefaultProps = Readonly<any>;

type Props = {
  children?: React.ReactNode;
} & Partial<DefaultProps>;


const CustomButton: FC<Props> = (props: Props) => {
  return null
};

export default CustomButton;