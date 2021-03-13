import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, FlatList, View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import api from '../../services/api';

// Components
import {Title, Description, PokemonType} from '../../assets/Typography';
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

const Home = () => {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      const {data} = await api.get();
      setPokemons(data.results);
    };
    getPokemons();
  }, []);

  const renderPokemons = ({item}) => {
    return (
      <S.ContainerPokemon>
        <Text>#001</Text>
        <Text>{item.name}</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Badges type="grass" />
            <PokemonType>Grass</PokemonType>
          </View>
        </View>
      </S.ContainerPokemon>
    );
  };

  return (
    <S.Container>
      {/* Icones */}
      {console.log(pokemons)}
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
