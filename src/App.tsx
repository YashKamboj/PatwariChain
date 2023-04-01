import CampaignsPage from "./pages/CampaignsPage";
import Home from "./pages/Home";
import RealHome from "./pages/RealHome"
import Layout from "./components/layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  
  
  return (
    <Layout>
      <div className="flex flex-col items mt-18 p-18">
        
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<RealHome />} />
            <Route path="/Mint" element={<Home />} />
            <Route path="/Campaigns" element={<CampaignsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Layout>
  );
}

export default App;
