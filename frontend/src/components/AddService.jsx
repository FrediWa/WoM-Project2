import React from 'react';

function AddService() {
    return (
        <div className='addService component'>
            <div className='component__wrapper'>
                <div className='addService__cabins'>
                    <h5>Select Cabin</h5>
                    <div></div>
                </div>

                <div className='addService__services'>
                    <h5>Choose Service</h5>
                    <div></div>
                </div>

                <div className='addService__order'>
                    <h5>Choose Date & Order</h5>
                    <div>
                        <input type='date' name='date' id='date' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddService;