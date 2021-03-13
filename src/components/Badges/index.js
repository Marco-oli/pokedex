import React from 'react';

// Styles and Images
import * as S from './styles';
import colors from '../../assets/colors';
import {PokemonType} from '../../assets/Typography';
import {
  grass,
  bug,
  dark,
  dragon,
  eletric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
} from '../../assets/images';

const Badges = ({type}) => {
  switch (type) {
    case 'grass':
      return (
        <S.ContainerBadge background={colors.grass}>
          <S.BadgeImage source={grass} />
          <PokemonType>grass</PokemonType>
        </S.ContainerBadge>
      );
    case 'bug':
      return (
        <S.ContainerBadge background={colors.bug}>
          <S.BadgeImage source={bug} />
          <PokemonType>bug</PokemonType>
        </S.ContainerBadge>
      );
    case 'dark':
      return (
        <S.ContainerBadge background={colors.dark}>
          <S.BadgeImage source={dark} />
          <PokemonType>dark</PokemonType>
        </S.ContainerBadge>
      );
    case 'dragon':
      return (
        <S.ContainerBadge background={colors.dragon}>
          <S.BadgeImage source={dragon} />
          <PokemonType>dragon</PokemonType>
        </S.ContainerBadge>
      );
    case 'eletric':
      return (
        <S.ContainerBadge background={colors.eletric}>
          <S.BadgeImage source={eletric} />
          <PokemonType>eletric</PokemonType>
        </S.ContainerBadge>
      );
    case 'fairy':
      return (
        <S.ContainerBadge background={colors.fairy}>
          <S.BadgeImage source={fairy} />
          <PokemonType>fairy</PokemonType>
        </S.ContainerBadge>
      );
    case 'fighting':
      return (
        <S.ContainerBadge background={colors.fighting}>
          <S.BadgeImage source={fighting} />
          <PokemonType>fighting</PokemonType>
        </S.ContainerBadge>
      );
    case 'fire':
      return (
        <S.ContainerBadge background={colors.fire}>
          <S.BadgeImage source={fire} />
          <PokemonType>fire</PokemonType>
        </S.ContainerBadge>
      );
    case 'flying':
      return (
        <S.ContainerBadge background={colors.flying}>
          <S.BadgeImage source={flying} />
          <PokemonType>flying</PokemonType>
        </S.ContainerBadge>
      );
    case 'ghost':
      return (
        <S.ContainerBadge background={colors.ghost}>
          <S.BadgeImage source={ghost} />
          <PokemonType>ghost</PokemonType>
        </S.ContainerBadge>
      );
    case 'ground':
      return (
        <S.ContainerBadge background={colors.ground}>
          <S.BadgeImage source={ground} />
          <PokemonType>ground</PokemonType>
        </S.ContainerBadge>
      );
    case 'ice':
      return (
        <S.ContainerBadge background={colors.ice}>
          <S.BadgeImage source={ice} />
          <PokemonType>ice</PokemonType>
        </S.ContainerBadge>
      );
    case 'normal':
      return (
        <S.ContainerBadge background={colors.normal}>
          <S.BadgeImage source={normal} />
          <PokemonType>normal</PokemonType>
        </S.ContainerBadge>
      );
    case 'poison':
      return (
        <S.ContainerBadge background={colors.poison}>
          <S.BadgeImage source={poison} />
          <PokemonType>poison</PokemonType>
        </S.ContainerBadge>
      );
    case 'psychic':
      return (
        <S.ContainerBadge background={colors.psychic}>
          <S.BadgeImage source={psychic} />
          <PokemonType>psychic</PokemonType>
        </S.ContainerBadge>
      );
    case 'rock':
      return (
        <S.ContainerBadge background={colors.rock}>
          <S.BadgeImage source={rock} />
          <PokemonType>rock</PokemonType>
        </S.ContainerBadge>
      );
    case 'steel':
      return (
        <S.ContainerBadge background={colors.steel}>
          <S.BadgeImage source={steel} />
          <PokemonType>steel</PokemonType>
        </S.ContainerBadge>
      );
    case 'water':
      return (
        <S.ContainerBadge background={colors.water}>
          <S.BadgeImage source={water} />
          <PokemonType>water</PokemonType>
        </S.ContainerBadge>
      );
    default:
      return null;
  }
};

export default Badges;
