// App.js
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens/HomesScreen";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React, { useState } from "react";
import { View, Text, Button, Modal, TextInput } from "react-native";

const YourComponent = () => {
  const [saldo, setSaldo] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [topUpAmount, setTopUpAmount] = useState("");

  const checkSaldo = () => {
    // Fungsi untuk memeriksa saldo, Anda bisa mengambil data dari API di sini
    // Contoh sederhana, set saldo menjadi 1000
    setSaldo(1000);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleTopUp = () => {
    // Fungsi untuk melakukan top up saldo, Anda bisa mengirim data ke API di sini
    // Contoh sederhana, tambahkan jumlah top up ke saldo saat ini
    const amount = parseFloat(topUpAmount);
    setSaldo(saldo + amount);
    setModalVisible(false);
    setTopUpAmount("");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Saldo Rekening: {saldo}</Text>
      <Button title="Cek Saldo" onPress={checkSaldo} />
      <Button title="Top Up" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ backgroundColor: "white", padding: 20 }}>
            <Text>Masukkan Jumlah Top Up</Text>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                marginVertical: 10,
                width: 200,
              }}
              value={topUpAmount}
              onChangeText={(text) => setTopUpAmount(text)}
              keyboardType="numeric"
            />
            <Button title="Top Up" onPress={handleTopUp} />
            <Button title="Batal" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default YourComponent;
