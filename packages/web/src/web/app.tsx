import Index from "./pages/index";
import PharmacologySport from "./pages/farmacologia-no-esporte";
import Ordinance344 from "./pages/portaria-344";
import MentorshipSantaLuziaLagoaSanta from "./pages/mentoria-slls";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/farmacologia-no-esporte") {
    return <PharmacologySport />;
  }
  if (path === "/portaria-344") {
    return <Ordinance344 />;
  }
  if (path === "/mentoria-slls") {
    return <MentorshipSantaLuziaLagoaSanta />;
  }

  return <Index />;
}
