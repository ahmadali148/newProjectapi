import React, {useState, useEffect} from 'react';

import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Ahmad = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
//   console.log(email);
  const saveData =  () => {
    try {
      let data = {email, password};
      fetch('http://192.168.1.100:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // console.log()
      }).then(resp => {
        console.warn("resp",resp);;
        resp.json().then(result => {
          console.warn('result', result);
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
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
          placeholder="Password"
        //   keyboardType="decimal-pad"
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

export default Ahmad;
