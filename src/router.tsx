import { Route, Routes } from "react-router-dom";
import { News, Login, Dictionary, MyPage, NewsDetail, Feed, Redirect } from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/dictionary" element={<Dictionary />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/google/callback" element={<Redirect />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
