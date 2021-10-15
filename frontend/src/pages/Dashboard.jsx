import React from 'react'
import { SelectCabin, EditServices } from '../index'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCabin: {}
        }
    }
    
    onCabinClick = (e) => {
          this.setState({
            currentCabin: e
        })                                     
    }

    render() {
        return <>
            <div className='dashboard'>
                <div className='dashboard__wrapper'>
                    <SelectCabin onCabinClick={this.onCabinClick} />
                    <EditServices cabin={this.state.currentCabin} />
                </div>
            </div>
        </>
    }
}

export default Dashboard