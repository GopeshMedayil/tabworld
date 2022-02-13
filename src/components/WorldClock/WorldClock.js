import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from '../../redux/actions';
import './WorldClock.css'

function WorldClock() {
    const dispatch = useDispatch();
    const [currentTime, setCurrentTime] = useState(Date.now());
    const timezoneData = useSelector((state) => {
        // console.log("inside use slector", state.timeZones.tzs);
        return state.timeZones.tzs
    });

    useEffect(() => {
        const tick = setInterval(() => {
            const now = Date.now();
            setCurrentTime(now);
        }, 1000);
        return () => clearInterval(tick);
    }, []);
    const listItems = timezoneData.map((tz) => (
        // <div key={tz.id} className="row">
        //     <div className="col-6" >
        //         <div className="card">
        //             <h5 className="card-title">{tz.name}</h5>
        //             <h6 className="card-subtitle mb-2 text-muted">{tz.tz}</h6>
        //         </div>
        //     </div>
        //     <div className="col-6 align-end" >
        //         <Moment format="HH:mm:ss" tz={tz.tz}>
        //             {currentTime}
        //         </Moment>
        //     </div>
        // </div >
        <div key={tz.id} className="card1">
            <div className="test-left">
                <p className="card-title text-primary">{tz.timezone}</p>
                <p className="card-subtitle mb-2 text-muted">{tz.tz}</p>
            </div>
            <div className="text-right">
                <Moment format="hh:mm A" tz={tz.tz}>
                    {currentTime}
                </Moment>
            </div >
        </div >

    ));

    return (
        <div>
            <div className="card-name">
                <div className="clock-title">World Clock</div>
                <i onClick={() => dispatch(showModal({
                    showModal: true,
                    modalType: "addClock"
                }))} className="bi bi-plus-square-fill clock-add"></i>
            </div>



            {/* <button onClick={() => dispatch(addClock({
                id: Date.now(),
                name: "Test",
                tz: "Europe/Berlin"
            }))}>Add Clock</button> */}


            <div className="">
                {listItems}
            </div>

        </div>
    );
}

export default React.memo(WorldClock);
