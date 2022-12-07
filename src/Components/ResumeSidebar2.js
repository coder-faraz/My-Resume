
import CircleIcon from '@mui/icons-material/Circle';


const ResumeSidebar2 = () => {

    return (

        <div style={{position: "absolute", top: "476px", left: "860px", width: "30em"}}>
           <div className='heading-text' style={{ marginBottom: "6px" }}> PROJECTS </div>

           <div className='projects'> News Monkey </div>
            <div className='text'> <CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Created a website that displays news categorised in various <br /> &nbsp;&nbsp;&nbsp;&nbsp; sections using React class based components and packages
                <br /> &nbsp;&nbsp;&nbsp;&nbsp; like react router, bootstrap and infinite scroll component. </div>

           <div className='projects'> Expense Tracker </div>
            <div className='text'> <CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Created a website that lists the total balance of the user <br /> &nbsp;&nbsp;&nbsp;&nbsp; after calculating income and expenses
                using context <br /> &nbsp;&nbsp;&nbsp;&nbsp;  hook of react. </div>

           <div className='projects'> Multi-Step Form </div>
            <div className='text'> <CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Created a website that accepts multi-page form input from <br /> &nbsp;&nbsp;&nbsp;&nbsp; the user. This taught me the use of state and props in React. </div>

           <div className='projects'> Text-Utils </div>
            <div className='text'> <CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Created a website that provides various options to manipulate <br /> &nbsp;&nbsp;&nbsp;&nbsp; user input like, convert to uppercase, lowercase, copy. </div>

           <div className='projects'> Windows Migration DCB Bank, Bareilly, UP </div>
            <div className='text'> <CircleIcon style={{fontSize: "10px", color: "#20B2AA"}} /> &nbsp; Successfully migrated 10+ users from Win 7 to Win 10. </div>
        </div>

    )

}


export default ResumeSidebar2;
