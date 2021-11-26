import React from 'react';
class Footer extends React.Component {
 constructor(props){
     super(props);
 }
render(){
    return  <footer className="footer d-flex justify-content-center bg-white p-4 border-top mt-2">
    <div className="ft-info my-auto">
        <div className="ft-info-item xs-text ">Copyright © 2021 Edgar Carrera Carrasco APi Shazam</div>
     </div>
 </footer>;
}

}
export default Footer;


