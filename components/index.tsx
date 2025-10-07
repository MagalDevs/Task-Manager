import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dialog, Portal, TextInput, Button } from "react-native-paper";

interface CreateModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  addTarefa: (nome: string, descricao: string) => void;
}

const CreateModal = ({ visible, setVisible, addTarefa }: CreateModalProps) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <Portal>
      <Dialog
        style={styles.dialog}
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        <Dialog.Title style={styles.dialogTitle}>
          Criar Nova Tarefa
        </Dialog.Title>
        <Dialog.Content>
          <TextInput
            value={nome}
            onChangeText={(text) => setNome(text)}
            label="Nome da Tarefa"
            style={{
              marginBottom: 10,
              color: "#7a2ebd",
              backgroundColor: "#ddd3f1ff",
            }}
          />
          <TextInput
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            label="Descrição da Tarefa (opcional)"
            style={{
              marginBottom: 20,
              color: "#7a2ebd",
              backgroundColor: "#ddd3f1ff",
            }}
            multiline
            numberOfLines={3}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>Cancelar</Button>
          <Button
            onPress={() => {
              addTarefa(nome, descricao);
              setNome("");
              setDescricao("");
              setVisible(false);
            }}
          >
            Criar
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialogTitle: {
    color: "#7a2ebd",
  },
  dialog: {
    borderColor: "#7a2ebd",
    borderWidth: 1,
    backgroundColor: "#f5f0ff",
  },
});

export default CreateModal;
