import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

const VisionMissionScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/311073425_8128182110556102_8692102383384895852_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zw9JYRxTaDwAX_1P_RL&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfDTDEcvn7XR1FAD56YrYKrpo5cdBQvmH55651X7B-qw4w&oe=655CC74E' }}
        style={styles.headerImage}
      />

      <View style={styles.boxContainer}>
        <Text style={styles.heading}>OUR VISION</Text>
        <Text style={[styles.text, styles.justifyText]}>
          In 2030, the Manuel S. Enverga University Foundation is a globally competitive university
          with high concentrations of talent, excellent teaching environment, rigorous program quality,
          sufficient resources, and a culture of collaboration.
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.heading}>OUR MISSION</Text>
        <Text style={[styles.text, styles.justifyText]}>
          The University is a private non-stock non-profit non-sectarian educational foundation with
          a three-fold function - instruction, research, and community service - offering responsive
          and alternative programs supportive of national development and standards of global excellence.
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.heading}>OUR GOAL</Text>
        <Text style={[styles.text, styles.justifyText]}>
          MSEUF shall produce graduates who have research-based knowledge, leadership and management
          skills, and professionalism.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
  },
  headerImage: {
    width: '100%', 
    height: 200, 
    resizeMode: 'cover',
    marginBottom: 30,
    borderRadius: 3,
   
  },
  boxContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'maroon',
  },
  text: {
    fontSize: 16,
  },
  justifyText: {
    textAlign: 'justify',
  },
});

export default VisionMissionScreen;
