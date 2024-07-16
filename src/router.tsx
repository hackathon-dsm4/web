import { Route, Routes } from "react-router-dom";
import { News, Login, Dictionary, Mypage } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dictionary />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
