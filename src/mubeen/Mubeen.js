import React, {useState, useEffect} from 'react';

import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import { useEffect } from 'react/cjs/react.production.min';

const Mubeen = () => {
  const [email, SetEmail] = useState('');
  const [username, SetUsername] = useState('');
  // const [value,setValue]=useState({
  //   SetEmail:'',
  //   SetPassword:''
  // });
  // const {SetEmail,SetPassword}= value;
  const [password, SetPassword] = useState('');
  const saveData = async()=> {
    let data = { email,username, password};
    // console.warn(data);
    await fetch('http://192.168.1.100:3000/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(resp => {
      // console.warn("resp",resp);;
      resp.json().then(result => {
        console.warn('result', result);
      });
    });
  }
  // useEffect(() => {
  //   // POST request using fetch with async/await
  // });
  // const puttingValues = async () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({title: 'React POST Request Example'}),
  //   };
  //   const response = await fetch('https://reqres.in/api/posts', requestOptions);
  //   const data = await response.json();
  //   setValue({postId: data.id,
  //     postEmail:data.SetEmail,
  //     postPassword:data.SetPassword
  //   });
  //   console.log('data >>>>' ,data)
  //   // SetPassword({postPassword: data.password});
  //   // console.log('email >...',data.email)
  // };

  // console.log('email >>>', email);/
  // console.log('password >>', password)
  return (
    <View>
      <View
        style={{
          height: 50,
          width: '90%',
          marginHorizontal: '5%',
          marginTop: 50,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
        }}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={email => {
            SetEmail(email);
          }}
          placeholderTextColor={'grey'}
          style={{
            height: '100%',
            width: '100%',
            color: 'black',
            fontSize: 16,
            paddingHorizontal: 20,
          }}
        />
      </View>
      <View
        style={{
          height: 50,
          width: '90%',
          marginHorizontal: '5%',
          marginTop: 50,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
        }}>
        <TextInput
          placeholder="Username"
          // keyboardType=""
          value={username}
          onChangeText={username => {
            SetUsername(username);
          }}
          placeholderTextColor={'grey'}
          style={{
            height: '100%',
            width: '100%',
            color: 'black',
            fontSize: 16,
            paddingHorizontal: 20,
          }}
        />
      </View>
      <View
        style={{
          height: 50,
          width: '90%',
          marginHorizontal: '5%',
          marginTop: 50,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
        }}>
        <TextInput
          placeholder="Password"
          keyboardType="decimal-pad"
          placeholderTextColor={'grey'}
          value={password}
          onChangeText={password => {
            SetPassword(password);
          }}
          style={{
            height: '100%',
            width: '100%',
            color: 'black',
            fontSize: 16,
            paddingHorizontal: 20,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          // puttingValues();
          saveData();
          alert('submit');
        }}
        style={{
          height: 50,
          width: '50%',
          marginHorizontal: '25%',
          marginTop: 50,
          // borderWidth: 1,
          backgroundColor: 'pink',
          borderRadius: 10,
          // borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Mubeen;
