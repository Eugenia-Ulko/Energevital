import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { Appointment, SectionTitle } from './components';


const DATA = [
  {
    title: "14 de noviembre",
    data: [
      {
      time: '15:40',
      active: true,
      diagnosis: 'Dolor del culo',
      user: {
        fullname: 'Angela Martinez',
        avatar: 'https://sun6-23.userapi.com/s/v1/if1/5WKkHv1KXnc8K2HikPNB-v-gmt3CTZ9u9VCmYfpjNtGy7QBGq-S69fUw6TLuPHwZ8PFrzZmd.jpg?size=100x100&quality=96&crop=0,41,719,719&ava=1',

      }
    },
    {
      time: '16:30',
      diagnosis: 'Problemas con autoestima',
      user: {
        fullname: 'John Malkovich',
        avatar: 'https://sun6-20.userapi.com/s/v1/ig2/dTZm_fwllgdV4V8M3eW0FQ7F7PJSAcIDjPJ240Ky2LZTXyr1I1vbUUv3BOZsxdOCuEtSk1OWNrUukCIlKzFpF_f0.jpg?size=100x100&quality=96&crop=0,60,1512,1512&ava=1',

      }
    },
    {
      time: '15:40',
      diagnosis: 'Dolor del culo',
      user: {
        fullname: 'Angela Martinez',
        avatar: 'https://sun6-23.userapi.com/s/v1/if1/5WKkHv1KXnc8K2HikPNB-v-gmt3CTZ9u9VCmYfpjNtGy7QBGq-S69fUw6TLuPHwZ8PFrzZmd.jpg?size=100x100&quality=96&crop=0,41,719,719&ava=1',

      }
    },
    {
      time: '16:30',
      diagnosis: 'Problemas con autoestima',
      user: {
        fullname: 'John Malkovich',
        avatar: 'https://sun6-20.userapi.com/s/v1/ig2/dTZm_fwllgdV4V8M3eW0FQ7F7PJSAcIDjPJ240Ky2LZTXyr1I1vbUUv3BOZsxdOCuEtSk1OWNrUukCIlKzFpF_f0.jpg?size=100x100&quality=96&crop=0,60,1512,1512&ava=1',

      }
    },
    ]
  },
  {
    title: "15 de noviembre",
    data: [
      {
      time: '12:40',
      diagnosis: 'Dolor de hombro',
      user: {
        fullname: 'Lina Hernandez',
        avatar: 'https://sun6-22.userapi.com/s/v1/ig2/thidMeEse39qpARRVPlVyyw9BfgVR3a04OoA4SLCsIOWIe1vdUdd8ksrhCB1hv9FmqPo1nWg6C-UP6Qyen6uBrj4.jpg?size=100x100&quality=96&crop=809,612,807,807&ava=1',

      }
    },
    {
      time: '15:30',
      diagnosis: 'Insomnia',
      user: {
        fullname: 'George Bush',
        avatar: 'https://sun6-23.userapi.com/s/v1/if1/sMSJn-0Gni7Usib1KxHbijdRi0jvhtrCCtTqJ67bkCcJ49nLFlFeHOy6QGuKaXQtPNAC29bW.jpg?size=100x100&quality=96&crop=0,0,700,700&ava=1',

      }
    },
    {
      time: '12:40',
      diagnosis: 'Dolor de hombro',
      user: {
        fullname: 'Lina Hernandez',
        avatar: 'https://sun6-22.userapi.com/s/v1/ig2/thidMeEse39qpARRVPlVyyw9BfgVR3a04OoA4SLCsIOWIe1vdUdd8ksrhCB1hv9FmqPo1nWg6C-UP6Qyen6uBrj4.jpg?size=100x100&quality=96&crop=809,612,807,807&ava=1',

      }
    },
    {
      time: '15:30',
      diagnosis: 'Insomnia',
      user: {
        fullname: 'George Bush',
        avatar: 'https://sun6-23.userapi.com/s/v1/if1/sMSJn-0Gni7Usib1KxHbijdRi0jvhtrCCtTqJ67bkCcJ49nLFlFeHOy6QGuKaXQtPNAC29bW.jpg?size=100x100&quality=96&crop=0,0,700,700&ava=1',

      }
    },
    {
      time: '12:40',
      diagnosis: 'Dolor de hombro',
      user: {
        fullname: 'Lina Hernandez',
        avatar: 'https://sun6-22.userapi.com/s/v1/ig2/thidMeEse39qpARRVPlVyyw9BfgVR3a04OoA4SLCsIOWIe1vdUdd8ksrhCB1hv9FmqPo1nWg6C-UP6Qyen6uBrj4.jpg?size=100x100&quality=96&crop=809,612,807,807&ava=1',

      }
    },
    {
      time: '15:30',
      diagnosis: 'Insomnia',
      user: {
        fullname: 'George Bush',
        avatar: 'https://sun6-23.userapi.com/s/v1/if1/sMSJn-0Gni7Usib1KxHbijdRi0jvhtrCCtTqJ67bkCcJ49nLFlFeHOy6QGuKaXQtPNAC29bW.jpg?size=100x100&quality=96&crop=0,0,700,700&ava=1',

      }
    },
    ]
  },
];
export default function App() {
  return (
    <Container> 
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <Appointment {...item} /> }
      renderSectionHeader={({ section: { title } }) => (
        <SectionTitle>{title}</SectionTitle>
      )}
    />
    <PlusButton>
    <Ionicons name="ios-add" size={36} color="white" />
    </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2A86FF;
  position: absolute;
  right: 22px;
  bottom: 22px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
