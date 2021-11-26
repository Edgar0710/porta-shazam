import React from 'react';
class CardCancion extends React.Component {
    constructor(props){
        super(props);
    }
   render() {
       const track = this.props.cancion;
       return(

        <div  className="col-12 col-md-6 col-xl-4 mt-2">
                 <div className="card h-100" >
                     <img className="card-img-top" src={track.images.background} alt="Porta"/>
                     <div className="card-body">
                         <h6 className="">{track.title}</h6>
                         <p className="text-bolder">{track.subtitle}</p>
                         <a type="button" className="btn btn-outline-primary btn-block" href={track.url}>Escuchar Ahora</a>
                      </div>
                   </div>
                 </div>
       );
   }

}
export default CardCancion;