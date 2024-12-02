import axios from 'axios';
import React, { useState } from 'react';

function Forms() {
    const [data, setData] = useState({ fname: "", lname: "" });

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            setData(response. data); 
            console.log(response.data); 
            setData("")
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,  
        }));
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                    value={data.fname}
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <span>
                    <input
                        value={data.lname}
                        type="text"
                        name="lname"
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </span>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Forms;
