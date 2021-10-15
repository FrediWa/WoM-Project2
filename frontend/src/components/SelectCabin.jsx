import React from 'react'

class SelectCabin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          cabins: []
        }
    }
    
    componentDidMount() {
        const JWT = document.cookie.split('expires').find(row => row.startsWith('jwt=')).split('=')[1]

        fetch('https://wom-project-1.herokuapp.com/cabins/owned', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + JWT
            })
        })
        .then(res => res.json())
        .then(
            (results) => {
                this.setState({
                    isLoaded: true,
                    cabins: results
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    cabinClicked = (e) => {
        if (this.props.onCabinClick) {
            this.props.onCabinClick(e.target)
        }
    }
    
    render() {
        const { error, isLoaded, cabins } = this.state
        
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading your cabins...</p>
        } else {
            return <>
                <div className='addService component'>
                    <div className='component__wrapper'>
                        <h4>Your Cabins</h4>
                        <p>Please select a cabin</p>
                
                        <ul>
                            {cabins.map(cabin => (
                                <li onClick={this.cabinClicked} key={cabin._id} cabin-id={cabin._id}>{cabin.address}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        }
    }
}

export default SelectCabin