import React, { Component} from 'react';

class FilmList extends Component{

    render(){

        const filmNodes = this.props.data.map(film => {
            return(
                <Film
                key={film.id}
                name={film.name}>{film.url}

                </Film>

            )
        })

        return(
            <div className="film-list">
                {filmNodes}
            </div>
        )

    }
}

export default FilmList;
