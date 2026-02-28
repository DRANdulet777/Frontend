import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));


function Home() {
  return <h2>Home Page</h2>;
}

function LoadingSpinner() {
  return (
    <div style={{ textAlign:"center", padding: "2rem" }}>
      <div className="spinner"></div>
      <p>Loading Page</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
}
