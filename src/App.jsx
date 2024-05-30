import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgresscontext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <h1>Hello</h1>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
