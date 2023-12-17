import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Enverga_University_Gym_with_monument_%28Ibabang_Dupay%2C_Lucena%2C_Quezon%3B_10-09-2022%29.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://www.mseuf.edu.ph/assets/article_files/source/images/MSEUF_LOGO_HD.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Manuel S. Enverga University Foundation</Text>
        

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Vision, Mission and Goal')}
        >
          <Text style={styles.buttonText}>MSEUF Vision, Mission and Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('The MSEUF Story')}>
          <Text style={styles.buttonText}>The MSEUF Story</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)', 
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 145, 
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
    marginBottom: 20, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'maroon',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'maroon',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  
});

export default HomeScreen;
