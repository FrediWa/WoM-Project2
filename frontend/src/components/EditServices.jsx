import React from 'react'

class EditServices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          services: []
        }
    }

    componentDidMount() {
        const JWT = document.cookie.split('expires').find(row => row.startsWith('jwt=')).split('=')[1]

        fetch('https://reqres.in/api/users?page=1', {
            method: 'GET',
            /*headers: new Headers({
                'Authorization': 'Bearer ' + JWT
            })*/
        })
        .then(res => res.json())
        .then(
            (results) => {
                this.setState({
                    isLoaded: true,
                    services: results.data
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

    editCabin = (e) => {
        console.log(e.target.attributes)
    }

    render() {
        const { error, isLoaded, services } = this.state

        const cabin = this.props.cabin

        if (cabin.attributes !== undefined)  {
            if (error) {
                return <p>Error: {error.message}</p>
            } else if (!isLoaded) {
                return <p>Loading your services...</p>
            } else {
                return <>
                    <div className='editServices component'>
                        <div className='component__wrapper'>
                            <h4>{cabin.innerHTML}</h4>
                            <ul>
                                {services.map(service => (
                                    <li onClick={this.editCabin} key={service.id} service-id={service.id}>{service.first_name}</li>
                                ))}
                            </ul>
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