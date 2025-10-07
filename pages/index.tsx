import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AnimatedFAB, Button, Icon } from "react-native-paper";
import CreateModal from "../components/";

const dadosExemplo: Item[] = [];

interface Item {
  nome: string;
  descricao: string;
}

const Main = () => {
  const isIOS = Platform.OS === "ios";
  const [visible, setVisible] = useState(false);
  const [tarefas, setTarefas] = useState(dadosExemplo);

  // Renderiza cada item da lista de tarefas
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardDesc}>{item.descricao}</Text>
      <Button
        mode="contained"
        style={{ marginTop: 10, backgroundColor: "#9c77bdff" }}
        onPress={() => {
          const index = tarefas.indexOf(item);
          if (index > -1) removeTarefa(index);
        }}
      >
        Feito
      </Button>
    </TouchableOpacity>
  );

  // Adiciona uma nova tarefa à lista
  const addTarefa = (nome: string, descricao: string) => {
    if (nome.trim() === "") return; // Evita adicionar tarefas sem nome
    const tarefaNova = { nome, descricao };
    setTarefas([...tarefas, tarefaNova]);
    setVisible(false);
  };

  // Remove uma tarefa da lista pelo índice
  const removeTarefa = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
      <Text style={styles.subtitle}>
        Bem-vindo ao aplicativo de gerenciamento de tarefas!
      </Text>
      <Text style={styles.sectionTitle}>Suas Tarefas:</Text>

      <FlatList
        data={tarefas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>Nenhuma tarefa criada ainda.</Text>
        }
      />

      <AnimatedFAB
        icon={() => <Icon source="plus" size={24} color="white" />}
        label={"Nova Tarefa"}
        extended={false}
        onPress={() => setVisible(true)}
        visible={true}
        style={[styles.fabStyle, { bottom: isIOS ? 16 : 32 }]}
      />

      <CreateModal
        visible={visible}
        setVisible={setVisible}
        addTarefa={addTarefa}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f0ff", // fundo roxinho bem claro
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4b0082", // roxo escuro
    marginBottom: 4,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#6a0dad", // roxo médio
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#7a2ebd",
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: "#7a2ebd", // destaque roxo lateral
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4b0082",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
  },
  fabStyle: {
    position: "absolute",
    right: 16,
    backgroundColor: "#7a2ebd",
  },
  emptyListText: {
    textAlign: "center",
    color: "#7a2ebd95",
    marginTop: 20,
    fontSize: 16,
  },
});

export default Main;
