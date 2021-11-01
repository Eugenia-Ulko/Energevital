import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const Group = ({ user, diagnosis, active, time }) => {
  return (     
        <GroupItem>
          <Avatar source={{
            uri: user.avatar
            }} 
            />
            <View style={{ flex: 1 }}>
            <FullName>{user.fullname}</FullName>
            <GreyText>
             {diagnosis}
            </GreyText>
            </View>
            <GroupDate active={active}>
              {time}
            </GroupDate>
        </GroupItem>
  )
}

Group.defaultProps = {
  groupTitle: 'Untitled',
  items: []
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

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`;


export default Group;