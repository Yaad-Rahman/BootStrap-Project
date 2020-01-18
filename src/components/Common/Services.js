import React from 'react';
import SingleService from './SingleSerive';

const services = [
    {title: 'E-Commerce', description:'This is the sample description. This project is for learing purpose', icon: 'fa-shopping-cart'},
    {title: 'Responsice Design', description:'This is the sample description. This project is for learing purpose', icon: 'fa-laptop'},
    {title: 'Web Security', description:'This is the sample description. This project is for learing purpose', icon: 'fa-lock'}
]

class Services extends React.Component {
    render() {
        return(
            <section className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row text-center">
                {services.map((service, index) => {
                    return <SingleService {...service} key={index} />

                })}
               
              </div>
            </div>
          </section>

        );
    }
}

export default Services;