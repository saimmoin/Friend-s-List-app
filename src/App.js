import "./App.css";
import { Header } from "./components/Header";
import { TransactionList } from "./components/FriendsList";
import { AddFriends } from "./components/AddFriends";
import { GlobalProvider } from "./context/GlobalState";
import { Footer } from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <AddFriends />
        <TransactionList />
      </div>
      <Footer></Footer>
    </GlobalProvider>
  );
}

export default App;
