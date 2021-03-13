import styled from 'styled-components/native';
import colors from './colors';

export const Title = styled.Text`
  font-family: 'Sf-bold';
  font-size: 32px;
`;

export const Name = styled(Title)`
  font-size: 26px;
  color: ${colors.text_white};
  text-transform: capitalize;
`;

export const FilterTitle = styled(Title)`
  font-size: 16px;
`;

export const Description = styled.Text`
  font-family: 'Sf-regular';
  font-size: 16px;
  color: ${colors.text_gray};
`;

export const PokemonNumber = styled(Title)`
  font-size: 12px;
`;

export const PokemonType = styled.Text`
  font-family: 'Sf-medium';
  font-size: 12px;
  color: ${colors.text_white};
  text-transform: capitalize;
`;
