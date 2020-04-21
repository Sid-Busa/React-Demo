import React,{Component} from 'react';
import ReactLoading from 'react-loading';
import {connect} from 'react-redux';
import { selectCity } from '../../actions/action'
import {Modal} from 'react-bootstrap';

import './style.css';

class Modelpopup extends Component{
    render(){
        const {showModel,getAllCity} = this.props
        let toggle = showModel
        const handleClose = () =>{
            toggle = showModel
        }   
        return (
            <Modal size="lg" show={toggle} onHide={handleClose} >
                <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="city">
                    { getAllCity.length!==0 ? getAllCity.map(data => (
                        <div key={data.city_id}>
                            <div className="city-info" onClick={() =>this.props.selectCity(data.city)} >
                                <img src={data.city_photo} alt={data.city}  />
                                <p>{data.city}</p> 
                            </div>
                        </div>
                    )) : <ReactLoading type='cylon' color='black' className="loading-position" />}
                </div>    
                </Modal.Body>
            </Modal>
        )
    }
}
const mapStateToProps = state => {
    return{
        showModel : state.showModel,
        getAllCity : state.cityData
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        selectCity : (cityName) => dispatch(selectCity(cityName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modelpopup)