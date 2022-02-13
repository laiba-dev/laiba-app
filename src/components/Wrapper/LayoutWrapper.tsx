import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes, { RouteItem } from "../../utils/routes";
import { color } from "../Color";
import PrivateRoute from "../PrivateRoute";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutWrapper() {
  const [collapsed, setCollapsed] = useState(false);

  function renderRoutes() {
    return routes.map((item: RouteItem) => {
      return item.protected ? (
        <Route
          path={item.route}
          element={
            <PrivateRoute>
              <item.component />
            </PrivateRoute>
          }
          key={item.nama}
        />
      ) : (
        <Route path={item.route} element={<item.component />} key={item.nama} />
      );
    });
  }

  const location = useLocation();

  useEffect(() => {
    const isUseTemplate = routes
      .filter((item: RouteItem) => item.protected)
      .map((item: RouteItem) => item.route)
      .includes("/" + location.pathname.split("/")[1]);
    setUseTemplate(isUseTemplate);
  }, [location.pathname]);

  const [useTemplate, setUseTemplate] = useState(false);

  return useTemplate ? (
    <div>
      {!collapsed && <Sidebar />}
      <div
        style={{
          background: color.background,
          minHeight: "100vh",
          marginLeft: !collapsed ? "212px" : "0px",
        }}
      >
        <Header
          name={"Irfan Rafif"}
          setCollapsed={() => {
            setCollapsed(!collapsed);
          }}
        />
        <div className="container">
          <Routes>{renderRoutes()}</Routes>
        </div>
      </div>
    </div>
  ) : (
    <Routes>{renderRoutes()}</Routes>
  );
}
