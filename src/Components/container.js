import React from 'react';
import LeftCard from './leftCard';
import ListCanciones from './listCanciones';
class Container extends React.Component {
    constructor(props) {
        super(props);
    }   
    render() {
      return ( <div className="container mt-2">
            <div className="row" style={{minHeight:'75vh',}}>
                 <LeftCard/>
                 <ListCanciones/>
            </div>
        </div>);
    }
}
export default Container;