import React from 'react';
import classes from './Conditions.module.css'

const Conditions = (props) => {

    return (

        <div className={classes.Wrapper}>

            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

            {props.loading && <div className={classes.Loader}>Loading...</div>}

            {/* DISPLAY THIS DATA ONLY WHEN THE HTTP RESPONSE CODE IS 200 (SUCESSFUL) */}
            {props.responseObj.cod === 200 ? 

                <div>

                    {/* DISPLAYS CITY NAME */}
                    <p><strong>{props.responseObj.name}</strong></p>

                    {/*  Math.round() RETURNS A SUPPLIED NUMERIC EXPRESSION ROUNDED TO THE NEAREST INTEGER. */}
                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees</p>

                    {/* DISPLAYS WEATHER DESCRIPTION */}
                    <p>{props.responseObj.weather[0].description}</p>

                </div>

            : null }

        </div>
    )
}

export default Conditions;