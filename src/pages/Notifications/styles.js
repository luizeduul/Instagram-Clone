/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View``;

export const HeaderAcitivityView = styled.View`
  padding: 15px;
  flex-direction: row;
  background-color: #FAFAFA;
`;

export const PageTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Acitivity = styled.View`
  padding: 5px 15px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
  margin-top: 18px;
`;

export const Description = styled.Text`
  padding-top: 16px;
  max-width: 240px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
