import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "../MainLayout";
import Textp from "../pages/Textprompt";

function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Textp />} />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
export default Router;
