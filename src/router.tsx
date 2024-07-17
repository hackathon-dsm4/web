import { Route, Routes } from "react-router-dom";
import { News, Feed, Login, Dictionary, MyPage } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
