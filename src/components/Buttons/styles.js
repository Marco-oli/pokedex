import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 334px;
  height: 60px;
  border-radius: 10px;
  background-color: ${props =>
    props.primary ? colors.button_primary : colors.button_secondary};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Sf-regular';
  line-height: 19px;
  color: ${props => (props.primary ? colors.text_white : colors.text_gray)};
`;
