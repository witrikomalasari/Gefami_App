import {View, Text, StyleSheet, Button} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {InputField, Spacer} from '@components/atoms';
import {
  getDataAsyncstorage,
  removeData,
  setDataAsyncstorage,
} from '@utils/storage';
import {IDataUser} from '@models/dataUser';

interface ILogin {}

const Login: FC<ILogin> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [dataLogin, setDataLogin] = useState<IDataUser>();

  useEffect(() => {
    const checkAuth = async () => {
      const authData = await getDataAsyncstorage('auth');
      console.log('fa', authData);
      if (authData) {
        setIsLogin(true);
        setDataLogin(authData);
      }
    };

    checkAuth();
  }, [isLogin]);

  const handleLogin = async () => {
    try {
      let dataUserInput: IDataUser = {username, password};
      await setDataAsyncstorage('auth', dataUserInput);
      setUsername('');
      setPassword('');
      setIsLogin(prev => !prev);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleLogOut = async () => {
    try {
      await removeData('auth');
      setIsLogin(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      {!isLogin ? (
        <View style={styles.section}>
          <View>
            <InputField
              label="Username"
              placeHolder="Contoh: Jhon Doe"
              placeHolderTextColor="gray"
              type="text"
              value={username}
              onChange={(text: string) => setUsername(text)}
              maxLength={20}
            />
            <Spacer height={10} />
            <InputField
              label="Password"
              type="text"
              value={password}
              onChange={(text: string) => setPassword(text)}
              secureText
            />
          </View>
          <Spacer height={30} />
          <Text style={{color: 'gray'}}>
            <Text style={{color: 'red'}}>* </Text>
            Lengkapi data untuk mengaktifkan tombol Login
          </Text>
          <Spacer height={10} />
          <Button
            title="Login"
            onPress={handleLogin}
            disabled={username.length > 0 && password.length > 0 ? false : true}
          />
        </View>
      ) : (
        <View style={styles.section2}>
          <Spacer height={40} />
          <View style={styles.wrapperTitle}>
            <View style={styles.title}>
              <Text style={{fontSize: 16, color: 'black', letterSpacing: 3}}>
                Selamat Datang
              </Text>
              <Spacer width={5} />
              <Text style={styles.txt}>
                {dataLogin?.username.toUpperCase()}
              </Text>
            </View>
          </View>
          <Spacer height={40} />
          <Button title="Logout" onPress={handleLogOut} />
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  txt: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  section: {
    flex: 1,
    // backgroundColor: 'black',
    paddingTop: 20,
  },
  section2: {
    flex: 1,
    // backgroundColor: 'red',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
});
