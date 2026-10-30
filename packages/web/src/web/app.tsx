import Index from "./pages/index";
import PharmacologySport from "./pages/pharmacology-sport";
import Ordinance344 from "./pages/ordinance-344";

export default function App() {
  if (window.location.pathname.endsWith("/farmacologia-no-esporte.html")) {
    return <PharmacologySport />;
  }
  if (window.location.pathname.endsWith("/portaria-344-98.html")) {
    return <Ordinance344 />;
  }

  return <Index />;
}
