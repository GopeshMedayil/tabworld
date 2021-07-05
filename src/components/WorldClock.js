import { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { useSelector, useDispatch } from "react-redux";
import { loadTimes } from '../redux/timeZoneReducer';
import { addClock } from '../redux/actions'
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
        <li key={tz.id}>
            {tz.name}{" "}
            <Moment date={new Date()} tz={tz.tz} format={"h:mm:ss A"}>
                {currentTime}
            </Moment>
        </li>
    ));
    return (
        <div>
            <h2>Clock</h2>
            <button onClick={() => dispatch(addClock({
                id: 1000,
                name: "Test",
                tz: "Europe/Berlin"
            }))}>Add Clock</button>
            {listItems}
        </div>
    );
}

export default WorldClock;
