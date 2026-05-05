import React from 'react'
import { DOCTORS, HEALTH_TIPS } from '../data'
import DoctorCard from '../components/DoctorCard'

const CATEGORIES = [
  { icon: '❤️', label: 'Heart',   color: '#e57a44' },
  { icon: '🧠', label: 'Neuro',   color: '#58a6ff' },
  { icon: '🦷', label: 'Dental',  color: '#3fb950' },
  { icon: '👁️', label: 'Eye',     color: '#bc8cff' },
  { icon: '🦴', label: 'Ortho',   color: '#d29922' },
  { icon: '👶', label: 'Child',   color: '#db61a2' },
  { icon: '🧴', label: 'Skin',    color: '#e57a44' },
  { icon: '🧬', label: 'General', color: '#58a6ff' },
]

export default function Home({ navigate, appointments }) {
  const upcoming = appointments.filter(a => a.status === 'upcoming')
  return (
    <div>
      <div style={{ padding:'52px 20px 24px', background:'linear-gradient(180deg,#0f1f14 0%,var(--bg) 100%)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute',top:-40,right:-40,width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle,rgba(63,185,80,0.10) 0%,transparent 70%)',pointerEvents:'none' }}/>
        <div className="anim-fadeup" style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start' }}>
          <div>
            <div style={{ fontSize:11,color:'var(--teal)',fontWeight:700,letterSpacing:1.5,marginBottom:6 }}>GOOD MORNING</div>
            <div style={{ fontFamily:'Fraunces,serif',fontSize:28,lineHeight:1.2,marginBottom:4 }}>Rahul Verma 👋</div>
            <div style={{ fontSize:13,color:'var(--text2)' }}>How are you feeling today?</div>
          </div>
          <div style={{ width:44,height:44,borderRadius:'50%',background:'var(--bg3)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,cursor:'pointer' }}>🔔</div>
        </div>
      </div>
      <div style={{ padding:'0 20px',marginBottom:22 }} className="anim-fadeup anim-delay-1">
        <div onClick={() => navigate('find')} style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r)',padding:'13px 16px',display:'flex',alignItems:'center',gap:10,cursor:'pointer' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span style={{ fontSize:14,color:'var(--text2)' }}>Search doctors, conditions...</span>
        </div>
      </div>
      {upcoming.length > 0 && (
        <div style={{ padding:'0 20px',marginBottom:22 }} className="anim-fadeup anim-delay-1">
          <div onClick={() => navigate('dashboard')} style={{ background:'var(--teal-dim)',border:'1px solid rgba(63,185,80,0.2)',borderRadius:'var(--r)',padding:'14px 16px',display:'flex',alignItems:'center',gap:12,cursor:'pointer' }}>
            <div style={{ fontSize:26 }}>📅</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12,color:'var(--teal)',fontWeight:700,marginBottom:2 }}>UPCOMING APPOINTMENT</div>
              <div style={{ fontSize:13,fontWeight:500 }}>{upcoming[0].doc.name}</div>
              <div style={{ fontSize:12,color:'var(--text2)',marginTop:1 }}>{upcoming[0].date} · {upcoming[0].time}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      )}
      <div style={{ padding:'0 20px',marginBottom:22 }} className="anim-fadeup anim-delay-2">
        <div style={{ fontFamily:'Fraunces,serif',fontSize:18,marginBottom:14 }}>Browse Specialties</div>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10 }}>
          {CATEGORIES.map(({ icon, label, color }) => (
            <div key={label} onClick={() => navigate('find')} style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r)',padding:'14px 8px',textAlign:'center',cursor:'pointer',transition:'all .15s' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor=color+'55'; e.currentTarget.style.background='var(--bg3)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--surface)' }}
            >
              <div style={{ fontSize:22,marginBottom:6 }}>{icon}</div>
              <div style={{ fontSize:11,fontWeight:500,color:'var(--text2)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:'0 20px',marginBottom:22 }} className="anim-fadeup anim-delay-3">
        <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14 }}>
          <div style={{ fontFamily:'Fraunces,serif',fontSize:18 }}>Top Doctors</div>
          <button onClick={() => navigate('find')} style={{ background:'none',border:'none',color:'var(--teal)',fontSize:13,fontWeight:600,padding:0,cursor:'pointer' }}>See All →</button>
        </div>
        <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
          {DOCTORS.slice(0,4).map(doc => (
            <DoctorCard key={doc.id} doc={doc} compact onView={d => navigate('profile',{doc:d})} />
          ))}
        </div>
      </div>
      <div style={{ padding:'0 20px 16px' }} className="anim-fadeup anim-delay-4">
        <div style={{ fontFamily:'Fraunces,serif',fontSize:18,marginBottom:14 }}>Wellness Tips</div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:10 }}>
          {HEALTH_TIPS.map(({ icon, title, desc }) => (
            <div key={title} style={{ background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r)',padding:14 }}>
              <div style={{ fontSize:22,marginBottom:8 }}>{icon}</div>
              <div style={{ fontSize:13,fontWeight:600,marginBottom:2 }}>{title}</div>
              <div style={{ fontSize:12,color:'var(--text2)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
