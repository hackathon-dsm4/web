import { Route, Routes } from "react-router-dom";
import { News, Login, Dictionary, MyPage } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
