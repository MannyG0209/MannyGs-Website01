import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "@/lib/LanguageContext"
import { Layout } from "@/components/Layout"
import { Home } from "@/pages/Home"
import { Services } from "@/pages/Services"
import { AboutUs } from "@/pages/AboutUs"
import { Contact } from "@/pages/Contact"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
