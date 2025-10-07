import { PaperProvider } from "react-native-paper";
import Main from "./pages";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
