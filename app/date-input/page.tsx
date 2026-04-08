"use client"

import { ReactElement, useState } from "react";

export default function DateForm(){
    //needed states
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    function calculatePricing(start_date:Date, end_date:Date){
        //convert the string states into actual date objects
        const nightly_rate = 55
        const start = new Date(start_date);
        const end = new Date(end_date);
        const diff = (end.getTime() - start.getTime()) / 1000;
        const day_seconds = 60*60*24;
        //calculate the units
        //less than 24 hr stay
        if (diff < day_seconds){
            return nightly_rate
        }
        
        const nights = Math.floor(diff/day_seconds);
        const extended_care_units = diff % day_seconds;
        if (extended_care_units < 2*60*60){
            return nights * nightly_rate
        }
        else if(extended_care_units >= 2*60*60 && extended_care_units <= 8*60*60){
            return nights * nightly_rate + 0.5*nightly_rate
        }
        else{
            return (nights + 1) * nightly_rate
        }
    }

    function handleSubmit(e:React.SubmitEvent){
        e.preventDefault();
        const total_price = calculatePricing(new Date(startDate), new Date(endDate));
        console.log(`Total Price: ${total_price}`);
    }

    return (
        <form onSubmit={handleSubmit}>
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