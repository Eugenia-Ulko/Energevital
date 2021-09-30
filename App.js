import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>
          11 de octubre
        </GroupTitle>

        <GroupItem>
          <Avatar source={{
            uri: 'https://sun6-22.userapi.com/s/v1/ig2/N4irsm7RrBnVrMwSMAqajg6OEGNeFYW9Z_EBxVkEPsTjlMLyDTEQKJGfwq9XiQthvxoMEhEKo1VZxOjyjcFQYuLe.jpg?size=100x100&quality=96&crop=213,73,696,696&ava=1'
            }} 
            />
            <View style={{ flex: 1 }}>
            <FullName>Alejandra Garcia</FullName>
            <GreyText>
              Insomnia
            </GreyText>
            </View>
            <GroupDate active>
              12:30
            </GroupDate>
        </GroupItem>

        <GroupItem>
          <Avatar source={{
            uri: 'https://sun6-20.userapi.com/s/v1/ig2/JjRpC5w0wcSYlsgU8BHY8fn5hfxHu5CjWpuuxscI1F0Apr3c6Kk3G4A9iroRP_F7K-PLyr5Mm0ZWjsVW2TaWONKd.jpg?size=100x100&quality=96&crop=121,98,1163,1163&ava=1'
            }} 
            />
            <View style={{ flex: 1 }}>
            <FullName>Mireia López</FullName>
            <GreyText>
              Dolor de cabeza
            </GreyText>
            </View>
            <GroupDate>
              15:30
            </GroupDate>
        </GroupItem>

      </Group>
    </Container>
  );
}

const GroupDate = styled.Text`
  background: ${props => (props.active ? '#2A86FF' : '#E9F5FF')};
  border-radius: 18px;
  font-weight: 700;
  color: ${props => (props.active ? '#fff' : '#4294ff')};
  font-size: 15px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;

`;

const GreyText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;
const FullName = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  
`;

const GroupTitle = styled.Text`
  font-weight: 900;
  font-size: 25px;
  color: #000000;
`;

const Group = styled.View`
  padding: 0 20px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
