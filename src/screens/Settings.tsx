import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
  Switch,
  Modal,
  Image,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../constants/colors';
import { useAppTheme } from '../context/ThemeContext';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Settings = () => {
  const [count, setCount] = useState(0);
  const [isEnable, setIsEnable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { isDarkMode, theme, setThemeMode } = useAppTheme();


    const image = {
    uri: 'https://images.pexels.com/photos/37075047/pexels-photo-37075047.jpeg?_gl=1*46mslv*_ga*MTY3MzQxMzc3NC4xNzM2OTYzNzg4*_ga_8JE65Q40S6*czE3NzYyNDQ1NzckbzQkZzEkdDE3NzYyNDUxMDMkajYwJGwwJGgw',
  };

  const toggleSwitch = () => setIsEnable(prev => !prev);
  const toggleThemeSwitch = async (value: boolean) => {
    await setThemeMode(value ? 'dark' : 'light');
  };



  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };
  const handleDecrese = () => {
    setCount(prev => prev - 1);
  };

  const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};


  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bImage}>
        <View
          style={[
            styles.themeCard,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <View>
            <Text style={[styles.themeTitle, { color: theme.text }]}>
              Dark Mode
            </Text>
            <Text style={[styles.themeSubtitle, { color: theme.secondaryText }]}>
              Your theme preference is saved with AsyncStorage.
            </Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleThemeSwitch}
            thumbColor={theme.switchThumb}
            trackColor={{
              false: theme.switchTrackFalse,
              true: theme.switchTrackTrue,
            }}
          />
        </View>
        <Text style={styles.countText}>Count: {count}</Text>
        <Switch value={isEnable} onValueChange={toggleSwitch} />
        {isEnable && (
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.countButton, { backgroundColor: '#4300de' }]}
              onPress={handleDecrese}
              android_ripple={{ color: '#ff0000' }}
            >
              <Text style={styles.cButtonText}>Decrease</Text>
            </Pressable>
            <Pressable
              style={[styles.countButton, { backgroundColor: 'green' }]}
              onPress={handleIncrease}
              android_ripple={{ color: '#0aff3b' }}
              disabled={count > 10 ? true : false}
            >
              <Text style={styles.cButtonText}>Increase</Text>
            </Pressable>
          </View>
        )}
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{height:300}}>
            <Image source={image} resizeMode="cover" style={styles.bImage}/>
          </View>
        </Modal>

        <Button onPress={() => setModalVisible(!modalVisible)} title="View Full Image" />
      </ImageBackground>
      <Text style={{ color: theme.text }}>Hello</Text>
      <Text style={{ color: theme.text }}>Hello</Text>
      <Text style={{ color: theme.text }}>Hello</Text>
      <Text style={{ color: theme.text }}>Hello</Text>
      <Text style={{ color: theme.text }}>Hello</Text>

      <Button title="request permissions" onPress={requestCameraPermission} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  themeCard: {
    marginTop: 24,
    width: screenWidth * 0.88,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  themeSubtitle: {
    marginTop: 4,
    fontSize: 13,
  },
  countText: {
    marginTop: 16,
    fontSize: 24,
    fontFamily: 'Bitcount',
    color: COLORS.light,
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 20,
    flexDirection: 'row',
    width: screenWidth * 0.8,
    justifyContent: 'space-evenly',
  },
  countButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cButtonText: {
    color: COLORS.light,
  },
  bImage: {
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
  },
});

export default Settings;
