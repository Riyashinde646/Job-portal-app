import React, { useState } from "react";

const AddJob =() => {

    const [title,setTitle] = useState('');
    const[location,setLocation] = useState('Bangalore');
    const[category,setCategory] = useState ('Programming');
    const[level,setlevel] = useState('Beginner level');
    const[salary,setsalary] = useState('0');


    return(
        <form>

            <div>
                <p>Job Title</p>
                <input type="text"  placeholder="Type Here"
                onChange={e=>} />
            </div>
        
        </form>
    )
}

export default AddJob