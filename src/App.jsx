import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { products as initialProducts } from "./mocks/products.json";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
