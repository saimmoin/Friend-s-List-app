import "./App.css";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { Footer } from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <AddTransaction />
        <TransactionList />
      </div>
      <Footer></Footer>
    </GlobalProvider>
  );
}

export default App;