import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState, useEffect } from "react";
import { API } from "../../util/api/Api.js";
import "./home.css";
import moment from "moment";
import POPup from "../../popup/popup.jsx";

let api = new API();

function Home() {
  const [timeMap, setTimeMap] = useState(new Map());
  const [events, setEvents] = useState([]);
  const [displayMap, setDisplayMap] = useState({});
  const [popup, setPopup] = useState(false);

  const getEventKey = (time) => {
    return moment(time).local().format("YYYY-MM-DDTkk:mm:ss");
  };

  const getEndTime = (time) => {
    const dateTime = new Date(time);
    dateTime.setSeconds(dateTime.getSeconds() + 1);
    return moment(dateTime).local().format("YYYY-MM-DDTkk:mm:ss");
  };

  useEffect(() => {
    handleReload();
    console.log("Home page Reloaded");
    //eslint-disable-next-line
  }, []);

  const handleEventClick = ({ event }) => {
    const key = getEventKey(event.start);
    setDisplayMap({title:key,records:Object.values(timeMap.get(key))});
    setPopup(true);
  };

  const handleReload = () => {
    return new Promise((resolve) => {
      api
        .getTriggerTimes()
        .then((res) => {
          var startTimeMap = new Map();
          var newEvents = [];
          console.log(res.data.message);
          res.data.message.forEach((details) => {
            var { TRIGGER_TIMES, ...props } = details;
            TRIGGER_TIMES.forEach((element) => {
              const newList = startTimeMap.has(getEventKey(element))
                ? startTimeMap.get(getEventKey(element)).concat([{ ...props }])
                : [{ ...props }];
              startTimeMap.set(getEventKey(element), newList);
            });
          });
          startTimeMap.forEach((value, key) => {
            if (!isNaN(new Date(key).getTime())) {
              const color = moment(key).isAfter(new Date()) ? "red" : "green";
              newEvents.push({
                title: "Event " + newEvents.length,
                start: key,
                end: getEndTime(key),
                color: color,
              });
            }
          });
          setEvents(newEvents);
          setTimeMap(startTimeMap);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div>
      <div>
        <POPup
          elementsMap={displayMap}
          stateValue={{ popup, setPopup }}
        ></POPup>
        <FullCalendar
          plugins={[timeGridPlugin]}
          timeZone="local"
          initialView="timeGridWeek"
          allDaySlot={false}
          eventMinHeight={20}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "today",
          }}
          buttonText={{ today: "Current Week" }}
          eventClick={handleEventClick}
          slotDuration="00:10:00"
          events={events}
          slotLabelInterval="00:30:00"
          nowIndicator={true}
        />
      </div>
    </div>
  );
}

export default Home;
