import { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from '../redux/actions';
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
            {/* <button onClick={() => dispatch(addClock({
                id: Date.now(),
                name: "Test",
                tz: "Europe/Berlin"
            }))}>Add Clock</button> */}
            <button onClick={() => dispatch(showModal({
                showModal: true,
                modalType: "addClock"
            }))}>Add</button>
            {listItems}
        </div>
    );
}

export default WorldClock;
