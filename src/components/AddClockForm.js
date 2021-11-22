import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import moment from 'moment-timezone';
import { addClock } from '../redux/actions';

function AddClockForm() {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const timezones = moment.tz.names().map(function (timezone) {
        return <option key={timezone} value={timezone}>{timezone}</option>
    });
    /**
     * Method to submit the add clock form
     * @param {*} data 
     */
    const onSubmit = (data) => {
        console.log(data);
        dispatch(addClock(data));

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("name")} />
                <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                <select {...register("tz")}>
                    {timezones}
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddClockForm;