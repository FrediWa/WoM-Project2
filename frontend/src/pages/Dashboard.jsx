import React from 'react';
import AddService from '../components/AddService';
import OrderedServices from '../components/OrderedServices';

function Dashboard() {
    return (
        <div className='dashboard'>
            <div class='dashboard__wrapper'>
                <AddService />
                <OrderedServices />
            </div>
        </div>
    );
}

export default Dashboard;