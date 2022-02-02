import "bootstrap/dist/css/bootstrap.css"
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import TestPage from "./components/TestPage";
import Footer from "./components/Footer";


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <TestPage />
          <Footer />
    </Router>
  );
}

export default App;