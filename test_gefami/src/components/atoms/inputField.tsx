import React, {FC, useState} from 'react';
import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import Spacer from './Spacer';

interface IInputFieldProps {
  value?: string;
  placeHolder?: string;
  onChange?: (text: string) => void;
  label?: string;
  type?: 'text' | 'password' | 'number';
  errorText?: string;
  placeHolderTextColor?: string;
  secureText?: boolean;
  maxLength?: number;
}

export const InputField: FC<IInputFieldProps> = ({
  value,
  placeHolder,
  onChange,
  label,
  type = 'text',
  errorText = '',
  placeHolderTextColor,
  secureText,
  maxLength,
}) => {
  const [uiValue, setUiValue] = useState<string>(value ? value : '');

  let containerStyle: ViewStyle = styles.textContainer;

  if (errorText !== '')
    containerStyle = {...containerStyle, borderColor: 'red'};

  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>{label}</Text>
      <Spacer height={8} />
      <TextInput
        keyboardType={type === 'text' ? 'ascii-capable' : 'number-pad'}
        style={containerStyle}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        value={uiValue}
        onChangeText={text => {
          setUiValue(text);
          onChange && onChange(text);
        }}
        secureTextEntry={secureText}
        maxLength={maxLength}
      />
      <Spacer height={5} />
      {errorText ? (
        <Text style={{color: 'red', paddingLeft: 5}}>{errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 0,
    color: 'black',
  },
});

export default InputField;
