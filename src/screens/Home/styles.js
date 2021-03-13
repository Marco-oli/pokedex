import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const Icons = styled.TouchableOpacity`
  margin-left: 25px;
`;

export const ContainerTitle = styled.View`
  margin-top: 37.5px;
`;

export const ContainerDescription = styled.View`
  margin-top: 10px;
`;

export const ContainerSearch = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 45px;
`;

// Pokemons Card

export const ContainerPokemon = styled.TouchableOpacity`
  width: 100%;
  height: 115px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: ${colors.background_bug};
`;
