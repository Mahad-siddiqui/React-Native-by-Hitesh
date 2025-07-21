// import React, { useState } from 'react';
// import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// export default function App() {
//   const [task, setTask] = useState('');
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     if (task.trim() === '') return;
//     setTodos([...todos, { id: Date.now().toString(), title: task }]);
//     setTask('');
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Todo App</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter task"
//           value={task}
//           onChangeText={setTask}
//         />
//         <TouchableOpacity onPress={addTodo} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={todos}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.todoItem}>
//             <Text>{item.title}</Text>
//             <TouchableOpacity onPress={() => deleteTodo(item.id)}>
//               <Text style={styles.delete}>❌</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60,
//     paddingHorizontal: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   addButton: {
//     backgroundColor: '#007AFF',
//     marginLeft: 10,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   todoItem: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   delete: {
//     color: 'red',
//     fontSize: 18,
//   },
// });

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={isDarkMode ?styles.lightText: styles.darkText  }>App Pro</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',         // center horizontally
    justifyContent: 'center',     // center vertically
    backgroundColor: '#7ed527ff',   // optional for visibility
  },
  lightText: {
    color: '#000000ff', // black text in light mode
    fontSize: 24,
  },
  darkText: {
    color: '#24178cff', // white text in dark mode
    fontSize: 24,
  },
});

export default AppPro;
