import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/ggg.jpeg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class About extends React.Component {
    render() {
        return(
          <div>
                <Header
                title="Welcome to ATMC"
                subtitle="Its really bad story"
                showButton={false}
                image={image}
                />
                <Timeline />
                <Team />
         
             </div>
            
        )
    }

}

export default About;