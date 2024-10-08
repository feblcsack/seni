import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paintings from "./templates/Paintings";
import ArtTimeline from "./components/ArtTimeline";
import CanvasPage from "./pages/CanvasPage";
import Vincent from "./pages/Vincent";
import Leonardo from "./pages/Leonardo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Leonardo />
            <main>
              <Paintings />
              <ArtTimeline />
              <CanvasPage />
            </main>
          </>
        } />
        <Route path="/vincent" element={<Vincent />} />
        {/* Tambahkan rute untuk halaman lain jika perlu */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
