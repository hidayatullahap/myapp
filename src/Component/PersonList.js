import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: [],
    };


    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res);
            this.setState({persons: res.data});
        });
    }

    render(){
    return(
        <ul className="list-group">
            {this.state.persons.map(person => 
                <li className="list-group-item"key={person.id}>
                    <img className="img-bulat" alt="{person.name}" width="50px" length="50px" src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"/>
                    {person.name}
                </li>
            )}
        </ul>
    )}
}