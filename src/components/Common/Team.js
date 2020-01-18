import React from 'react';

import yaad from '../assets/img/team/yaad.jpg';
import galib from '../assets/img/team/galib.jpg';
import aku from '../assets/img/team/aku.jpg';
import TeamMember from './TeamMember';


const team = [
  {name: 'Yaadul Hakim', designation: 'COO', image: yaad},
  {name: 'Galib Gaab', designation: 'CEO', image: galib},
  {name: 'Aku Akash', designation: 'CDO', image: aku}
];

class Team extends React.Component {
    render() {
        return (
            <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        {team.map((item, i) => {
          return <TeamMember {...item} key={i} />
        })}
        
        
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
        )
    }
}

export default Team;