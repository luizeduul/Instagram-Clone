import styled from 'styled-components/native';

export const Container = styled.View``;

export const InputHeader = styled.View`
  padding: 10px 20px;
  background-color: #fafafa;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageItem = styled.Image`
  width: 113px;
  height: 113px;
  margin-right: 6px;
`;

export const TextInput = styled.TextInput`
  padding-top: 20px;
  height: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  width: 90px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonInput = styled.TouchableOpacity``;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const ExploreItems = styled.View`
  margin-top: 10px;
  flex-direction: row;
  max-width: 100%;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
