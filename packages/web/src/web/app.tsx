import Index from "./pages/index";
import PharmacologySport from "./pages/pharmacology-sport";
import Ordinance344 from "./pages/ordinance-344";
import MentorshipSantaLuziaLagoaSanta from "./pages/mentorship-santa-luzia-lagoa-santa";

export default function App() {
  if (window.location.pathname.endsWith("/farmacologia-no-esporte.html")) {
    return <PharmacologySport />;
  }
  if (window.location.pathname.endsWith("/portaria-344-98.html")) {
    return <Ordinance344 />;
  }
  if (window.location.pathname.endsWith("/mentoria-santa-luzia-lagoa-santa.html")) {
    return <MentorshipSantaLuziaLagoaSanta />;
  }

  return <Index />;
}
