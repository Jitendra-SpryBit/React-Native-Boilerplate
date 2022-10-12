import React, {PureComponent} from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';
import colors,{ ColorType } from '../../theme/colors';
import fonts,{fontType} from '../../theme/fonts';
import {deviceBasedDynamicDimension} from '../../utils/ScreenMatrix';

type Color = ColorType;
type Font = fontType;

type DefaultProps = Readonly<typeof defaultProps>;

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: Color;
  font?: Font;
  adjustsFontSizeToFit?: boolean;
} & Partial<DefaultProps>;

const defaultProps = {
  color: 'black',
  size: deviceBasedDynamicDimension(14, true, 1) || 0,
  style: {},
  lines: 0,
  font: 'REGULAR',
  pd: 0,
  adjustsFontSizeToFit: false,
};

class Typography extends PureComponent<Props & DefaultProps> {
  render() {
    const {
      lines,
      style,
      children,
      size,
      color,
      font,
      pd,
      adjustsFontSizeToFit,
    } = this.props;

    return (
      <Text
        {...this.props}
        numberOfLines={lines ? lines : 0}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        style={[getStyles(color, font, size, pd).textStyle, style]}>
        {children}
      </Text>
    );
  }

  static defaultProps = defaultProps;
}

const getStyles = (color: Color, font: Font, size: number, pd: number) =>
  StyleSheet.create({
    textStyle: {
      color: colors[color || 'black'],
      fontFamily: fonts[font || 'REGULAR'],
      fontSize: size || deviceBasedDynamicDimension(14, true, 1),
      padding: pd || 0,
    },
  });

export default Typography;