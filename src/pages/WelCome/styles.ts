import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/animateColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: COLORS.FORM,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.SUB_TITLE,
  },
  button: {
    width: '60%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: 50,
    paddingVertical: 8,
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.FORM,
  },
});