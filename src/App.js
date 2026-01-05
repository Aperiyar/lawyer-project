import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Info from "./pages/Info";
import Lawyer from "./pages/Lawyer";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Helmet>
            <title>
              Zhagaram Law Firm | Advocate in Coimbatore – Civil, Criminal &
              Property Law
            </title>
            <meta
              name="description"
              content="Zhagaram Law Firm is a legal practice based in Coimbatore providing general information on civil law, criminal defence, consumer matters, property disputes, trusts, estates and legal documentation."
            />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<Info />} />
            <Route path="/lawyer" element={<Lawyer />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
