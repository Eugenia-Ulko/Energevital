import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Group from './components/Group';

export default function App() {
  return (
    <Container>
      <Group title='14 de octubre' 
      items={[
        {
        time: '15:40',
        diagnosis: 'Dolor del culo',
        user: {
          fullname: 'Angela Martinez',
          avatar: 'https://sun6-23.userapi.com/s/v1/if1/5WKkHv1KXnc8K2HikPNB-v-gmt3CTZ9u9VCmYfpjNtGy7QBGq-S69fUw6TLuPHwZ8PFrzZmd.jpg?size=100x100&quality=96&crop=0,41,719,719&ava=1',

        }
      }
      ]}></Group>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
