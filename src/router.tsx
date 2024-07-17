import { Route, Routes } from "react-router-dom";
import { News, Login, Dictionary, MyPage, NewsDetail } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<NewsDetail />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
