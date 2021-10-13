import React from 'react';

function OrderedServices() {
    return(
        <div className='orderedServices component'>
            <div className='component__wrapper'>
                <h5>Edit / Delete Services</h5>
                <div className='orderedServices__grid'>

                </div>
                <div className='orderedServices__buttons'>
                    <button className='btn'>Edit <i className="far fa-edit"></i></button>
                    <button className='btn btn--danger'>Delete <i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    );
}

export default OrderedServices;