import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PlaceIcon from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';



const ResumeHeader = () => {

    return (

        <>
        <div className='header-container'>
            <div className='header-item1' > Faraz Husain </div>
            <div style={{fontSize: "20px", paddingLeft: "72px", paddingTop: "26px", height: '2.1em', color: "#20B2AA" }}> Front-End Developer </div>
            <div className='header-item3'> A <strong>dependable person</strong> who is good at time management. With problem-solving skills and curious mindset, always thinking to
              provide the best possible services which enhances user efficiency and further the company's goals. </div>

            <div style={{paddingLeft: "262px"}}> +91-6396765059 <PermContactCalendarIcon style={{paddingLeft: "30px",  color: '#36454F'}} /> </div>
            <div style={{paddingLeft: "225px"}}> hfaraz316@gmail.com <EmailIcon style={{paddingLeft: "30px", color: '#36454F'}} /> </div>
            <div style={{paddingLeft: "45px"}}> 537, Rohili Tola, old city, Bareilly, UP, Pin: 243005 <PlaceIcon style={{paddingLeft: "30px", color: '#36454F'}} /> </div>
            <div style={{paddingLeft: "145px"}}> linkedin.com/in/faraz-h-18b500a9 <LinkedInIcon style={{paddingLeft: "30px", color: '#36454F'}} /> </div>
            <div style={{paddingLeft: "220px"}}> github.com/coder-faraz <GitHubIcon style={{paddingLeft: "30px", color: '#36454F'}} /> </div>
            <Divider sx={{width: "160%", margin: "5px 0", backgroundColor: "#36454F"}} />
        </div>
        <div style={{height: "4.2em", width: "2.5em", backgroundColor: '#36454F', margin: "16px 0 0"}}> </div>
        </>

    )
}


export default ResumeHeader;
