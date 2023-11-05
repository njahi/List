import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import register from "./Pages/register";
import login from "./Pages/login";
import home from "./Pages/home";
import about from "./Pages/about";
import service from "./Pages/service";
import asset from "./Pages/asset";
import reports from "./Pages/reports";
import documentation from "./Pages/documentation";
import inventorymanagement from "./Pages/inventorymanagement";
import settings from "./Pages/settings";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./components/Dashboard";
import { SearchProvider } from "./context/SearchContext";

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

      <Router>
        <Navbar />

        {/* <Dashboard /> */}
        <Toaster />
        <SearchProvider>
          <div className='app'>
            <Routes>
              <Route
                path='/register'
                exact
                Component={register}
              />
              <Route
                path='/login'
                exact
                Component={login}
              />
              <Route
                path='/home'
                exact
                Component={home}
              />

              <Route
                path='/about'
                Component={about}
              />
              <Route
                path='/service'
                Component={service}
              />
              <Route
                path='/asset'
                Component={asset}
              />
              <Route
                path='/reports'
                Component={reports}
              />
              <Route
                path='/documentation'
                Component={documentation}
              />
              <Route
                path='/inventorymanagement'
                Component={inventorymanagement}
              />
              <Route
                path='/settings'
                Component={settings}
              />
            </Routes>
          </div>
        </SearchProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
