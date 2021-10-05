import React from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const {
    prevNumber,
    mainNumber,
    cleanFunc,
    posOrNegFunc,
    deleteLastFunc,
    divideFunc,
    addFunc,
    substractFunc,
    multiplyFunc,
    buildNumberFunc,
    calculateFunc,
  } = useCalculator();

  return (
    <View style={styles.containerCl}>
      <Text style={styles.smallResult}>{prevNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {mainNumber}
      </Text>
      <View style={styles.row}>
        <ButtonCalc title="C" action={cleanFunc} />
        <ButtonCalc action={posOrNegFunc} title="±" />
        <ButtonCalc action={deleteLastFunc} title="del" />
        <ButtonCalc
          action={divideFunc}
          title="÷"
          backgroundColor="#FF8000"
          color="white"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          title="7"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="8"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="9"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="×"
          action={multiplyFunc}
          backgroundColor="#FF8000"
          color="white"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          title="4"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="5"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="6"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="+"
          action={addFunc}
          backgroundColor="#FF8000"
          color="white"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          title="1"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="2"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="3"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="-"
          action={substractFunc}
          backgroundColor="#FF8000"
          color="white"
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          title="0"
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
          width
        />
        <ButtonCalc
          title="."
          action={buildNumberFunc}
          backgroundColor="#2D2D2D"
          color="white"
        />
        <ButtonCalc
          title="="
          action={calculateFunc}
          backgroundColor="#FF8000"
          color="white"
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
