import React from 'react'

export default function SuccessModal({ appt, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 300,
      background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, animation: 'fadeIn .25s ease'
    }}>
      <div style={{
        background: 'var(--bg2)', border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)', padding: '32px 28px',
        width: '100%', maxWidth: 340, textAlign: 'center',
        animation: 'slideUp .3s ease'
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'var(--teal-dim)', border: '1px solid rgba(63,185,80,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: 32
        }}>✓</div>

        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 8 }}>Booked!</div>
        <div style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 24 }}>
          Appointment confirmed with <strong style={{ color: 'var(--text)' }}>{appt.doc.name}</strong> on{' '}
          <strong style={{ color: 'var(--text)' }}>{appt.date}</strong> at{' '}
          <strong style={{ color: 'var(--teal)' }}>{appt.time}</strong>.
        </div>

        <div style={{
          background: 'var(--surface)', borderRadius: 'var(--r)', padding: '12px 14px',
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
          border: '1px solid var(--border)', textAlign: 'left'
        }}>
          <span style={{ fontSize: 20 }}>📋</span>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 2 }}>Reason for visit</div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{appt.reason}</div>
          </div>
        </div>

        <button onClick={onClose} style={{
          width: '100%', padding: '13px',
          background: 'var(--teal)', color: '#fff', border: 'none',
          borderRadius: 'var(--r)', fontSize: 15, fontWeight: 600,
          transition: 'opacity .15s'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          View My Appointments →
        </button>
      </div>
    </div>
  )
}
