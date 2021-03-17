import { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";
import { useSelector } from "react-redux";
function WorldClock() {
    const [currentTime, setCurrentTime] = useState(Date.now());
    const timezoneData = useSelector((state) => state.timeZones.tzs);
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
            {listItems}
        </div>
    );
}

export default WorldClock;
