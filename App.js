import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Group from './components/Group';

export default function App() {
  return (
    <Container>
      <Group 
      title='14 de noviembre' 
      items={[
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
      ]}
      />
       <Group 
      title='15 de noviembre' 
      items={[
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
      ]}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
