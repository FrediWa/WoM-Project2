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
                    {this.state.currentCabin.attributes ? <EditServices cabin={this.state.currentCabin}/> : <p></p> }
                </div>
            </div>
        </>
    }
}

export default Dashboard