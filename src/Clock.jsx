import React from "react";
import "./style.css";

function Clock(props) {
    let timezone = props.timezone.toString();

    let timezone_hours = timezone.substring(0, 3) - 3;
    let timezone_minutes = timezone.substring(0, 1) + timezone.substring(4, 6);

    let time = new Date();

    time.setHours(time.getHours() + Number(timezone_hours));
    time.setMinutes(time.getMinutes() + Number(timezone_minutes));

    let t;

    if (props.format === '12') {
        if (time.getHours() > 12) {
            time.setHours(time.getHours() - 12);
            t = "pm";
        } else {
            t = "am";
        }
		if(time.getHours() === 0) {
			time.setHours(time.getHours() + 12);
			t = 'pm';
		}
    } else {
        t = "";
    }

    return <h2 className="timer">It's {time.toLocaleTimeString()} {t} now. UTC: {timezone}</h2>
}

export default Clock;
