
import './App.css'
import { Link, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import ErrorBoundary from './ErrorBoundary'

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

function ErrorFallBack() {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>Failed to load this page</p>
    </div>
  )
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

      <ErrorBoundary fallback={<ErrorFallBack />}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
