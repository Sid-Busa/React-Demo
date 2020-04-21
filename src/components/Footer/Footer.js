import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
import './style.css'
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-logo">
                    <img  /> 
                </div>
                <div className="footer-social-link">
                    <SocialIcon url="https://www.facebook.com/BookMyShowIN" bgColor="#888888" className="icon-style"    />
                    <SocialIcon url="http://linkedin.com/in/jaketrent" bgColor="#888888" className="icon-style"  />
                    <SocialIcon url="https://twitter.com/BookMyShow/" bgColor="#888888" className="icon-style" />
                    <SocialIcon url="https://www.instagram.com/bookmyshowin/" bgColor="#888888" className="icon-style" />
                    <SocialIcon url="https://www.youtube.com/user/BookMyShow/featured" bgColor="#888888" className="icon-style" />                    
                    <SocialIcon url="https://in.pinterest.com/bookmyshow/" bgColor="#888888" className="icon-style" />
                    <SocialIcon url="http://linkedin.com/in/jaketrent" bgColor="#888888"className="icon-style" />
                </div>    
                <div className="footer-text">
                <p>Copyright 2020 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
                <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
                </div>
            </div>
        )
    }
}   

export default Footer