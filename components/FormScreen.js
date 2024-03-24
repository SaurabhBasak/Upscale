import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function FormScreen() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const handleAnswer = (question, choice) => {
    setAnswers({ ...answers, [question]: choice });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Multiple Choice Questions</Text>

      {/* Question 1 */}
      <Text style={[styles.question, styles.boldText]}>
        1. When considering an investment, what is most important to you?
        </Text>

      <TouchableOpacity
        style={[styles.choiceButton, answers.q1 === 'A' && styles.selectedChoice]}
        onPress={() => handleAnswer('q1', 'A')}
      >
        <Text style={styles.choiceText}>A. The potential for high returns, even if there's a risk of losing money.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q1 === 'B' && styles.selectedChoice]}
        onPress={() => handleAnswer('q1', 'B')}
      >
        <Text style={styles.choiceText}>B. The security of my investment, even if the returns are modest.</Text>
      </TouchableOpacity>

      {/* Repeat similar structure for other questions */}
      {/* Question 2 */}
      <Text style={[styles.question, styles.boldText]}>
        2. How would you describe your reaction to market fluctuations?
        </Text>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q2 === 'A' && styles.selectedChoice]}
        onPress={() => handleAnswer('q2', 'A')}
      >
        <Text style={styles.choiceText}>A. The potential for high returns, even if there's a risk of losing money.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q2 === 'B' && styles.selectedChoice]}
        onPress={() => handleAnswer('q2', 'B')}
      >
        <Text style={styles.choiceText}>B. The security of my investment, even if the returns are modest.</Text>
      </TouchableOpacity>
      {/* Question 3 */}
      <Text style={[styles.question, styles.boldText]}>
        2. How would you describe your reaction to market fluctuations?
        </Text>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q3 === 'A' && styles.selectedChoice]}
        onPress={() => handleAnswer('q3', 'A')}
      >
        <Text style={styles.choiceText}>A. The potential for high returns, even if there's a risk of losing money.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q3 === 'B' && styles.selectedChoice]}
        onPress={() => handleAnswer('q3', 'B')}
      >
        <Text style={styles.choiceText}>B. The security of my investment, even if the returns are modest.</Text>
      </TouchableOpacity>
      {/* Question 4 */}
      <Text style={[styles.question, styles.boldText]}>
        2. How would you describe your reaction to market fluctuations?
        </Text>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q4 === 'A' && styles.selectedChoice]}
        onPress={() => handleAnswer('q4', 'A')}
      >
        <Text style={styles.choiceText}>A. The potential for high returns, even if there's a risk of losing money.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q4 === 'B' && styles.selectedChoice]}
        onPress={() => handleAnswer('q4', 'B')}
      >
        <Text style={styles.choiceText}>B. The security of my investment, even if the returns are modest.</Text>
      </TouchableOpacity>
      {/* Question 5 */}
      <Text style={[styles.question, styles.boldText]}>
        2. How would you describe your reaction to market fluctuations?
        </Text>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q5 === 'A' && styles.selectedChoice]}
        onPress={() => handleAnswer('q5', 'A')}
      >
        <Text style={styles.choiceText}>A. The potential for high returns, even if there's a risk of losing money.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.choiceButton, answers.q5 === 'B' && styles.selectedChoice]}
        onPress={() => handleAnswer('q5', 'B')}
      >
        <Text style={styles.choiceText}>B. The security of my investment, even if the returns are modest.</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  choiceButton: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedChoice: {
    backgroundColor: 'lightblue',
  },
  choiceText: {
    fontSize: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },

});
