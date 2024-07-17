import Router from "@/router";
import { NavigationBar } from "@/components";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes("login") && !location.pathname.includes("callback") && <NavigationBar />}
      <Router />
    </>
  );
}

export default App;
