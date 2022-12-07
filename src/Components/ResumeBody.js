
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';



const ResumeBody = () => {

    return (

    <div style={{position: "absolute", top: "256px", width: "50em"}}>
        <div className='heading-text' style={{ paddingLeft: "70px", marginBottom: "8px"}}> WORK EXPERIENCE </div>
        <div className='educations'> IT Professional </div>
        <div className='school'> Amrit Vichar hindi newspaper </div>
        <div className='green-block' style={{ top: "48px" }}> </div>
        <div className='year' style={{ marginBottom: "4px" }}> 09/2022 - Present <span style={{paddingLeft: "260px"}}> Bareilly, UP </span> </div>
        <div className='year'> Achievements/Tasks </div>
        <ul>
            <li style={{ paddingLeft: "70px"}}><CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Because of my dedication towards providing immediate solution to user queries and management <br /> <span style={{paddingLeft: "25px"}}> work, </span> 
                I am transferred to the company's Head Office.
            </li>
        </ul>
        <div className='educations' style={{ marginTop: "24px" }}> IT Professional </div>
        <div className='school'> Amrit Vichar hindi newspaper </div>
        <div className='green-block' style={{ top: "210px" }}> </div>
        <div className='year' style={{ marginBottom: "8px" }}> 09/2021 - 08/2022 <span style={{paddingLeft: "260px"}}> Lucknow, UP </span> </div>
        <div className='year'> Achievements/Tasks </div>
        <ul>
            <li style={{ paddingLeft: "70px"}}><CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Successfully resolved queries in the areas of software and networking of 80+ users in the entire <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lucknow division
                of the company enhancing user efficiency and workflow of the company.
            </li>
        </ul>
        <div className='educations' style={{ marginTop: "24px" }}> IT Intermediate </div>
        <div className='school'> Amrit Vichar hindi newspaper </div>
        <div className='green-block' style={{ top: "376px" }}> </div>
        <div className='year' style={{ marginBottom: "8px" }}> 09/2020 - 08/2021 <span style={{paddingLeft: "260px"}}> Moradabad, UP </span> </div>
        <div className='year'> Achievements/Tasks </div>
        <ul>
            <li style={{ paddingLeft: "70px"}}><CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Successfully troubleshot software and networking issues of 40+ users which increased
                my solution <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;providing skills and managed inventory files.
            </li>
        </ul>
        <div className='educations' style={{ marginTop: "24px" }}> Backup Engineer and Lab Assistant </div>
        <div className='school'> Jetking Infotrain Limited </div>
        <div className='green-block' style={{ top: "540px" }}> </div>
        <div className='year' style={{ marginBottom: "8px" }}> 09/2019 - 02/2020 <span style={{paddingLeft: "260px"}}> Bareilly, UP </span> </div>
        <div className='year'> Achievements/Tasks </div>
        <ul>
            <li style={{ paddingLeft: "70px"}}><CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Set up and management of labs for online classes and examination of 20+ students. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Troubleshooting hardware and software issues in computer systems.
            </li>
        </ul>

    </div>

    )

}


export default ResumeBody;
