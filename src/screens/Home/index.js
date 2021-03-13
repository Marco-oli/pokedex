import React from 'react';
import {View, Image} from 'react-native';

// Components
import {Title, Description} from '../../assets/Typography';

// Styles and Images
import * as S from './styles';
import colors from '../../assets/colors';
import {iconFilter, iconGeneration, iconSort} from '../../assets/images';

const Home = () => {
  return (
    <S.Container>
      {/* Icones */}
      <S.ContainerIcons>
        <S.Icons>
          <Image source={iconGeneration} tintColor={colors.text_black} />
        </S.Icons>

        <S.Icons>
          <Image source={iconSort} tintColor={colors.text_black} />
        </S.Icons>

        <S.Icons>
          <Image source={iconFilter} tintColor={colors.text_black} />
        </S.Icons>
      </S.ContainerIcons>

      {/* Título */}
      <S.ContainerTitle>
        <Title>Pokedéx</Title>
      </S.ContainerTitle>

      {/* Subtitulo */}
      <S.ContainerDescription>
        <Description>
          Search for Pokémon by name or using the National Pokédex number.
        </Description>
      </S.ContainerDescription>

      {/* Input de Busca */}
      <
    </S.Container>
  );
};

export default Home;
