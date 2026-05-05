import React, { useState } from 'react'
import { Avatar } from '../components/DoctorCard'

const TABS = ['All', 'Upcoming', 'Completed', 'Cancelled']
const STATUS_STYLES = {
  upcoming:  { bg: 'var(--teal-dim)',   color: 'var(--teal)',   border: 'rgba(63,185,80,0.2)',    label: 'Upcoming'  },
  completed: { bg: '#1a3a1a',           color: '#4ade80',       border: 'rgba(74,222,128,0.2)',   label: 'Done'      },
  cancelled: { bg: 'var(--red-dim)',    color: 'var(--red)',    border: 'rgba(248,81,73,0.2)',    label: 'Cancelled' },
}
const LEFT_BORDER = { upcoming: 'var(--teal)', completed: '#4ade80', cancelled: 'var(--red)' }

export default function Dashboard({ appointments, cancelAppt, navigate }) {
  const [tab, setTab] = useState('All')

  const shown = tab === 'All' ? appointments : appointments.filter(a => a.status === tab.toLowerCase())
  const upcoming  = appointments.filter(a => a.status === 'upcoming')
  const completed = appointments.filter(a => a.status === 'completed')
  const cancelled = appointments.filter(a => a.status === 'cancelled')

  return (
    <div>
      {/* Header */}
      <div style={{ padding: '52px 20px 20px', background: 'linear-gradient(180deg,var(--bg3) 0%,var(--bg) 100%)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 26, marginBottom: 4 }}>My Appointments</div>
        <div style={{ fontSize: 13, color: 'var(--text2)' }}>Track all your health visits</div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 20 }}>
          {[
            { label: 'Upcoming', val: upcoming.length, color: 'var(--teal)', bg: 'var(--teal-dim)', icon: '📅' },
            { label: 'Completed', val: completed.length, color: '#4ade80', bg: '#1a3a1a', icon: '✓' },
            { label: 'Cancelled', val: cancelled.length, color: 'var(--red)', bg: 'var(--red-dim)', icon: '✕' },
          ].map(({ label, val, color, bg, icon }) => (
            <div key={label} style={{ background: bg, border: `1px solid ${color}22`, borderRadius: 'var(--r)', padding: '12px 10px', textAlign: 'center' }} className="anim-fadeup">
              <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color, lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 11, color: 'var(--text2)', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 0, padding: '0 20px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flexShrink: 0, padding: '14px 16px', border: 'none', background: 'none', cursor: 'pointer',
            fontSize: 13, fontWeight: 600, transition: 'all .15s',
            color: tab === t ? 'var(--teal)' : 'var(--text2)',
            borderBottom: tab === t ? '2px solid var(--teal)' : '2px solid transparent',
          }}>{t}</button>
        ))}
      </div>

      {/* List */}
      <div style={{ padding: '16px 20px' }}>
        {shown.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text2)' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
            <div style={{ fontSize: 14 }}>No appointments here</div>
            <button onClick={() => navigate('find')} style={{ marginTop: 16, padding: '10px 24px', background: 'var(--teal)', color: '#fff', border: 'none', borderRadius: 'var(--r-sm)', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              Book Now
            </button>
          </div>
        ) : (
          shown.map((a, i) => {
            const ss = STATUS_STYLES[a.status]
            return (
              <div key={a.id} className={`anim-fadeup anim-delay-${Math.min(i + 1, 6)}`} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderLeft: `3px solid ${LEFT_BORDER[a.status]}`,
                borderRadius: 'var(--r)', padding: '14px', marginBottom: 12
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Avatar doc={a.doc} size={44} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 1 }}>{a.doc.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text2)' }}>{a.doc.spec}</div>
                      </div>
                      <span style={{ flexShrink: 0, padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: ss.bg, color: ss.color, border: `1px solid ${ss.border}` }}>{ss.label}</span>
                    </div>
                    <div style={{ marginTop: 10, display: 'flex', gap: 12 }}>
                      <div style={{ background: 'var(--bg3)', borderRadius: 'var(--r-sm)', padding: '6px 10px', fontSize: 12 }}>
                        📅 {a.date}
                      </div>
                      <div style={{ background: 'var(--bg3)', borderRadius: 'var(--r-sm)', padding: '6px 10px', fontSize: 12 }}>
                        ⏰ {a.time}
                      </div>
                    </div>
                    {a.reason && (
                      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text2)', display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                        <span>💬</span>
                        <span style={{ flex: 1 }}>{a.reason}</span>
                      </div>
                    )}
                    {a.status === 'upcoming' && (
                      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                        <button style={{ flex: 1, padding: '8px', background: 'var(--teal-dim)', color: 'var(--teal)', border: '1px solid rgba(63,185,80,0.25)', borderRadius: 'var(--r-sm)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                          Reschedule
                        </button>
                        <button onClick={() => cancelAppt(a.id)} style={{ flex: 1, padding: '8px', background: 'var(--red-dim)', color: 'var(--red)', border: '1px solid rgba(248,81,73,0.25)', borderRadius: 'var(--r-sm)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                          Cancel
                        </button>
                      </div>
                    )}
                    {a.status === 'completed' && (
                      <button onClick={() => navigate('booking', { bookingDoc: a.doc })} style={{ marginTop: 10, width: '100%', padding: '8px', background: 'var(--surface)', color: 'var(--text2)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                        Book Again
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
