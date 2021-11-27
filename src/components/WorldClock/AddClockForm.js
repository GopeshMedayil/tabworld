import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import moment from 'moment-timezone';
import { addClock } from '../../redux/actions';

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
                <div class="mb-2 col-md-12">
                    <label for="label" className="form-label">Label</label>
                    <input className="form-control" {...register("name")} autoComplete="off" />
                    <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                </div>
                <div class="mb-4 col-md-12">
                    <label for="timezone" className="form-label">Timezone</label>
                    <select className="form-control" {...register("tz")}>
                        {timezones}
                    </select>
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    )
}

export default AddClockForm;