import React  from 'react'
import './LandingPage.css'
import { GiPartyPopper } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { MdWavingHand } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { AiOutlineRight } from "react-icons/ai";
import CardCommonItem from './CardCommonItem';
import { GrLocationPin } from "react-icons/gr";
import { FcLink } from "react-icons/fc";
import cardImage from "../../assets/movie.jpg"



function LandingPage() {
    return (
      <div className="landingPage">       
      <div className='leftDiv mt-5 mb-5'>
      <Card className='cardDesign border-5'>
      <Card.Img variant="top" className='img-fluid w-100' src={cardImage} />
      <Card.Body style={{backgroundColor:'#FCF9FC', borderRadius:'900px'}}>
        <Card.Title style={{color:'#240D57', fontSize:'30px'}}>Movie night</Card.Title>
        <Card.Text style={{color:'#828282'}}>
          <MdWavingHand style={{color:"#E7CF0C"}}/> Hosted by 
          <span style={{color:'#4F4F4F', fontWeight:'bold'}}> Elysia</span>
          </Card.Text>
          <div className='d-flex align-items-center' style={{backgroundColor:'white', borderRadius:'8px',}}>
            <div className='ps-2 pt-2 pb-2' style={{width:'70%'}}>
              <Card.Text style={{color:'#240D57'}}><span style={{fontWeight:'bold'}}>14</span> responses . <span style={{color:'#8456EC'}}>see guests</span> </Card.Text>
            </div>
            <div className='pt-2 pb-2' style={{width:'30%'}}>
              <button className='inviteButton'><FaHandshake style={{color:'#F8C01B'}} /> Invite</button>
            </div>
          </div>
       
          <CardCommonItem 
            icon={<FcCalendar/>} 
            firstText="18 August 6:0PM" 
            secondText="to" 
            thirdText="19 August 1:00PM UTC +10"
            arrowIcon={<AiOutlineRight/>}
            />
             <CardCommonItem 
            icon={<GrLocationPin/>} 
            firstText="Street Name" 
            secondText="301 Rowes Lane, WA, 7183" 
            thirdText=""
            arrowIcon={<AiOutlineRight/>}
            />
            <CardCommonItem 
            icon={<FcLink/>} 
            firstText="Link" 
            secondText="netflix.com" 
            thirdText=""
            arrowIcon={<AiOutlineRight/>}
            />
           
      </Card.Body>
    </Card>
          </div>
    <div className='rightDiv'>
          <p className='headerText paraText'>
        Imagine if<br/>
        <span className='gradientHeaderText'> Snapchat</span><br/>
        had events.
        </p>
        <p className='paraText'>Easily host and share events with your friends accross<br/>any social media</p>
        <Link to="create" className='gradientButton mt-4'> <GiPartyPopper/> Create my event</Link>
          </div>
     
      </div>
    );
  }
  
  export default LandingPage;
  