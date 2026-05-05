import React from 'react'
import { Avatar } from '../components/DoctorCard'

export default function DoctorProfile({ doc, navigate }) {
  if (!doc) return null

  return (
    <div>
      {/* Back header */}
      <div style={{ padding: '52px 20px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => navigate('find')} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18 }}>Doctor Profile</div>
      </div>

      {/* Hero */}
      <div style={{ padding: '24px 20px', background: 'linear-gradient(180deg,var(--bg3) 0%,var(--bg) 100%)', textAlign: 'center', borderBottom: '1px solid var(--border)' }} className="anim-fadeup">
        <Avatar doc={doc} size={80} />
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, marginTop: 14, marginBottom: 4 }}>{doc.name}</div>
        <div style={{ fontSize: 14, color: doc.color, fontWeight: 600, marginBottom: 4 }}>{doc.spec}</div>
        <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 14 }}>{doc.hospital} · {doc.exp} years exp</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: 'var(--teal)' }}>{doc.rating}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)' }}>Rating</div>
          </div>
          <div style={{ width: 1, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22 }}>{doc.reviews}</div>
            <div style={{ fontSize: 11, color: 'var(--text2)' }}>Reviews</div>
          </div>
          <div style={{ width: 1, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22 }}>{doc.exp}yr</div>
            <div style={{ fontSize: 11, color: 'var(--text2)' }}>Experience</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* About */}
        <div style={{ marginBottom: 20 }} className="anim-fadeup anim-delay-1">
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 10 }}>ABOUT</div>
          <div style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{doc.about}</div>
        </div>

        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="anim-fadeup anim-delay-2">
          {[
            { icon: '🏥', label: 'Hospital', val: doc.hospital },
            { icon: '💰', label: 'Consult Fee', val: `₹${doc.fee}` },
            { icon: '🕐', label: 'Availability', val: doc.avail === 'today' ? 'Available today' : 'From tomorrow' },
            { icon: '🌐', label: 'Languages', val: 'Hindi, English' },
          ].map(({ icon, label, val }) => (
            <div key={label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '12px 14px' }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Sample reviews */}
        <div style={{ marginBottom: 24 }} className="anim-fadeup anim-delay-3">
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>PATIENT REVIEWS</div>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '12px 14px', marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#f59e0b' }}>{'★'.repeat(r.rating)}</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>{r.text}</div>
            </div>
          ))}
        </div>

        {/* Book button */}
        <button
          onClick={() => navigate('booking', { bookingDoc: doc })}
          className="anim-fadeup anim-delay-4"
          style={{
            width: '100%', padding: '15px', background: 'var(--teal)', color: '#fff',
            border: 'none', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 700, cursor: 'pointer',
            transition: 'opacity .15s', display: 'block'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Book Appointment · ₹{doc.fee}
        </button>
      </div>
    </div>
  )
}

const REVIEWS = [
  { name: 'Anjali K.', rating: 5, text: 'Extremely professional and thorough. Explained everything clearly and put me at ease.' },
  { name: 'Suresh M.', rating: 5, text: 'Best doctor I have visited. Very knowledgeable and caring. Highly recommend!' },
  { name: 'Pooja R.', rating: 4, text: 'Good experience overall. Wait time was a bit long but the consultation was excellent.' },
]
