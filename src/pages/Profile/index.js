import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  ProfileHeader,
  ProfileInfo,
  ImgProfile,
  FollowInfoContainer,
  FollowView,
  NumberFollowInfo,
  LabelFollowInfo,
  ProfileData,
  Name,
  BioText,
  ButtonAccount,
  MenuView,
  ButtonAccountText,
  ButtonEdit,
  ButtonEditText,
  ButtonView,
  ChangeButtonProfileView,
  ChangeButtonProfile,
  ImagesProfileView,
  ImageItem,
  Loading,
} from './styles';

const Profile = () => {
  const [listImage, setListImage] = useState([]);
  const [owner, setOwner] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function LoadPage() {
    setLoading(true);

    const { data } = await api.get('/feedProfile?_expand=owner');

    setLoading(false);

    setListImage(data);
  }

  useEffect(() => {
    LoadPage();
  }, []);

  async function LoadDataProfile() {
    setLoading(true);

    api.get('/owners/1').then((response) => {
      setOwner(response.data);
    });

    setLoading(false);
  }

  useEffect(() => {
    LoadDataProfile();
  }, []);

  async function RefreshList() {
    setRefreshing(true);
    await LoadPage();
    await LoadDataProfile();
    setRefreshing(false);
  }

  return (
    <Container>
      <ProfileHeader>
        <ButtonAccount>
          <Feather name="plus" size={25} />
        </ButtonAccount>
        <ButtonAccount>
          <ButtonAccountText>{owner.user_name}</ButtonAccountText>
        </ButtonAccount>
        <MenuView>
          <ButtonAccount>
            <Feather name="menu" size={30} />
          </ButtonAccount>
        </MenuView>
      </ProfileHeader>
      <ProfileInfo>
        <ImgProfile
          source={{
            uri: owner.avatar,
          }}
        />
        <FollowInfoContainer>
          <FollowView>
            <NumberFollowInfo>{owner.totalPics}</NumberFollowInfo>
            <LabelFollowInfo>Publicaç...</LabelFollowInfo>
          </FollowView>
          <FollowView>
            <NumberFollowInfo>{owner.followers}</NumberFollowInfo>
            <LabelFollowInfo>Seguidor...</LabelFollowInfo>
          </FollowView>
          <FollowView>
            <NumberFollowInfo>{owner.following}</NumberFollowInfo>
            <LabelFollowInfo>Seguindo</LabelFollowInfo>
          </FollowView>
        </FollowInfoContainer>
      </ProfileInfo>
      <ProfileData>
        <Name>{owner.name}</Name>
        <BioText>{owner.bio}</BioText>
      </ProfileData>
      <ButtonView>
        <ButtonEdit>
          <ButtonEditText>Editar Perfil</ButtonEditText>
        </ButtonEdit>
      </ButtonView>
      <ChangeButtonProfileView>
        <ChangeButtonProfile>
          <Feather name="grid" size={30} />
        </ChangeButtonProfile>
        <ChangeButtonProfile>
          <MaterialIcons name="contacts" size={30} />
        </ChangeButtonProfile>
      </ChangeButtonProfileView>
      <FlatList
        key="List"
        data={listImage}
        keyExtractor={(item) => String(item.id)}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={{
          marginLeft: 3,
        }}
        onRefresh={RefreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <ImagesProfileView>
            <ImageItem source={{ uri: item.image }} />
          </ImagesProfileView>
        )}
      />
    </Container>
  );
};

export default Profile;
