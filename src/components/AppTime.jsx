import { useEffect } from "react";
import { useState } from "react";

function AppTime() {
  let [time, setUpdateTime] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setUpdateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  const hours = time.getHours() % 12;
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = time.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const ampm = time.getHours() >= 12 ? "PM" : "AM";
  return (
    <div className="container my-2 p-2 fs-2">
      <div className="row">
        <div className="col-sm-8 mx-auto col-lg-10 col-12">
          <p>
            This is the current data & time:
            <span className="bg-secondary mx-2 p-2">
              {time.toLocaleDateString()}
            </span>
            -
            <span className="bg-secondary mx-2 p-2">
              {" " + hours + ":" + minutes + ":" + seconds + " " + ampm}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppTime;
