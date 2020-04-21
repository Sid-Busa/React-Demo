import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Banner from '../Banner';
import Main from '../Main';
import Footer from '../Footer';
import { getCity } from '../../actions/action'
import Model from '../Modelpopup';

class Home extends Component{
    render(){
        const { showModel } = this.props
        return (
            <>
                <Header />
                <Banner />
                <Main />
                <Footer />
                <Model />
                {console.log(this.props.getAllCity)}
            </>
        )
    }
    componentDidMount(){
        {this.props.getCity()}

    }
}
const mapStateToProps = state => {
    return {
        showModel : state.showModel,
        getAllCity : state.cityData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCity : () => dispatch(getCity())
    }
}    
export default connect(mapStateToProps,mapDispatchToProps)(Home)