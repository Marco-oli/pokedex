import React, {useState, useEffect, useCallback} from 'react';
import {Image, StyleSheet, FlatList, View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import api from '../../services/api';

// Components
import {Title, Description, Name, PokemonNumber} from '../../assets/Typography';
import Badges from '../../components/Badges';

// Styles and Images
import * as S from './styles';
import colors from '../../assets/colors';
import {
  iconFilter,
  iconGeneration,
  iconSort,
  iconSearch,
  grass,
} from '../../assets/images';
import {types} from '@babel/core';

const Home = () => {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState('');
  const [pokemonsId, setPokemonsId] = useState('');

  useEffect(() => {
    const getPokemons = async () => {
      const {data} = await api.get('pokemon/?limit=60');
      setPokemons(data.results);
    };
    getPokemons();
  }, [pokemons]);

  const renderPokemons = ({item}) => {
    return (
      <S.ContainerPokemon>
        <View>
          <View>
            <PokemonNumber />
          </View>
          <S.ContainerNamePokemon>
            <Name>{item.name}</Name>
          </S.ContainerNamePokemon>

          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}} />
          </View>
        </View>
      </S.ContainerPokemon>
    );
  };

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
      <S.ContainerSearch>
        <Input
          placeholder="What Pokémon are you looking for?"
          inputContainerStyle={styles.searchBar}
          inputStyle={styles.inputText}
          leftIcon={<Image source={iconSearch} />}
          value={search}
          onChangeText={input => {
            setSearch(input);
          }}
        />
      </S.ContainerSearch>
      {/* Lista de Pokemons */}
      <FlatList
        data={pokemons}
        renderItem={renderPokemons}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 60,
    paddingLeft: 10,
    borderRadius: 10,
    borderBottomWidth: 0,
    backgroundColor: colors.background_default_input,
  },
  inputText: {
    fontFamily: 'Sf-regular',
    fontSize: 16,
    color: colors.text_gray,
  },
});

export default Home;
