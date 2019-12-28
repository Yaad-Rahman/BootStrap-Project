import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

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
             </div>
        )
    }

}

export default Home;
