import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, Alert, TextInput, View, ActivityIndicator } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleLogin = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Vui lòng nhập số điện thoại');
      return;
    }

    if (!/^\d{10,11}$/.test(phoneNumber)) { // Basic validation for phone number
      Alert.alert('Error', 'Số điện thoại không hợp lệ');
      return;
    }

    setIsLoading(true); // Start loading

    // Simulate an API request or other async task
    setTimeout(() => {
      setIsLoading(false); // Stop loading after task completion
      Alert.alert('Đăng nhập thành công', `Chào mừng, ${phoneNumber}!`);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      
      <View>
        <Text style={styles.subtitle}>
        {'\n'}
        {'\n'}
          Nhập số điện thoại
          
        </Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousingPro
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          
        />
        <Text>{'\n'}
        {'\n'}</Text>
      </View>
      <View>
        <Button
          color="red"
          title="Tiếp tục"
          onPress={() => Alert.alert('Cảm ơn')}
        />
        
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
