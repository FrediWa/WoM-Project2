import React from 'react';
import { AddService, OrderedServices } from '../index';

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard__wrapper'>
                <AddService />
                <OrderedServices />
            </div>
        </div>
    );
}

export default Dashboard;