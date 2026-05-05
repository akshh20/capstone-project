import React, { useState, useMemo } from 'react'
import { DOCTORS, SPECIALTIES } from '../data'
import DoctorCard from '../components/DoctorCard'

export default function FindDoctors({ navigate }) {
  const [search, setSearch] = useState('')
  const [spec, setSpec] = useState('All')
  const [sort, setSort] = useState('rating')

  const filtered = useMemo(() => {
    let list = DOCTORS.filter(d =>
      (spec === 'All' || d.spec === spec) &&
      (d.name.toLowerCase().includes(search.toLowerCase()) ||
       d.spec.toLowerCase().includes(search.toLowerCase()) ||
       d.hospital.toLowerCase().includes(search.toLowerCase()))
    )
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    if (sort === 'fee')    list = [...list].sort((a, b) => a.fee - b.fee)
    if (sort === 'exp')    list = [...list].sort((a, b) => b.exp - a.exp)
    return list
  }, [search, spec, sort])

  return (
    <div>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', position: 'sticky', top: 0, zIndex: 10, background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, marginBottom: 14 }}>Find Doctors</div>
        {/* Search */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Doctor name, specialty, hospital..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 14, color: 'var(--text)' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', color: 'var(--text2)', fontSize: 16, lineHeight: 1, padding: 0 }}>✕</button>
          )}
        </div>
        {/* Sort */}
        <div style={{ display: 'flex', gap: 8 }}>
          {[['rating','⭐ Rating'],['fee','💰 Fee'],['exp','🏆 Experience']].map(([k, label]) => (
            <button key={k} onClick={() => setSort(k)} style={{
              padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid',
              background: sort === k ? 'var(--teal)' : 'var(--surface)',
              color: sort === k ? '#fff' : 'var(--text2)',
              borderColor: sort === k ? 'var(--teal)' : 'var(--border)',
              cursor: 'pointer', transition: 'all .15s'
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Specialty chips */}
      <div style={{ padding: '12px 20px', display: 'flex', gap: 8, overflowX: 'auto', borderBottom: '1px solid var(--border)' }}>
        {SPECIALTIES.map(s => (
          <button key={s} onClick={() => setSpec(s)} style={{
            flexShrink: 0, padding: '7px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600, border: '1px solid', cursor: 'pointer', transition: 'all .15s', whiteSpace: 'nowrap',
            background: spec === s ? 'var(--teal)' : 'var(--surface)',
            color: spec === s ? '#fff' : 'var(--text2)',
            borderColor: spec === s ? 'var(--teal)' : 'var(--border)',
          }}>{s}</button>
        ))}
      </div>

      {/* Results */}
      <div style={{ padding: '16px 20px' }}>
        <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 14, fontWeight: 500 }}>
          {filtered.length} doctor{filtered.length !== 1 ? 's' : ''} found
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {filtered.map((doc, i) => (
            <div key={doc.id} className={`anim-fadeup anim-delay-${Math.min(i + 1, 6)}`}>
              <DoctorCard
                doc={doc}
                onView={d => navigate('profile', { doc: d })}
                onBook={d => navigate('booking', { bookingDoc: d })}
              />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text2)' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
            <div style={{ fontSize: 14 }}>No doctors found</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>Try a different search or specialty</div>
          </div>
        )}
      </div>
    </div>
  )
}
