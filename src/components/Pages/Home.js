import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';

//Re usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header
                title="Welcome to ATMC"
                subtitle="Its nice to meet you"
                buttonText="Tell Me More"
                showButton={true}
                image={image}
                />

                <Services />
                <Portfolio />
                <Timeline />
                <Team />
             </div>
        )
    }

}

export default Home;
