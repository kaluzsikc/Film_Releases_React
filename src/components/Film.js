import React,{ Component} from 'react';

class Film extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li><a href={this.props.children} >{this.props.name}</a></li>
                </ul>
            </div>
        )
    }
}

export default Film;

