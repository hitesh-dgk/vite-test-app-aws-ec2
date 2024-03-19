import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom"

const TestApp = () => {
  return (
    <>
      Main Test App
    </>
  );
}

const MainApp = () => {
  return (
    <>
      Main App
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/test" element={<TestApp />} />
      </Routes>
      <Outlet />
    </>
  )
}

export default App
