import React from 'react';

function AddService() {
    return (
        <div class='addService component'>
            <div class='component__wrapper'>
                <div class='addService__cabins'>
                    <h5>Select Cabin</h5>
                    <div></div>
                </div>

                <div class='addService__services'>
                    <h5>Choose Service</h5>
                    <div></div>
                </div>

                <div class='addService__order'>
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