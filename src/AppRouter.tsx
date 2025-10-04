import { NavLink, Route, Routes } from 'react-router-dom'
import type { CSSProperties } from 'react'
import Home from './pages/Home'
import Templates from './pages/Templates'
import Docs from './pages/Docs'
import Queries from './pages/Queries'
import Alerts from './pages/Alerts'

function TopNav() {
  const linkStyle: CSSProperties = { padding: '10px 12px', borderRadius: 8 }
  const activeStyle: CSSProperties = { background: '#eef3ff', color: '#1a4dd6' }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #eceff3', padding: '10px 16px', background: '#fff', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ fontWeight: 700 }}>FoundersSide — Lawyer Portal</div>
      <nav style={{ display: 'flex', gap: 6, marginLeft: 16 }}>
        <NavLink to="/" end style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>Home</NavLink>
        <NavLink to="/templates" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>Template Library</NavLink>
        <NavLink to="/docs" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>Negotiated Documents</NavLink>
        <NavLink to="/queries" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>Legal Queries</NavLink>
        <NavLink to="/alerts" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>Client Alerts</NavLink>
      </nav>
    </div>
  )
}

export default function AppRouter() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </div>
  )
}