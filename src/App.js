import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleTab from "./screens/StyleTab";
import TrustIconIconito from "./screens/TrustIconIconito";
import { AppProvider } from "@shopify/polaris";
// import "@shopify/polaris/build/esm/styles.css";

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          {/* <StyleTab /> */}
          <Routes>
            <Route path="/" element={<StyleTab />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;
