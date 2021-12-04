import React from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import moment from 'moment-timezone';
import { addClock } from '../../redux/actions';
import Select from 'react-select'


function AddClockForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const methods = useForm();
    const timezones = moment.tz.names().map(function (timezone) {
        return {
            label: timezone,
            value: timezone
        }
    });
    //console.log("timezone", timezones)
    /**
     * Method to submit the add clock form
     * @param {*} data 
     */
    const onSubmit = (data) => {
        console.log(data);
        console.log("errors", errors)

        dispatch(addClock(data));

    }
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mb-2 col-md-12">
                    <label for="label" className="form-label">Name</label>

                    <input className="form-control"  {...register("timezone", { required: true })} autoComplete="off" />
                    <input type="hidden" defaultValue={Date.now()} {...register('id')} />
                    {errors.timezone?.type === 'required' && <span className="text-danger">TIme zone name is required</span>}
                </div>
                <div className="mb-4 col-md-12">
                    <label for="timezone" className="form-label">Timezone</label>
                    {/* <Select options={options} {...register("tz")} /> */}
                    <Controller
                        control={methods.control}
                        name="tz"
                        rules={{ required: true }}
                        render={({ onChange, value, name, ref }) => (
                            <Select
                                inputRef={ref}
                                classNamePrefix="addl-class"
                                options={timezones}
                                value={timezones.find(tz => tz.value === value)}
                                defaultValue={timezones[0]}
                            />
                        )}
                    />
                    {/* <select className="form-control" {...register("tz")}>
                        {timezones}
                    </select> */}
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    )
}

export default AddClockForm;