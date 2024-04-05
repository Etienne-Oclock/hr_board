import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useBoundStore } from "../store/store";


const HomeScreen = ({ navigation }) => {
  const {setUserId, setUserName, setUser,  user} = useBoundStore();
  
  const fakeUser = [
    {
      name: "Etienne",
      id: 1,
    },
    {
      name: "Moumou",
      id: 2,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const {textContent, value} = event.target.querySelector('select').selectedOptions[0];
    setUser(textContent, value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      
      <form method="post" onSubmit={handleSubmit}>
        
        <label>
          T'es qui :
          <select name="selectedUser">
            {fakeUser.map((user) => (
              <option key={user.id} value={user.id}  data-name={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Suivant</button>
      </form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  text: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default HomeScreen;
