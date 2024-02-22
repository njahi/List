import React, { lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UsersProvider } from "./context/userContext";
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));
const Order = lazy(() => import("./Pages/Order"));
const Service = lazy(() => import("./Pages/Service"));
const Asset = lazy(() => import("./Pages/Asset"));
const Reports = lazy(() => import("./Pages/Reports"));
const Inventorymanagement = lazy(() => import("./Pages/InventoryManagement"));
const Settings = lazy(() => import("./Pages/Settings"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UsersProvider>
        <BrowserRouter>
          <Toaster />

          <Routes>
            <Route
              index
              element={<Register />}
            />
            <Route
              path='login'
              element={<Login />}
            />
            <Route
              path='home'
              element={<Home />}
            />

            <Route
              path='order'
              element={<Order />}
            />
            <Route
              path='service'
              element={<Service />}
            />
            <Route
              path='asset'
              element={<Asset />}
            />
            <Route
              path='reports'
              element={<Reports />}
            />
            <Route
              path='inventorymanagement'
              element={<Inventorymanagement />}
            />
            <Route
              path='settings'
              element={<Settings />}
            />
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      </UsersProvider>
    </QueryClientProvider>
  );
}

export default App;
