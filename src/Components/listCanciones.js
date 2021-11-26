import React from 'react';
import CardCancion from './cardCancion';

class ListCanciones extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            canciones: [],
        }
    }
    componentWillMount() {
        fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40286729&locale=en-US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "shazam.p.rapidapi.com",
                "x-rapidapi-key": "4cc8708256msh48ed60a88d30a22p1282eejsnfb621607ed88"
            }
        })
        .then(response => response.json()).then(response => {
            if(response){
            this.setState({
                 canciones:response.tracks
                });
            }
        });
    }
    render() {
       let  renderSongs=  <div className="col text-center" style={{padding: "90px 0px"}}>
       <div style={{fontSize:100}}>
          <img src={`${process.env.PUBLIC_URL}/Content/Images/not-founf.png`} className="img-responsive" alt="not-foud"/>
       </div>
           <div className=""><h4 className="card-title mb-1">Ups... no se encontro ninguna canción.</h4></div>
        </div>;
        if(this.state.canciones){
           renderSongs= this.state.canciones.map((cancion,i) =>
           <CardCancion cancion={cancion} key={i}/>
         );
        }
        return <div className="col-12 col-md-8">
        <div className="card rounded  h-100">
            <div className="card-body">
                <h4 className="text-center">Lista de canciones</h4>
                <div className="row" id="list_song">
                  {renderSongs}
                </div>
            </div>
        </div>
    </div>;
    }

}

export default ListCanciones;