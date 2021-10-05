import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
  color?: string;
  backgroundColor?: string;
  width?: boolean;
  action: (value: string) => void;
}

const ButtonCalc = ({
  title,
  backgroundColor = '#CDCDCD',
  color = 'black',
  width = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => action(title)}>
      <View
        style={{
          ...styles.button,
          backgroundColor,
          width: width ? 160 : 80,
        }}>
        <Text style={{...styles.btnTex, color}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
