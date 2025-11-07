import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FindYourMatch from "./pages/FindYourMatch";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      {/* The Toaster component provides notifications for the app */}
      <Toaster />
      <Routes>
        {/* Page routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/find-your-match" element={<FindYourMatch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<ProfileUpdate />} />
        
        {/* This is the catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;