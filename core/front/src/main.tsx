import { StrictMode } from "react";
import { createRoot, type Container } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import FrontOffice from "./pages/FrontOffice/FrontOffice.tsx";
import BackOffice from "./pages/BackOffice/BackOffice.tsx";

import "./styles/index.css";
import AdminLogin from "./pages/BackOffice/pages/Login/AdminLogin.tsx";
import Dashboard from "./pages/BackOffice/pages/Dashboard/Dashboard.tsx";
import DashboardHome from "./pages/BackOffice/pages/Dashboard/pages/DashboardHome/DashboardHome.tsx";
import DashboardAirdrop from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/DashboardAirdrop.tsx";
import AirdropCreate from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropCreate/AirdropCreate.tsx";
import AirdropRead from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropRead/AirdropRead.tsx";
import AirdropDelete from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropDelete/AirdropDelete.tsx";
import AirdropList from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropList/AirdropList.tsx";
import AirdropUpdate from "./pages/BackOffice/pages/Dashboard/pages/DashboardAirdrop/pages/AirdropUpdate/AirdropUpdate.tsx";
import { CookiesProvider } from "react-cookie";
import DashboardCategory from "./pages/BackOffice/pages/Dashboard/pages/DashboardCategory/DashboardCategory.tsx";
import CategoryList from "./pages/BackOffice/pages/Dashboard/pages/DashboardCategory/pages/CategoryList/CategoryList.tsx";
import CategoryCreate from "./pages/BackOffice/pages/Dashboard/pages/DashboardCategory/pages/CategoryCreate/CategoryCreate.tsx";
import CategoryRead from "./pages/BackOffice/pages/Dashboard/pages/DashboardCategory/pages/CategoryRead/CategoryRead.tsx";
import CategoryUpdate from "./pages/BackOffice/pages/Dashboard/pages/DashboardCategory/pages/CategoryUpdate/CategoryUpdate.tsx";
import CategoryDelete from "./pages/BackOffice/pages/Dashboard/pages/DashboardCategory/pages/CategoryDelete/CategoryDelete.tsx";
import DashboardSocialMedia from "./pages/BackOffice/pages/Dashboard/pages/DashboardSocialMedia/DashboardSocialMedia.tsx";
import SocialMediaList from "./pages/BackOffice/pages/Dashboard/pages/DashboardSocialMedia/pages/SocialMediaList/SocialMediaList.tsx";
import SocialMediaCreate from "./pages/BackOffice/pages/Dashboard/pages/DashboardSocialMedia/pages/SocialMediaCreate/SocialMediaCreate.tsx";
import SocialMediaRead from "./pages/BackOffice/pages/Dashboard/pages/DashboardSocialMedia/pages/SocialMediaRead/SocialMediaRead.tsx";
import SocialMediaUpdate from "./pages/BackOffice/pages/Dashboard/pages/DashboardSocialMedia/pages/SocialMediaUpdate/SocialMediaUpdate.tsx";
import SocialMediaDelete from "./pages/BackOffice/pages/Dashboard/pages/DashboardSocialMedia/pages/SocialMediaDelete/SocialMediaDelete.tsx";
import DashboardStatus from "./pages/BackOffice/pages/Dashboard/pages/DashboardStatus/DashboardStatus.tsx";
import StatusList from "./pages/BackOffice/pages/Dashboard/pages/DashboardStatus/pages/StatusList/StatusList.tsx";
import StatusCreate from "./pages/BackOffice/pages/Dashboard/pages/DashboardStatus/pages/StatusCreate/StatusCreate.tsx";
import StatusUpdate from "./pages/BackOffice/pages/Dashboard/pages/DashboardStatus/pages/StatusUpdate/StatusUpdate.tsx";
import StatusRead from "./pages/BackOffice/pages/Dashboard/pages/DashboardStatus/pages/StatusRead/StatusRead.tsx";
import StatusDelete from "./pages/BackOffice/pages/Dashboard/pages/DashboardStatus/pages/StatusDelete/StatusDelete.tsx";

import DashboardUser from "./pages/BackOffice/pages/Dashboard/pages/DashboardUser/DashboardUser.tsx";
import UserList from "./pages/BackOffice/pages/Dashboard/pages/DashboardUser/pages/UserList/UserList.tsx";
import UserCreate from "./pages/BackOffice/pages/Dashboard/pages/DashboardUser/pages/UserCreate/UserCreate.tsx";
import UserRead from "./pages/BackOffice/pages/Dashboard/pages/DashboardUser/pages/UserRead/UserRead.tsx";
import UserUpdate from "./pages/BackOffice/pages/Dashboard/pages/DashboardUser/pages/UserUpdate/UserUpdate.tsx";
import UserDelete from "./pages/BackOffice/pages/Dashboard/pages/DashboardUser/pages/UserDelete/UserDelete.tsx";

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<FrontOffice />} />

          <Route path="back-office" element={<BackOffice />}>
            <Route path="login" element={<AdminLogin />} />

            <Route path="dashboard" element={<Dashboard />}>
              <Route path="home" element={<DashboardHome />} />
              <Route path="airdrop" element={<DashboardAirdrop />}>
                <Route path="list" element={<AirdropList />} />
                <Route path="create" element={<AirdropCreate />} />
                <Route path="read/:id" element={<AirdropRead />} />
                <Route path="update/:id" element={<AirdropUpdate />} />
                <Route path="delete/:id" element={<AirdropDelete />} />
              </Route>
              <Route path="category" element={<DashboardCategory />}>
                <Route path="list" element={<CategoryList />} />
                <Route path="create" element={<CategoryCreate />} />
                <Route path="read/:id" element={<CategoryRead />} />
                <Route path="update/:id" element={<CategoryUpdate />} />
                <Route path="delete/:id" element={<CategoryDelete />} />
              </Route>
              <Route path="social-media" element={<DashboardSocialMedia />}>
                <Route path="list" element={<SocialMediaList />} />
                <Route path="create" element={<SocialMediaCreate />} />
                <Route path="read/:id" element={<SocialMediaRead />} />
                <Route path="update/:id" element={<SocialMediaUpdate />} />
                <Route path="delete/:id" element={<SocialMediaDelete />} />
              </Route>
              <Route path="status" element={<DashboardStatus />}>
                <Route path="list" element={<StatusList />} />
                <Route path="create" element={<StatusCreate />} />
                <Route path="read/:id" element={<StatusRead />} />
                <Route path="update/:id" element={<StatusUpdate />} />
                <Route path="delete/:id" element={<StatusDelete />} />
              </Route>
              <Route path="users" element={<DashboardUser />}>
                <Route path="list" element={<UserList />} />
                <Route path="create" element={<UserCreate />} />
                <Route path="read/:id" element={<UserRead />} />
                <Route path="update/:id" element={<UserUpdate />} />
                <Route path="delete/:id" element={<UserDelete />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>
);
