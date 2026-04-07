"use client"

import { useState } from "react";

export default function DateForm(){
    //needed states
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    function calculatePricing(start_date:Date, end_date:Date){
        
    }

    function handleSubmit(){
        //convert the string states into actual date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        
    }

    return (
        <form>
            <label>Start</label>
            <input type="datetime-local" name="start" value={startDate} onChange={(e)=> {
                console.log(typeof e.target.value)
                console.log(e.target.value)
                setStartDate(e.target.value)
                
                }}/>

            <label>End</label>
            <input type="datetime-local" name="end" value={endDate} onChange={(e)=> setEndDate(e.target.value)}/>
            <button type="submit">Calculate Pricing</button>
        </form>
    )
}