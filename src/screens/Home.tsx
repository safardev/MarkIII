import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  Button,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usersData } from '../data/usersData';
import User from '../components/User';
import COLORS from '../constants/colors';
import { useAppTheme } from '../context/ThemeContext';

const imagUrl = [
  {
    id: 1,
    url: 'https://is.zobj.net/image-server/v1/images?r=SrJElxGv4Mpc2BXwFjEf8i1bru3_XqsxSKeLOPajfz6PizOzgb_cUSCbE3ngW1E3acwuhTpQacs6wCzfficXxkrBp17FpyE_heb3eXRbcUxisvMuUOSS0TTY33nw0FhQPkciDbbDHdEAJiZIiSlPy1FJeDyGcxlPnLODecWUbPo_BYSKeeoy4FiBIAbtFE2TndySFDlQV-_s6-DMZygLnR-vHh-ASGNHfpnq7YLeaYb8E5R-ZoaifWtvn9k',
  },
  {
    id: 2,
    url: 'https://is.zobj.net/image-server/v1/images?r=tHIiAG4lns5NBiEVrpDBBGifsSOjXzIj_zeqvWESQ-5cflDCqF4KhVX_-7O_AJI0RPxgOOdNVL28NcqPw8Y_pUxBV6J5y0_sYFL-hRHmE84r47x9_GgfIhW-32oHNFJ4W6ETJ5ry8EURbjzwrPuVsfnXfsHmwdYRz2hHeycXSZl3k-ZJRYu2HVxtmCzB79FMCLiO53u_Ind4blVFRcyEQJYpiDJLPVIc3FcHuZ8F2LoqKQzlNQVL3dn-y9k',
  },
  {
    id: 3,
    url: 'https://is.zobj.net/image-server/v1/images?r=BgfQ30Cln64X9zaRwjA7Q8KCgiEXWn-ctxnbz243AxAxVRjWYnJ581e-sbxfmhPC073A1EBwtjkGfy59lqp4qwRJNIZ5RKVuQWF3Tr8hZ78GyviM8dhcR0XdtnoE8wIHbkVoSZ_CSkkErXxoOHTL7L-P4odbrVVYfrf3FENd5o_mYf7yGiPVng7PgBJYT6IQ1va9lSsTyDXvwhLi32GYsom2DzU8stdkPHvWrQ',
  },
  {
    id: 4,
    url: 'https://is.zobj.net/image-server/v1/images?r=PRw9llwZNadmKqIDsshINPDVyaVsiqCbsoxyjGvYamLIh39wE4GGZTuGSYrpW0EGWCgHnnrjWkEy1qanP7N8XIgXHWwABLalxxpj_q3sRzxOcFW_VLw5Z9WLzq4__LSAXg3NRFx-Rc7mXpltjyxjIYfpfg117Eh4pyRGGHB19QDHsbov1m434XLcipV-93OeBo2_5fOiDiMzhJSiDwtdXO9UWmZd4dmkcJButw',
  },
  {
    id: 5,
    url: 'https://is.zobj.net/image-server/v1/images?r=a06ut6pWo2bevhVsBLVYRCsBmoila2Hz5vQksLuP68K-gyyfSgzkVjRlI0dUcknLfjZLeO4lp61U0NaXhVqu-iwmn0nYI5criQicXbAgF_OLcRnIPqH8b436UJ1dUtTFtHgBSm_9kViNo8KvFVLpUdiKbyXaDjs7DS3R3nf2v2DQamKNJYBHAKPLKguIiYxKECQ6WKhTQZ1Iw3d68LA1hu4MJju0smDvwfkGwg',
  },
  {
    id: 6,
    url: 'https://is.zobj.net/image-server/v1/images?r=1XQqelET38OyX_CpZ-9D1xaqYeM1SsftCm0X9WE1PGkOL1hWTC6EhAk1Ka5ZAhw84pQoNarZrpsedIWrEt2Donw-q1OESPTECYU3E_q0oE8qIm_RiS7CpPbuh0_6Xa5_2E24DtkxtEGPXt4cezxbt0ddbUIpgaNq77KnRZu9ipP0VyEmXQnJawtfpBUNYSIE--8z_IUG109BoHWnsuYdjhYrjzulbyWFVAsmcN1P1DIpKxRaJietEyb_bVg',
  },
  {
    id: 7,
    url: 'https://is.zobj.net/image-server/v1/images?r=n7Rk0Pw3bqyV85BUIwsQ4rZoPwSaVQls5nGkake3cvn9GGuM_2ef9X3clvSIRtNDGFH3BuWmmQpY9ob0DSeBrYJQsqaXKmBGIe00Kb0t7g1hBcYc8QJxBK4pF8F1T4I88G6N1tlbraY81kBPCiLGVvx6J1DJxo4eqFbysgPVBLB9zjnxgzw31JhTAQNJxb6uYytBhT-kOzBij5exxvmMFSU5scx-301mstu5RQ',
  },
  {
    id: 8,
    url: 'https://is.zobj.net/image-server/v1/images?r=RyoCQ3AaUOCeIa_Kvy5H6K0drqdVcwvq-Qk9EYonvUwVDN2Dep23g_lvgZQtlSwGUCAgXVbSXqFnbbNQrJdX0rrbOk4bM3z5z3gqqiYJiSrxt8rqr9-u_A8lh_U7hbDj97SzzToEuwwGVsK25Svo4k1I8_8awWj-N_sfsvnocvAug3xhSp1Qhlac1CpFGXeIPps47fFCEyJFzpV8avyI-RwKfKWfLGwNiENKVA',
  },
];

const width = Dimensions.get('window').width;

const Home = ({ navigation }: any) => {
  const { theme } = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <FlatList
        data={usersData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <User user={item} />}
        ListHeaderComponent={
          <>
            <View>
              <View style={styles.header}>
                <Text style={styles.headerText}>MARK III</Text>
              </View>
              <Image
                style={styles.ironImage}
                source={require('../../assets/images/iron.png')}
              />
            </View>
            <Button
              title="Go to Settings"
              onPress={() => navigation.navigate('Settings')}
            />
            <Pressable
              style={styles.s1Button}
              android_ripple={{ color: '#5027f3' }}
              onPress={() => navigation.navigate('Screen1')}
            >
              <Text style={styles.s1ButtonText}>Go to Screen 1</Text>
            </Pressable>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              pagingEnabled
            >
              {imagUrl.map(item => (
                <Image
                  key={item.id}
                  source={{ uri: item.url }}
                  resizeMode="stretch"
                  fadeDuration={300}
                  style={styles.rowImage}
                />
              ))}
            </ScrollView>
            <View style={styles.usersHeader}>
              <Text style={[styles.usersHeaderText, { color: theme.text }]}>
                USERS DATA
              </Text>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dfe2e0',
  },
  header: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 2,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  ironImage: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.4,
    resizeMode: 'none',
    alignSelf: 'center',
  },
  s1Button: {
    backgroundColor: '#382a2a',
    margin: 32,
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 16,
  },
  s1ButtonText: {
    color: COLORS.light,
    fontSize: 16,
    fontFamily: 'Bitcount',
  },
  rowImage: {
    width: width * 0.3,
    height: width * 0.3,
    marginRight: 8,
  },
  usersHeader: {
    padding: 8,
    width: Dimensions.get('window').width,
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    alignSelf: 'center',
  },
  usersHeaderText: {
    fontSize: 26,
    fontWeight: '200',
  },
});

export default Home;
