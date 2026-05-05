import React from 'react'

const TABS = [
  { id: 'home',      icon: HomeIcon,      label: 'Home' },
  { id: 'find',      icon: SearchIcon,    label: 'Doctors' },
  { id: 'dashboard', icon: CalendarIcon,  label: 'Bookings' },
  { id: 'profile',   icon: UserIcon,      label: 'Profile' },
]

export default function BottomNav({ page, navigate, upcomingCount }) {
  const active = TABS.find(t => t.id === page)?.id || 'home'

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 430,
      background: 'rgba(22,27,34,0.96)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'stretch',
      height: 72, zIndex: 99,
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {TABS.map(({ id, icon: Icon, label }) => {
        const isActive = active === id || (id === 'profile' && page === 'profile' && !['home','find','dashboard'].includes(page))
        const showBadge = id === 'dashboard' && upcomingCount > 0
        return (
          <button
            key={id}
            onClick={() => navigate(id)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 4,
              border: 'none', background: 'none', position: 'relative',
              color: isActive ? 'var(--teal)' : 'var(--text2)',
              transition: 'color .2s',
            }}
          >
            <div style={{ position: 'relative' }}>
              <Icon size={22} />
              {showBadge && (
                <span style={{
                  position: 'absolute', top: -4, right: -6,
                  background: 'var(--red)', color: '#fff',
                  width: 16, height: 16, borderRadius: '50%',
                  fontSize: 9, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid var(--bg2)'
                }}>{upcomingCount}</span>
              )}
            </div>
            <span style={{ fontSize: 10, fontWeight: 500 }}>{label}</span>
            {isActive && (
              <span style={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: 24, height: 2, background: 'var(--teal)',
                borderRadius: '2px 2px 0 0'
              }} />
            )}
          </button>
        )
      })}
    </nav>
  )
}

function HomeIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}
function SearchIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  )
}
function CalendarIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}
function UserIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )
}
