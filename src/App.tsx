import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/Thankyou";
import ContactModal from "./components/ContactModal";
import BottomTabBar from "./components/BottomTabBar";
import { useState } from "react";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onContactClick={() => setIsContactModalOpen(true)}
                onNavigate={() => window.location.assign("/thankyou")}
              />
            }
          />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
        <BottomTabBar
          onNavigate={(page) =>
            window.location.assign(page === "home" ? "/" : "/thankyou")
          }
        />
      </div>
    </Router>
  );
}

export default App;
