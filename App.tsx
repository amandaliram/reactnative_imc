import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState<string | null>(null);

  const calcularIMC = () => {
    const alturaNum = parseFloat(altura);
    const pesoNum = parseFloat(peso);

    if (isNaN(alturaNum) || isNaN(pesoNum) || alturaNum === 0) {
      setImc(null);
      return;
    }

    const alturaMetros = alturaNum / 100; // cm → m
    const imcCalculado = pesoNum / (alturaMetros * alturaMetros);

    setImc(imcCalculado.toFixed(2)); // duas casas decimais
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          placeholder="Peso (kg)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          placeholder="Altura (cm)"
          keyboardType="numeric"
        />

        <Button title="Calcular IMC" onPress={calcularIMC} />
      </View>

      {imc && (
        <View style={styles.card}>
          <Text style={styles.cardText}>Peso: {peso} kg</Text>
          <Text style={styles.cardText}>Altura: {altura} cm</Text>
          <Text style={styles.cardText}>IMC: {imc}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // 👈 dá um respiro nas bordas
    backgroundColor: '#f9f9f9', // 👈 leve contraste
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400, // 👈 limita largura em telas grandes
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000', // 👇 efeito sutil de sombra
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3, // Android
  },
  cardText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});

export default App;