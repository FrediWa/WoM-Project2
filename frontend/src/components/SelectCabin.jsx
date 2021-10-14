import React from 'react';

class SelectCabin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        }
    }
    
    componentDidMount() {
        const JWT = document.cookie.split('expires').find(row => row.startsWith('jwt=')).split('=')[1];

        fetch("http://localhost:5000/cabins", {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + JWT
            })
        })
            .then(res => res.json())
            .then(
                (cabins) => {
                    this.setState({
                        isLoaded: true,
                        items: cabins
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
        .catch(error => {
            this.setState({
                isLoaded: false,
                error
            })
        })
    }
    
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading your cabins...</p>;
        } else {
            return (
                <div className='addService component'>
                    <div className='component__wrapper'>
                        <h5>Your Cabins</h5>
                        <ul>
                            {items.map(item => (
                                <li key={item._id}> {item.address} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default SelectCabin;