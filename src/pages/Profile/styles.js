import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const ProfileHeader = styled.View`
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonAccount = styled.TouchableWithoutFeedback`
  margin-top: 15px;
  align-items: center;
`;

export const MenuView = styled.View`
  padding-left: 225px;
`;

export const ButtonAccountText = styled.Text`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FollowInfoContainer = styled.View`
  flex-direction: row;
`;

export const ImgProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-top: 10px;
  margin-left: 12px;
  margin-right: 40px;
`;

export const FollowView = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  margin-top: 2px;
`;

export const NumberFollowInfo = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const LabelFollowInfo = styled.Text`
  font-size: 14px;
`;

export const ProfileData = styled.View`
  flex-direction: column;
  padding-top: 14px;
  padding-left: 14px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const BioText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  max-width: 60%;
`;

export const ButtonView = styled.View`
  padding-top: 30px;
  padding-left: 14px;
  align-items: center;
  justify-content: center;
`;

export const ButtonEdit = styled.TouchableOpacity`
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 30px;
  margin-right: 13px;
  border-radius: 6px;
  border: 1px solid #ababab;
`;

export const ChangeButtonProfileView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ChangeButtonProfile = styled.TouchableOpacity`
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50px;
  border: 1px solid #cdcdcd;
`;

export const ButtonEditText = styled.Text`
  font-weight: 800;
  font-size: 14px;
`;

export const ImagesProfileView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  max-width: 100%;
`;

export const ImageItem = styled.Image`
  width: 113px;
  height: 113px;
  margin-right: 6px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
