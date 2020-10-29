import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  PageTitle,
  HeaderAcitivityView,
  Acitivity,
  Avatar,
  Description,
  Loading,
} from './styles';

const Notifications = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function LoadPage() {
    setLoading(true);

    const { data } = await api.get('/feedProfile?_expand=owner');

    setLoading(false);

    setActivities(data);
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
      <HeaderAcitivityView>
        <PageTitle>Atividade</PageTitle>
      </HeaderAcitivityView>
      <FlatList
        key="List"
        data={activities}
        keyExtractor={(item) => String(item.id)}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={RefreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Acitivity>
            <Avatar source={{ uri: item.owner.avatar }} />
            <Description>{item.description}</Description>
          </Acitivity>
        )}
      />
    </Container>
  );
};

export default Notifications;
