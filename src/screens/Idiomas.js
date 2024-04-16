import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

const Idiomas = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { id: "en", name: "English" },
    { id: "pt", name: "Português" },
    // Adicione mais idiomas conforme necessário
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Language:</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{selectedLanguage}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageItem}
                onPress={() => handleLanguageSelect(item)}
              >
                <Text style={{ color: "#fff" }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 30,
  },
  dropdown: {
    width: "80%",
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 3, // Adiciona uma sombra
  },
  dropdownText: {
    fontSize: 16,
    color: "#000", // Cor do texto agora é preto
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
  },
  languageItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
    color: "#fff",
  },
  languageItemText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Idiomas;
