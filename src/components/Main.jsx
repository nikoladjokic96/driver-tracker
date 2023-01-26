import React from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import DriverLogs from './DriverLogs'
import LiveTracking from './LiveTracking'
// material ui
import Typography from '@mui/material/Typography'

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/logs" element={<DriverLogs />} />
        <Route path="/tracking" element={<LiveTracking />} />
      </Routes>
    </div>
  )
}

export default Main
