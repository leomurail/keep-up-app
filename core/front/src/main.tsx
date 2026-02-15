import { StrictMode } from "react";
import { createRoot, type Container } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { CookiesProvider } from "react-cookie";
import { Web3Provider } from "./components/Web3Provider";

import "./styles/index.css";
import {
  FrontOffice,
  BackOffice,
  AdminLogin,
  Dashboard,
  DashboardHome,
  DashboardAirdrop,
  AirdropCreate,
  AirdropRead,
  AirdropDelete,
  AirdropList,
  AirdropUpdate,
  DashboardCategory,
  CategoryList,
  CategoryCreate,
  CategoryRead,
  CategoryUpdate,
  CategoryDelete,
  DashboardSocialMedia,
  SocialMediaList,
  SocialMediaCreate,
  SocialMediaRead,
  SocialMediaUpdate,
  SocialMediaDelete,
  DashboardStatus,
  StatusList,
  StatusCreate,
  StatusUpdate,
  StatusRead,
  StatusDelete,
  DashboardUser,
  UserList,
  UserCreate,
  UserRead,
  UserUpdate,
  UserDelete,
  ApiKeyCreate,
  ApiKeyList,
  DashboardApiKey,
  ApiKeyDelete,
  SearchPage,
  LegalNotice,
  PrivacyPolicy,
} from "./";

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <Web3Provider>
      <BrowserRouter>
        <CookiesProvider>
          <Routes>
            <Route path="/" element={<FrontOffice />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

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

                <Route path="user" element={<DashboardUser />}>
                  <Route path="list" element={<UserList />} />
                  <Route path="create" element={<UserCreate />} />
                  <Route path="read/:id" element={<UserRead />} />
                  <Route path="update/:id" element={<UserUpdate />} />
                  <Route path="delete/:id" element={<UserDelete />} />
                </Route>

                <Route path="api-key" element={<DashboardApiKey />}>
                  <Route path="list" element={<ApiKeyList />} />
                  <Route path="create" element={<ApiKeyCreate />} />
                  <Route path="delete/:id" element={<ApiKeyDelete />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </Web3Provider>
  </StrictMode>
);
