import {useRef, useState} from 'react';

enum Opetators {
  add,
  substract,
  multiply,
  divide,
}
const useCalculator = () => {
  const [mainNumber, setMainNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperator = useRef<Opetators>();
  const buildNumberFunc = (value: string) => {
    //Doble punto
    if (mainNumber.includes('.') && value === '.') return;

    if (mainNumber.startsWith('0') || mainNumber.startsWith('-0')) {
      //Punto decimal
      if (value === '.') {
        setMainNumber(mainNumber.concat(value));
      } else if (value === '0' && mainNumber.includes('.')) {
        //Evaluar si es otro cero y hay punto
        setMainNumber(mainNumber + value);
      } else if (value !== '0' && !mainNumber.includes('.')) {
        //Diferente de cero y no tiene un punto
        setMainNumber(value);
      } else if (value === '0' && !mainNumber.includes('.')) {
        setMainNumber(mainNumber);
      } else {
        setMainNumber(mainNumber + value);
      }
    } else {
      const build = mainNumber.concat(value);
      setMainNumber(build);
    }
  };

  const cleanFunc = () => {
    setMainNumber('0');
    setPrevNumber('0');
  };

  const posOrNegFunc = () => {
    if (mainNumber === '0') {
      return;
    }
    if (mainNumber.includes('-')) {
      setMainNumber(mainNumber.replace('-', ''));
    } else {
      setMainNumber('-'.concat(mainNumber));
    }
  };

  const deleteLastFunc = () => {
    const value = mainNumber.substring(0, mainNumber.length - 1);

    if (value.length === 0 || value === '-') {
      setMainNumber('0');
    } else if (value.endsWith('.')) {
      setMainNumber(value.replace('.', ''));
    } else {
      setMainNumber(value);
    }
  };

  const changeNumberByPrevFunc = () => {
    if (mainNumber.endsWith('.')) {
      setPrevNumber(mainNumber.slice(0, -1));
    } else {
      setPrevNumber(mainNumber);
    }

    setMainNumber('0');
  };

  const divideFunc = () => {
    changeNumberByPrevFunc();
    lastOperator.current = Opetators.divide;
  };

  const multiplyFunc = () => {
    changeNumberByPrevFunc();
    lastOperator.current = Opetators.multiply;
  };

  const addFunc = () => {
    changeNumberByPrevFunc();
    lastOperator.current = Opetators.add;
  };

  const substractFunc = () => {
    changeNumberByPrevFunc();
    lastOperator.current = Opetators.substract;
  };

  const calculateFunc = () => {
    const num1 = Number(mainNumber);
    const num2 = Number(prevNumber);
    switch (lastOperator.current) {
      case Opetators.add:
        setMainNumber(`${num1 + num2}`);
        break;
      case Opetators.divide:
        setMainNumber(`${num2 / num1}`);
        break;
      case Opetators.multiply:
        setMainNumber(`${num1 * num2}`);
        break;
      case Opetators.substract:
        setMainNumber(`${num2 - num1}`);
        break;
      default:
        break;
    }

    setPrevNumber('0');
  };
  return {
    mainNumber,
    prevNumber,
    addFunc,
    substractFunc,
    divideFunc,
    multiplyFunc,
    cleanFunc,
    posOrNegFunc,
    calculateFunc,
    deleteLastFunc,
    buildNumberFunc
  };
};

export default useCalculator;
