import React from 'react';
import LeftCard from './leftCard';
class Container extends React.Component {
    constructor(props) {
        super(props);
    }   
    render() {
      return ( <div className="container mt-2">
            <div className="row" style={{minHeight:'75vh',}}>
                 <LeftCard/>
            </div>
        </div>);
    }
}
export default Container;