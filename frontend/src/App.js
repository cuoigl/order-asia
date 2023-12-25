import { Container } from "react-bootstrap";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Order Asia</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
