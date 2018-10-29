import React,{ Component} from 'react';

class Film extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.name}</li>
                </ul>
            </div>
        )

    }

}

export default Film;

