import {StyleSheet} from 'react-native';

/**
 * Global styles
 */
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  smallResult: {
    opacity: 0.6,
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
  },
  containerCl: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 3
  },
  btnTex: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10
  },
});
