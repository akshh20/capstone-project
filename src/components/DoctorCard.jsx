import React from 'react'

export default function DoctorCard({ doc, onBook, onView, compact }) {
  if (compact) return (
    <div onClick={() => onView?.(doc)} style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--r)', padding: '14px',
      display: 'flex', alignItems: 'center', gap: 12,
      cursor: 'pointer', transition: 'border-color .2s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border2)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <Avatar doc={doc} size={48} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
        <div style={{ fontSize: 12, color: 'var(--text2)' }}>{doc.spec}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <span style={{ fontSize: 12 }}>⭐ {doc.rating}</span>
          <span style={{ fontSize: 11, color: 'var(--text3)' }}>·</span>
          <span style={{ fontSize: 11, color: 'var(--text2)' }}>₹{doc.fee}</span>
        </div>
      </div>
      <AvailBadge avail={doc.avail} />
    </div>
  )

  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--r)', padding: '16px',
      cursor: 'pointer', transition: 'all .2s', position: 'relative',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(63,185,80,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    onClick={() => onView?.(doc)}
    >
      {doc.featured && (
        <span style={{
          position: 'absolute', top: 10, right: 10,
          background: 'var(--coral)', color: '#fff',
          fontSize: 9, fontWeight: 700, letterSpacing: 1,
          padding: '3px 7px', borderRadius: 20
        }}>TOP</span>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
        <Avatar doc={doc} size={52} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 1 }}>{doc.name}</div>
          <div style={{ fontSize: 12, color: 'var(--text2)' }}>{doc.spec} · {doc.exp}yr exp</div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{doc.hospital}</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ color: '#f59e0b', fontSize: 13 }}>★</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{doc.rating}</span>
          <span style={{ fontSize: 11, color: 'var(--text2)' }}>({doc.reviews})</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--teal)' }}>₹{doc.fee}</div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <AvailBadge avail={doc.avail} />
        <button
          onClick={e => { e.stopPropagation(); onBook?.(doc) }}
          style={{
            flex: 1, padding: '9px 0',
            background: 'var(--teal-dim)', color: 'var(--teal)',
            border: '1px solid rgba(63,185,80,0.25)',
            borderRadius: 'var(--r-sm)', fontSize: 13, fontWeight: 600,
            transition: 'all .15s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal-dim)'; e.currentTarget.style.color = 'var(--teal)' }}
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

export function Avatar({ doc, size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.24,
      background: doc.color + '33',
      border: `1px solid ${doc.color}44`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Fraunces', serif", fontSize: size * 0.33,
      color: doc.color, flexShrink: 0, position: 'relative'
    }}>
      {doc.avatar}
      <span style={{
        position: 'absolute', bottom: size * 0.02, right: size * 0.02,
        width: size * 0.22, height: size * 0.22, borderRadius: '50%',
        background: '#22c55e', border: `2px solid var(--surface)`
      }} />
    </div>
  )
}

export function AvailBadge({ avail }) {
  const today = avail === 'today'
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '6px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600,
      background: today ? 'var(--teal-dim)' : 'var(--amber-dim)',
      color: today ? 'var(--teal)' : 'var(--amber)',
      border: `1px solid ${today ? 'rgba(63,185,80,0.2)' : 'rgba(210,153,34,0.2)'}`,
      whiteSpace: 'nowrap'
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
      {today ? 'Today' : 'Tomorrow'}
    </span>
  )
}
