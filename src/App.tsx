import styled from "styled-components";
import { Footer, Navbar } from "./components";
import { Transactions } from "./pages";

const App = () => {
  return (
    <Component className="App">
      <Navbar />
      <Transactions />
      <Footer />
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;

export default App;
