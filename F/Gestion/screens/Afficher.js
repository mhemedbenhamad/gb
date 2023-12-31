
import React from 'react';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const Afficher = ({ navigation }) => {
    const [etudiants, setEtudiants] = useState([]);
  const [IsSubmit, setIsSubmit] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get("/API/afficher");
      setEtudiants(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (IsSubmit) {
      fetchData();
      setIsSubmit(false); // Réinitialiser IsSubmit pour la prochaine soumission
    }
  }, [IsSubmit]);

  const renderItem = ({ item }) => (
    <View style={styles.resultItem}>
      <Text>{`Cin: ${item.Cin}`}</Text>
      <Text>{`Nom: ${item.Nom}`}</Text>
      <Text>{`Prenom: ${item.Prenom}`}</Text>
      <Text>{`Classe: ${item.Classe}`}</Text>
    </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>affichage</Text>
      <Button
        title="Ajouter"
        onPress={() => navigation.navigate('Ajouter')}
      />
      <Button
        title="Charger les étudiants"
        onPress={() => setIsSubmit(true)}
        style={styles.button}
      />
      <FlatList
        data={etudiants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
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
    button: {
      marginTop: 16,
      backgroundColor: '#63aa10',
      color: '#fff',
      borderRadius: 8,
    },
    resultItem: {
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 8,
      borderRadius: 8,
    },
  });

export default Afficher;
