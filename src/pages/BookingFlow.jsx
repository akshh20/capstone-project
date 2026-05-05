import React, { useState } from 'react'
import { DATES, TAKEN_SLOTS } from '../data'
import { Avatar } from '../components/DoctorCard'

export default function BookingFlow({ doc, onConfirm, onBack }) {
  const [step, setStep] = useState(1) // 1=date/time, 2=details
  const [selDate, setSelDate] = useState(0)
  const [selSlot, setSelSlot] = useState(null)
  const [reason, setReason] = useState('')
  const [type, setType] = useState('clinic')

  if (!doc) return null

  const canProceed = selSlot !== null
  const canConfirm = reason.trim().length > 2

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={onBack} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 18 }}>Book Appointment</div>
          <div style={{ fontSize: 12, color: 'var(--text2)' }}>Step {step} of 2</div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: 3, background: 'var(--bg3)' }}>
        <div style={{ height: '100%', background: 'var(--teal)', width: step === 1 ? '50%' : '100%', transition: 'width .3s ease', borderRadius: '0 2px 2px 0' }} />
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {/* Doc info */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '14px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }} className="anim-fadeup">
          <Avatar doc={doc} size={52} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{doc.name}</div>
            <div style={{ fontSize: 13, color: 'var(--text2)' }}>{doc.spec} · ₹{doc.fee}</div>
          </div>
        </div>

        {step === 1 && (
          <>
            {/* Visit type */}
            <div style={{ marginBottom: 24 }} className="anim-fadeup anim-delay-1">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>VISIT TYPE</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[['clinic','🏥','Clinic Visit'],['video','📹','Video Call']].map(([k, icon, label]) => (
                  <button key={k} onClick={() => setType(k)} style={{
                    padding: '14px', borderRadius: 'var(--r)', border: '1px solid', cursor: 'pointer', transition: 'all .15s', textAlign: 'center',
                    background: type === k ? 'var(--teal-dim)' : 'var(--surface)',
                    borderColor: type === k ? 'rgba(63,185,80,0.3)' : 'var(--border)',
                    color: type === k ? 'var(--teal)' : 'var(--text2)'
                  }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date */}
            <div style={{ marginBottom: 24 }} className="anim-fadeup anim-delay-2">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>SELECT DATE</div>
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
                {DATES.map((d, i) => (
                  <button key={i} onClick={() => { setSelDate(i); setSelSlot(null) }} style={{
                    flexShrink: 0, minWidth: 64, padding: '10px 8px', borderRadius: 'var(--r-sm)', border: '1px solid', cursor: 'pointer', textAlign: 'center', transition: 'all .15s',
                    background: selDate === i ? 'var(--teal)' : 'var(--surface)',
                    borderColor: selDate === i ? 'var(--teal)' : 'var(--border)',
                    color: selDate === i ? '#fff' : 'var(--text2)'
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 4 }}>{d.day}</div>
                    <div style={{ fontSize: 20, fontFamily: 'Fraunces, serif', fontWeight: 300 }}>{d.num}</div>
                    <div style={{ fontSize: 10, marginTop: 2, opacity: 0.7 }}>{d.month}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slots */}
            <div style={{ marginBottom: 24 }} className="anim-fadeup anim-delay-3">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>AVAILABLE SLOTS</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {doc.slots.map(slot => {
                  const taken = TAKEN_SLOTS.includes(slot)
                  const selected = selSlot === slot
                  return (
                    <button key={slot} disabled={taken} onClick={() => setSelSlot(slot)} style={{
                      padding: '10px 6px', borderRadius: 'var(--r-sm)', border: '1px solid', cursor: taken ? 'not-allowed' : 'pointer', fontSize: 13, fontWeight: 600, transition: 'all .15s',
                      background: taken ? 'var(--bg3)' : selected ? 'var(--teal)' : 'var(--surface)',
                      borderColor: taken ? 'var(--border)' : selected ? 'var(--teal)' : 'var(--border)',
                      color: taken ? 'var(--text3)' : selected ? '#fff' : 'var(--text)'
                    }}>
                      {slot}
                      {taken && <div style={{ fontSize: 9, fontWeight: 400, marginTop: 2, color: 'var(--text3)' }}>taken</div>}
                    </button>
                  )
                })}
              </div>
            </div>

            <button
              onClick={() => canProceed && setStep(2)}
              disabled={!canProceed}
              style={{
                width: '100%', padding: '14px', background: canProceed ? 'var(--teal)' : 'var(--bg3)',
                color: canProceed ? '#fff' : 'var(--text3)', border: 'none', borderRadius: 'var(--r)',
                fontSize: 15, fontWeight: 700, cursor: canProceed ? 'pointer' : 'not-allowed', transition: 'all .15s'
              }}
            >
              {canProceed ? `Continue → ${DATES[selDate].day} ${DATES[selDate].num} at ${selSlot}` : 'Select a time slot'}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {/* Summary */}
            <div style={{ background: 'var(--teal-dim)', border: '1px solid rgba(63,185,80,0.2)', borderRadius: 'var(--r)', padding: '14px', marginBottom: 24, display: 'flex', gap: 14 }} className="anim-fadeup">
              <div style={{ fontSize: 24 }}>📅</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{DATES[selDate].day}, {DATES[selDate].num} {DATES[selDate].month}</div>
                <div style={{ fontSize: 12, color: 'var(--teal)' }}>{selSlot} · {type === 'clinic' ? 'Clinic Visit' : 'Video Call'}</div>
              </div>
              <button onClick={() => setStep(1)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--teal)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Change</button>
            </div>

            {/* Patient info */}
            <div style={{ marginBottom: 20 }} className="anim-fadeup anim-delay-1">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>PATIENT DETAILS</div>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--blue-dim)', border: '1px solid rgba(88,166,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fraunces, serif', fontSize: 14, color: 'var(--blue)' }}>RV</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Rahul Verma</div>
                  <div style={{ fontSize: 12, color: 'var(--text2)' }}>+91 98765 43210 · 28 yrs</div>
                </div>
              </div>
            </div>

            {/* Reason */}
            <div style={{ marginBottom: 24 }} className="anim-fadeup anim-delay-2">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>REASON FOR VISIT</div>
              <textarea
                value={reason} onChange={e => setReason(e.target.value)}
                placeholder="Describe your symptoms or reason for this appointment..."
                rows={4}
                style={{
                  width: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--r)', padding: '12px 14px', fontSize: 14, color: 'var(--text)',
                  resize: 'none', outline: 'none', lineHeight: 1.6, transition: 'border-color .15s'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(63,185,80,0.4)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Fee summary */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '14px', marginBottom: 20 }} className="anim-fadeup anim-delay-3">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text2)', letterSpacing: 1.5, marginBottom: 12 }}>PAYMENT SUMMARY</div>
              {[
                ['Consultation Fee', `₹${doc.fee}`],
                ['Platform Fee', '₹0'],
                ['GST (18%)', `₹${Math.round(doc.fee * 0.18)}`],
              ].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13 }}>
                  <span style={{ color: 'var(--text2)' }}>{label}</span>
                  <span>{val}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 15 }}>
                <span>Total</span>
                <span style={{ color: 'var(--teal)' }}>₹{doc.fee + Math.round(doc.fee * 0.18)}</span>
              </div>
            </div>

            <button
              onClick={() => canConfirm && onConfirm({ doc, date: `${DATES[selDate].day}, ${DATES[selDate].num} ${DATES[selDate].month}`, time: selSlot, reason, type })}
              disabled={!canConfirm}
              className="anim-fadeup anim-delay-4"
              style={{
                width: '100%', padding: '15px',
                background: canConfirm ? 'var(--teal)' : 'var(--bg3)',
                color: canConfirm ? '#fff' : 'var(--text3)',
                border: 'none', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 700,
                cursor: canConfirm ? 'pointer' : 'not-allowed', transition: 'all .15s'
              }}
              onMouseEnter={e => { if (canConfirm) e.currentTarget.style.opacity = '.85' }}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {canConfirm ? `Confirm & Pay ₹${doc.fee + Math.round(doc.fee * 0.18)}` : 'Add reason to continue'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
