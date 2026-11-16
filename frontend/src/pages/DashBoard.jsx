import React from 'react'
import Header from '../components/Header.jsx'
import StatusCard from '../components/StatusCard.jsx'

function DashBoard() {
    return (
        <header>
            <Header />
            <main>
                <StatusCard />
            </main>
        </header>
    )
}

export default DashBoard