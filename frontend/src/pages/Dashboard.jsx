import React from 'react';
import AddService from '../components/AddService';
import OrderedServices from '../components/OrderedServices';

function Dashboard() {
    return (
        <div className='dashboard'>
            <div>
                <AddService />
                <OrderedServices />
            </div>
        </div>
    );
}

export default Dashboard;