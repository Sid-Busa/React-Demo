import React,{Component} from 'react';
import Carousel from 'react-multi-carousel';
import {Container,Row,Col,Card} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import './style.css';
class Main extends Component{   
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return(
            <Container>
                <Row>
                    <Col lg={3} className="main-sidebar">
                        <div className="epmty-box">
                        </div>
                        <div className="treinding-list">
                            <h2 className="treinding-title">
                                Trending Searches
                            </h2>
                            <div className="treinding-card">
                                <h4>Asur</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                            <div className="treinding-card">
                                <h4>Sraboner Dhara</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                            <div className="treinding-card">
                                <h4>Jurassic World (3D)</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                            <div className="treinding-card">
                                <h4>Sooryavanshi</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                            <div className="treinding-card">
                                <h4>Sholay</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                            <div className="treinding-card">
                                <h4>Hacked</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                            <div className="treinding-card">
                                <h4>Twilight</h4>
                                <p className="lang-eng">Movie</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>    

                    <h2 className="title">Discovers</h2>

                    <Carousel responsive={responsive} className="carousole-border">

                        <Card>
                            <Card.Img id="imggg" variant="top" src="https://in.bmscdn.com/discovery_card/onlineevents_06-04-2020-04-57-38-966.png" />
                        </Card>
                        <Card id="discovers">
                            <Card.Img id="imggg" variant="top" src="https://in.bmscdn.com/discovery_card/onlineevents_06-04-2020-04-57-38-966.png" />
                        </Card> 
                        <Card id="discovers">
                            <Card.Img id="imggg" variant="top" src="https://in.bmscdn.com/discovery_card/onlineevents_06-04-2020-04-57-38-966.png" />
                        </Card>
                        <Card id="discovers">
                            <Card.Img id="imggg" variant="top" src="https://in.bmscdn.com/discovery_card/onlineevents_06-04-2020-04-57-38-966.png" />
                        </Card>
                           
                    </Carousel>
                            <div className='main-title'>    
                                <h2 className="title">Events</h2>
                                <a href="#" className="title-link-all">View All</a>
                            </div>
                            <Carousel responsive={responsive} className="carousole-border"> 

                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>
                                
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                   
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/jonmodine-ekok-suman-et00127412-2020-2-22-t-18-38-18.jpg" />
                                    <Card.Body>
                                 
                                  
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                   
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="//in.bmscdn.com/Events/moviecard/hridaye-pancham-et00126960-2020-2-17-t-20-18-13.jpg" />
                                    <Card.Body>
                                 
                                   
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                  
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>
                                   
                                
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                   
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>
                                
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                    
                                    </Card.Body>
                                </Card>
                            </Carousel>  
                            
                            <div className='main-title'>    
                                <h2 className="title">Plays</h2>
                                <a href="#" className="title-link-all">View All</a>
                            </div>
                            <Carousel responsive={responsive} className="carousole-border">
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>                                
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>                                   
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/jonmodine-ekok-suman-et00127412-2020-2-22-t-18-38-18.jpg" />
                                    <Card.Body>             
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>           
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="//in.bmscdn.com/Events/moviecard/hridaye-pancham-et00126960-2020-2-17-t-20-18-13.jpg" />
                                    <Card.Body>
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                  
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body> 
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div> 
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>     
                                    </Card.Body>
                                </Card>
                            </Carousel>

                            <div className='main-title'>    
                                <h2 className="title">Sports</h2>
                                <a href="#" className="title-link-all">View All</a>
                            </div>

                            <Carousel responsive={responsive} className="carousole-border">
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>               
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>                             
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/jonmodine-ekok-suman-et00127412-2020-2-22-t-18-38-18.jpg" />
                                    <Card.Body>
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>
                                   
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="//in.bmscdn.com/Events/moviecard/hridaye-pancham-et00126960-2020-2-17-t-20-18-13.jpg" />
                                    <Card.Body>                       
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>                   
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>             
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>             
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>            
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>                  
                                    </Card.Body>
                                </Card>
                            </Carousel>
                            <div className='main-title'>    
                                <h2 className="title">Activities</h2>
                                <a href="#" className="title-link-all">View All</a>
                            </div>

                            <Carousel responsive={responsive} className="carousole-border">
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>     
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>            
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/jonmodine-ekok-suman-et00127412-2020-2-22-t-18-38-18.jpg" />
                                    <Card.Body>      
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>                          
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="//in.bmscdn.com/Events/moviecard/hridaye-pancham-et00126960-2020-2-17-t-20-18-13.jpg" />
                                    <Card.Body>
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>      
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>     
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="https://in.bmscdn.com/Events/moviecard/the-10-pm-instagram-show-et00129334-2020-3-29-t-8-11-50.jpg" />
                                    <Card.Body>                                
                                        <div className="card-desrtiption-data">
                                            <div className="card-desrtiption-data-1">
                                                11<br/>
                                                APR<br/>
                                                unwards<br/>
                                            </div>
                                            <div className="card-desrtiption-data-2">
                                                <p className="card-desrtiption-data-2-title">The 10 PM Instagram Show</p>
                                                <p>The comedy club on instagram</p>
                                                <p>Comedy Shows</p>
                                                <p>Rs.0 Onwards</p>
                                            </div>
                                        </div>                  
                                    </Card.Body>
                                </Card>
                            </Carousel>                     
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Main