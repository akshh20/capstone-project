import React, { useState } from 'react'
import { INITIAL_APPTS } from './data'
import Home from './pages/Home'
import FindDoctors from './pages/FindDoctors'
import DoctorProfile from './pages/DoctorProfile'
import BookingFlow from './pages/BookingFlow'
import Dashboard from './pages/Dashboard'
import BottomNav from './components/BottomNav'
import SuccessModal from './components/SuccessModal'

export default function App() {
  const [page, setPage] = useState('home')
  const [prevPage, setPrevPage] = useState(null)
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [bookingDoc, setBookingDoc] = useState(null)
  const [appointments, setAppointments] = useState(INITIAL_APPTS)
  const [success, setSuccess] = useState(null)

  function navigate(to, data = null) {
    setPrevPage(page)
    setPage(to)
    if (data?.doc) setSelectedDoc(data.doc)
    if (data?.bookingDoc) setBookingDoc(data.bookingDoc)
  }

  function handleConfirm(appt) {
    const newAppt = { id: 'a' + Date.now(), ...appt, status: 'upcoming' }
    setAppointments(prev => [newAppt, ...prev])
    setBookingDoc(null)
    setSuccess(appt)
    navigate('dashboard')
  }

  function cancelAppt(id) {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelled' } : a))
  }

  const upcomingCount = appointments.filter(a => a.status === 'upcoming').length

  const pageProps = { navigate, appointments, cancelAppt }

  return (
    <div style={{ maxWidth: 430, margin: '0 auto', minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
        {page === 'home'    && <Home {...pageProps} />}
        {page === 'find'    && <FindDoctors {...pageProps} />}
        {page === 'profile' && <DoctorProfile doc={selectedDoc} {...pageProps} />}
        {page === 'booking' && <BookingFlow doc={bookingDoc || selectedDoc} onConfirm={handleConfirm} onBack={() => navigate(prevPage || 'find')} />}
        {page === 'dashboard' && <Dashboard appointments={appointments} cancelAppt={cancelAppt} navigate={navigate} />}
      </div>

      <BottomNav page={page} navigate={navigate} upcomingCount={upcomingCount} />

      {success && (
        <SuccessModal
          appt={success}
          onClose={() => { setSuccess(null); navigate('dashboard') }}
        />
      )}
    </div>
  )
}
