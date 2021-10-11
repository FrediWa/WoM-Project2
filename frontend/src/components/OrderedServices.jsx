import React from 'react';

function OrderedServices() {
    return(
        <div className='orderedServices component'>
            <div class='component__wrapper'>
                <h5>Ordered Services</h5>
                <div class='orderedServices__grid'>

                </div>
                <div class='orderedServices__buttons'>
                    <button class='btn'>Change</button>
                    <button class='btn'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default OrderedServices;