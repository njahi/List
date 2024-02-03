import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SearchProvider } from "./context/SearchContext";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Service from "./Pages/Service";
import Asset from "./Pages/Asset";
import Reports from "./Pages/Reports";
import Inventorymanagement from "./Pages/InventoryManagement";
import Settings from "./Pages/Settings";
import PageNotFound from "./Pages/PageNotFound";
import LandingPage from "./Pages/LandingPage";
import Sales from "./Pages/Sales";
import Manage from "./Pages/Manage";
import { UsersProvider } from "./context/userContext";

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
          <SearchProvider>
            <Routes>
              <Route
                path='/'
                element={<Register />}
              />
              <Route
                path='/sales'
                element={<Sales />}
              />
              <Route
                path='/manage'
                element={<Manage />}
              />
              <Route
                path='/'
                element={<Register />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/home'
                element={<Home />}
              />

              <Route
                path='/order'
                element={<Order />}
              />
              <Route
                path='/service'
                element={<Service />}
              />
              <Route
                path='/asset'
                element={<Asset />}
              />
              <Route
                path='/reports'
                element={<Reports />}
              />
              <Route
                path='/inventorymanagement'
                element={<Inventorymanagement />}
              />
              <Route
                path='/settings'
                element={<Settings />}
              />
              <Route
                path='*'
                element={<PageNotFound />}
              />
            </Routes>
          </SearchProvider>
        </BrowserRouter>
      </UsersProvider>
    </QueryClientProvider>
  );
}

export default App;
