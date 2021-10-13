import React from 'react'
import { SelectCabin, OrderedServices } from '../index'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard__wrapper'>
                <SelectCabin />
                <OrderedServices />
            </div>
        </div>
    )
}

export default Dashboard