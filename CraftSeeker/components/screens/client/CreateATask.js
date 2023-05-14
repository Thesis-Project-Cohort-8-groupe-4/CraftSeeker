import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CreateATask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskNameChange = (text) => {
    setTaskName(text);
  };

  const handleTaskDescriptionChange = (text) => {
    setTaskDescription(text);
  };

  const handleSubmit = () => {
    // handle form submission logic here
    console.log(`Task Name: ${taskName}, Task Description: ${taskDescription}`);
    // clear form fields
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={handleTaskNameChange}
      />
      <View style={{ marginBottom: 10 }} />
      <TextInput
        style={styles.input1}
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={handleTaskDescriptionChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#036BB9',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth:2,
    padding: 10,
    width: '100%',
  },
  
  input1: {
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth:2,
    padding: 10,
    width: '100%',
    height:100,
  },
  button: {
    backgroundColor: '#036BB9',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CreateATask;
