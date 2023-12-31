
import React from 'react';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Ajouter = ({ navigation }) => {
    const [Cin, setCin] = useState('');
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Classe, setClasse] = useState('');
  const [IsSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const sendData = async () => {
      if (IsSubmit) {
        try {
          const res = await axios.post("/API/ajouter", {
            Cin,
            Nom,
            Prenom,
            Classe,
          });
          
          console.log(res.data);
         
        } catch (error) {
          
          console.error(error);
        }
      }
    };

    sendData();
  }, [IsSubmit]);

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Cin</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Cin"
        value={Cin}
        onChangeText={(text) => setCin(text)}
      />
      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter votre nom"
        value={Nom}
        onChangeText={(text) => setNom(text)}
      />
      <Text style={styles.label}>Prenom</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter prénom"
        value={Prenom}
        onChangeText={(text) => setPrenom(text)}
      />
      <Text style={styles.label}>Classe</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter votre classe"
        value={Classe}
        onChangeText={(text) => setClasse(text)}
      />
      <Button
        title="Envoyer"
        onPress={() => setIsSubmit(true)}
        style={styles.button}
      />
      <Text style={styles.text}>Ajouter des données</Text>
      <Button
        title="Afficher"
        onPress={() => navigation.navigate('Afficher')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
    },
    label: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#333',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 8,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    button: {
      marginTop: 16,
      backgroundColor: '#63aa10',
      color: '#fff',
      borderRadius: 8,
    },
  });
  
  export default Ajouter;
  