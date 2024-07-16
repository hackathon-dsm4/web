import { Route, Routes } from "react-router-dom";
import { News, Login } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
