import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, View, FlatList } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  ExploreItems,
  InputHeader,
  InputContainer,
  Button,
  ButtonInput,
  TextButton,
  ImageItem,
  Loading,
} from './styles';

const buttonsList = [
  {
    id: 1,
    label: 'IGTV',
  },
  {
    id: 2,
    label: 'Loja',
  },
  {
    id: 3,
    label: 'Viagem',
  },
  {
    id: 4,
    label: 'Arquitetura',
  },
  {
    id: 5,
    label: 'Decoração',
  },
  {
    id: 6,
    label: 'Arte',
  },
  {
    id: 7,
    label: 'Comida',
  },
  {
    id: 8,
    label: 'Estilo',
  },
];

const Explore = () => {
  const [explore, setExplore] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function LoadPage() {
    setLoading(true);

    const { data } = await api.get('/feed');

    setLoading(false);

    setExplore(data);
  }
  useEffect(() => {
    LoadPage();
  }, []);

  async function RefreshList() {
    setRefreshing(true);
    await LoadPage();
    setRefreshing(false);
  }

  return (
    <Container>
      <InputHeader>
        <InputContainer>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ButtonInput>
              <Feather name="search" size={25} />
            </ButtonInput>
            <TextInput
              placeholder="Pesquisar"
              style={{ fontSize: 16, fontWeight: '600', marginLeft: 12 }}
            />
          </View>
          <ButtonInput>
            <Octicons name="screen-full" size={25} />
          </ButtonInput>
        </InputContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {buttonsList.map((button) => (
            <Button key={button.id}>
              <TextButton>{button.label}</TextButton>
            </Button>
          ))}
        </ScrollView>
      </InputHeader>
      <FlatList
        key="List"
        data={explore}
        keyExtractor={(item) => String(item.id)}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        scrollToEnd
        numColumns={3}
        columnWrapperStyle={{
          marginLeft: 3,
        }}
        onRefresh={RefreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <ExploreItems>
            <ImageItem source={{ uri: item.image }} />
          </ExploreItems>
        )}
      />
    </Container>
  );
};

export default Explore;
