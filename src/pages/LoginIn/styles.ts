import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/animateColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.FORM,
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
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.FORM,
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: COLORS.SUB_TITLE,
  },
});
