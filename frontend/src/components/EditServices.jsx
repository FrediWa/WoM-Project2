import React from 'react'

function stringDateToTimeStamp(x){
    let y = x.split("-")
    let d = new Date()
    d.setDate(y[2])
    d.setMonth(y[1])
    d.setYear(y[0])
    return d.getTime()
}

class EditServices extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
          error: null,
          isLoaded: false,
          services: [],
          orders: [],
          JWT: document.cookie.split('expires').find(row => row.startsWith('jwt=')).split('=')[1]
        }
    }

    componentDidMount() {

        fetch('https://wom-proj2-fk.herokuapp.com/getorders/'+this.props.cabin.attributes[0].value, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.state.JWT,
            })
        })
        .then(res => res.json())
        .then(
            (results) => {
                this.setState({
                    isLoaded: true,
                    orders: results.Results[0]
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )

        fetch('https://wom-proj2-fk.herokuapp.com/services', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.state.JWT,
            })
        })
        .then(res => res.json())
        .then(
            (results) => {
                this.setState({
                    isLoaded: true,
                    services: results.Results[0]
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

    addService = (e) => {
        e.preventDefault()

        fetch('https://wom-proj2-fk.herokuapp.com/orders', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.state.JWT,    
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                'service': parseInt(document.getElementById('serviceSelect').value, 10),
                'cabinId': this.props.cabin.attributes[0].value,
                'startDate': stringDateToTimeStamp(document.getElementById('dateStart').value).toString(),
                'endDate': stringDateToTimeStamp(document.getElementById('dateEnd').value).toString()
            })
        })
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
        });
    }

    editServices = (e) => {
        console.log(e.target.attributes)
    }

    deleteService = (e) => {
        
        console.log(e.currentTarget)
        fetch('https://wom-proj2-fk.herokuapp.com/orders', {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.state.JWT,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                'id': e.target.attributes[0].value
            })
        })
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data);
        });
    }

    render() {
        let { error, isLoaded, orders, services } = this.state

        console.log("orders " + orders)

        if (orders == null) {
            orders = [];
        }

        if (this.props.cabin.attributes !== undefined)  {
            if (error) {
                return <p>Error: {error.message}</p>
            } else if (!isLoaded) {
                return <p>Loading your services...</p>
            } else {
                return <>
                    <div className='editServices component'>
                        <div className='component__wrapper'>
                            <h4>{this.props.cabin.innerHTML}</h4>
                            {orders.map(order => (
                                <div>
                                    <ul>
                                        <li key={order.id} order-id={order.id}>{order.service}</li>
                                        <button order-id={order.id} className='btn' onClick={this.editServices}>Edit <i className='far fa-edit'></i></button>
                                        <button order-id={order.id} className='btn btn--danger' onClick={this.deleteService}>Delete <i className='far fa-trash-alt'></i></button>
                                    </ul>
                                </div>
                            ))}

                            <form action='#' method='POST' onSubmit={this.addService}>
                            <input type='date' name='date' id='dateStart' />
                                <input type='date' name='date' id='dateEnd' />
                                <select name='service' id='serviceSelect'>
                                    {services.map(service => (
                                        <option value={service.id}>{service.service}</option>
                                    ))}
                                </select>
                                
                                <button type='submit' className='btn' onClick={this.addService}>Add <i className='far fa-edit'></i></button>
                            </form>
                        </div>
                    </div>
                </>
            }
        } else {
            return <p>😥 Nothing to show...</p>
        }
    }
}

export default EditServices