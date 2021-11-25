import React from 'react';
class LeftCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-4  d-flex justify-content-center">
            <div className="card" >
                <img className="card-img-top" src={`${process.env.PUBLIC_URL}/Content/Images/avatar.jpg`} alt="Porta" />
                <div className="card-body">
                  <h4 className="card-title">Nombre:Porta</h4>
                  <h5 className="card-text">Genero: Hip-Hop/Rap</h5>
                  <p className="card-text text-justify">Christian Jiménez Bundo, más conocido como Porta, su nombre artístico, es un rapero español. Era un niño de nueve años cuando consiguió su primer casete recopilatorio con los principales intérpetes del rap. Al poco tiempo, empezó a grabar maquetas que difundía en redes sociales.</p>
                </div>
              </div>
        </div>
        );
    }
}

export default LeftCard;