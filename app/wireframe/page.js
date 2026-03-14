"use client"

import { useState } from 'react'

export default function Wireframe() {
  const [activePage, setActivePage] = useState('home')

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Portfolio Wireframe
          </h1>
          <p style={{ color: '#888', fontSize: '1rem' }}>
            Interactive structure overview of the portfolio site
          </p>
        </header>

        {/* Page Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: activePage === page.id ? '2px solid #7c3aed' : '2px solid #333',
                background: activePage === page.id ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
                color: activePage === page.id ? '#a78bfa' : '#888',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {page.label}
            </button>
          ))}
        </div>

        {/* Wireframe Display */}
        <div style={{ 
          background: '#111118', 
          borderRadius: '16px', 
          border: '1px solid #222', 
          overflow: 'hidden',
          boxShadow: '0 4px 40px rgba(0,0,0,0.4)'
        }}>
          {/* Browser Chrome */}
          <div style={{ 
            background: '#1a1a24', 
            padding: '0.75rem 1rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            borderBottom: '1px solid #222'
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{ 
              flex: 1, 
              background: '#0d0d12', 
              borderRadius: '6px', 
              padding: '0.4rem 0.75rem',
              color: '#666',
              fontSize: '0.8rem',
              marginLeft: '1rem'
            }}>
              portfolio.vercel.app/{activePage === 'home' ? '' : activePage}
            </div>
          </div>

          {/* Wireframe Content */}
          <div style={{ padding: '1.5rem' }}>
            {activePage === 'home' && <HomeWireframe />}
            {activePage === 'about' && <AboutWireframe />}
            {activePage === 'projects' && <ProjectsWireframe />}
            {activePage === 'contact' && <ContactWireframe />}
          </div>
        </div>

        {/* Legend */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.25rem', 
          background: '#111118', 
          borderRadius: '12px',
          border: '1px solid #222'
        }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1rem', fontWeight: 700 }}>Legend</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <LegendItem color="#3b82f6" label="Navigation" />
            <LegendItem color="#8b5cf6" label="Hero/Header" />
            <LegendItem color="#10b981" label="Content Card" />
            <LegendItem color="#f59e0b" label="Sidebar/Aside" />
            <LegendItem color="#ef4444" label="CTA/Button" />
            <LegendItem color="#6b7280" label="Footer" />
          </div>
        </div>
      </div>
    </div>
  )
}

function LegendItem({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{ width: 16, height: 16, borderRadius: 4, background: color }} />
      <span style={{ color: '#aaa', fontSize: '0.9rem' }}>{label}</span>
    </div>
  )
}

function WireframeBox({ children, color = '#333', label, height = 'auto', style = {} }) {
  return (
    <div style={{ 
      border: `2px dashed ${color}`, 
      borderRadius: '8px', 
      padding: '0.75rem',
      position: 'relative',
      height,
      ...style
    }}>
      {label && (
        <span style={{ 
          position: 'absolute', 
          top: '-10px', 
          left: '10px', 
          background: '#111118', 
          padding: '0 6px',
          color: color,
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {label}
        </span>
      )}
      {children}
    </div>
  )
}

function PlaceholderLine({ width = '100%', height = 12, color = '#2a2a35' }) {
  return <div style={{ width, height, background: color, borderRadius: 4, marginBottom: 6 }} />
}

function HomeWireframe() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Navbar */}
      <WireframeBox color="#3b82f6" label="Navbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 32, height: 32, background: '#3b82f6', borderRadius: 6, opacity: 0.3 }} />
            <PlaceholderLine width={80} height={14} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <div style={{ width: 70, height: 28, background: '#ef4444', borderRadius: 6, opacity: 0.4 }} />
          </div>
        </div>
      </WireframeBox>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Hero */}
          <WireframeBox color="#8b5cf6" label="Hero Section">
            <PlaceholderLine width="70%" height={32} color="#8b5cf6" />
            <PlaceholderLine width="90%" height={14} />
          </WireframeBox>

          {/* Main Card */}
          <WireframeBox color="#10b981" label="Introduction Card">
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="95%" />
            <PlaceholderLine width="80%" />
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ padding: '4px 12px', background: '#10b981', borderRadius: 20, opacity: 0.2, width: 100, height: 24 }} />
              <div style={{ padding: '4px 12px', background: '#10b981', borderRadius: 20, opacity: 0.2, width: 120, height: 24 }} />
              <div style={{ padding: '4px 12px', background: '#10b981', borderRadius: 20, opacity: 0.2, width: 90, height: 24 }} />
            </div>
          </WireframeBox>
        </div>

        {/* Right Column (Aside) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <WireframeBox color="#f59e0b" label="Featured Card">
            <PlaceholderLine width={60} height={10} color="#f59e0b" />
            <PlaceholderLine width="90%" height={16} />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="85%" />
          </WireframeBox>

          <WireframeBox color="#f59e0b" label="Featured Project">
            <PlaceholderLine width={80} height={10} color="#f59e0b" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="90%" />
            <div style={{ width: 100, height: 32, background: '#ef4444', borderRadius: 6, opacity: 0.4, marginTop: '0.5rem' }} />
          </WireframeBox>
        </div>
      </div>

      {/* Footer */}
      <WireframeBox color="#6b7280" label="Footer">
        <PlaceholderLine width={200} height={10} />
      </WireframeBox>
    </div>
  )
}

function AboutWireframe() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Navbar */}
      <WireframeBox color="#3b82f6" label="Navbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 32, height: 32, background: '#3b82f6', borderRadius: 6, opacity: 0.3 }} />
            <PlaceholderLine width={80} height={14} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <div style={{ width: 70, height: 28, background: '#ef4444', borderRadius: 6, opacity: 0.4 }} />
          </div>
        </div>
      </WireframeBox>

      {/* Header with Avatar */}
      <WireframeBox color="#8b5cf6" label="Page Header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#8b5cf6', opacity: 0.3 }} />
          <div>
            <PlaceholderLine width={150} height={28} color="#8b5cf6" />
            <PlaceholderLine width={200} height={12} />
          </div>
        </div>
      </WireframeBox>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <WireframeBox color="#10b981" label="Who I Am" style={{ minHeight: 140 }}>
            <PlaceholderLine width={80} height={10} color="#10b981" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="95%" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="85%" />
            <PlaceholderLine width="90%" />
          </WireframeBox>

          <WireframeBox color="#10b981" label="My Journey">
            <PlaceholderLine width={80} height={10} color="#10b981" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="90%" />
            <PlaceholderLine width="75%" />
          </WireframeBox>

          <WireframeBox color="#10b981" label="Skills">
            <PlaceholderLine width={100} height={10} color="#10b981" />
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <div style={{ width: 100, height: 24, background: '#10b981', borderRadius: 20, opacity: 0.2 }} />
              <div style={{ width: 80, height: 24, background: '#10b981', borderRadius: 20, opacity: 0.2 }} />
              <div style={{ width: 60, height: 24, background: '#10b981', borderRadius: 20, opacity: 0.2 }} />
              <div style={{ width: 90, height: 24, background: '#10b981', borderRadius: 20, opacity: 0.2 }} />
            </div>
          </WireframeBox>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <WireframeBox color="#f59e0b" label="Beyond the Screen">
            <PlaceholderLine width={100} height={10} color="#f59e0b" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="85%" />
          </WireframeBox>

          <WireframeBox color="#f59e0b" label="My Purpose">
            <PlaceholderLine width={80} height={10} color="#f59e0b" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="90%" />
          </WireframeBox>
        </div>
      </div>

      {/* Footer */}
      <WireframeBox color="#6b7280" label="Footer">
        <PlaceholderLine width={200} height={10} />
      </WireframeBox>
    </div>
  )
}

function ProjectsWireframe() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Navbar */}
      <WireframeBox color="#3b82f6" label="Navbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 32, height: 32, background: '#3b82f6', borderRadius: 6, opacity: 0.3 }} />
            <PlaceholderLine width={80} height={14} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <div style={{ width: 70, height: 28, background: '#ef4444', borderRadius: 6, opacity: 0.4 }} />
          </div>
        </div>
      </WireframeBox>

      {/* Page Header */}
      <WireframeBox color="#8b5cf6" label="Page Header">
        <PlaceholderLine width={140} height={24} color="#8b5cf6" />
        <PlaceholderLine width={250} height={12} />
      </WireframeBox>

      {/* Filter Buttons */}
      <WireframeBox color="#ef4444" label="Filter Controls">
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div style={{ width: 50, height: 28, background: '#ef4444', borderRadius: 20, opacity: 0.4 }} />
          <div style={{ width: 70, height: 28, background: '#333', borderRadius: 20 }} />
          <div style={{ width: 80, height: 28, background: '#333', borderRadius: 20 }} />
        </div>
      </WireframeBox>

      {/* Project Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <WireframeBox key={i} color="#10b981" label={`Project ${i}`}>
            <div style={{ height: 60, background: `linear-gradient(90deg, #7c3aed, #ec4899)`, borderRadius: 6, opacity: 0.3, marginBottom: '0.5rem' }} />
            <PlaceholderLine width="80%" height={14} />
            <PlaceholderLine width="100%" height={8} />
            <PlaceholderLine width="70%" height={8} />
            <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
              <div style={{ width: 40, height: 18, background: '#10b981', borderRadius: 10, opacity: 0.2 }} />
              <div style={{ width: 35, height: 18, background: '#10b981', borderRadius: 10, opacity: 0.2 }} />
            </div>
            <div style={{ width: 80, height: 26, background: '#ef4444', borderRadius: 6, opacity: 0.4, marginTop: '0.5rem' }} />
          </WireframeBox>
        ))}
      </div>

      {/* Footer */}
      <WireframeBox color="#6b7280" label="Footer">
        <PlaceholderLine width={200} height={10} />
      </WireframeBox>
    </div>
  )
}

function ContactWireframe() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Navbar */}
      <WireframeBox color="#3b82f6" label="Navbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 32, height: 32, background: '#3b82f6', borderRadius: 6, opacity: 0.3 }} />
            <PlaceholderLine width={80} height={14} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <PlaceholderLine width={50} height={10} />
            <div style={{ width: 70, height: 28, background: '#ef4444', borderRadius: 6, opacity: 0.4 }} />
          </div>
        </div>
      </WireframeBox>

      {/* Page Header */}
      <WireframeBox color="#8b5cf6" label="Page Header">
        <PlaceholderLine width={160} height={24} color="#8b5cf6" />
        <PlaceholderLine width="80%" height={12} />
      </WireframeBox>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
        {/* Left Column */}
        <WireframeBox color="#10b981" label="Contact Info">
          <PlaceholderLine width={70} height={10} color="#10b981" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ width: 24, height: 24, background: '#10b981', borderRadius: 4, opacity: 0.3 }} />
              <div>
                <PlaceholderLine width={50} height={10} />
                <PlaceholderLine width={180} height={8} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ width: 24, height: 24, background: '#10b981', borderRadius: 4, opacity: 0.3 }} />
              <div>
                <PlaceholderLine width={60} height={10} />
                <PlaceholderLine width={200} height={8} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ width: 24, height: 24, background: '#10b981', borderRadius: 4, opacity: 0.3 }} />
              <div>
                <PlaceholderLine width={50} height={10} />
                <PlaceholderLine width={160} height={8} />
              </div>
            </div>
          </div>
        </WireframeBox>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <WireframeBox color="#f59e0b" label="Availability">
            <PlaceholderLine width={80} height={10} color="#f59e0b" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="85%" />
          </WireframeBox>

          <WireframeBox color="#f59e0b" label="Why Connect?">
            <PlaceholderLine width={90} height={10} color="#f59e0b" />
            <PlaceholderLine width="100%" />
            <PlaceholderLine width="75%" />
          </WireframeBox>
        </div>
      </div>

      {/* Footer */}
      <WireframeBox color="#6b7280" label="Footer">
        <PlaceholderLine width={200} height={10} />
      </WireframeBox>
    </div>
  )
}
