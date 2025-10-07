import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Main from "./pages";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
