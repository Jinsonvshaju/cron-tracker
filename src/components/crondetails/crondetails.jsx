import React from "react";
import { useState, useEffect } from "react";
import FileUpload from "../fileUpload/FileUpload.jsx";
import { API } from "../util/api/Api.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
let api = new API();

function CronDetails(props) {
  const [records, setRecords] = useState([]);
  const [isFileUploaded, setFileUploaded] = useState(false);
  const [cronMessage, setCronMessage] = useState("Validate Cron");
  const [cron, setCron] = useState("");

  useEffect(() => {
    getEntries();
    console.log("Cron Input form page reloaded");
    //eslint-disable-next-line
  }, [isFileUploaded]);

  const getEntries = () => {
    return new Promise((resolve) => {
      api
        .getRecords()
        .then((res) => {
          setRecords(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const setCronInfo = (cron) => {
    return new Promise((resolve) => {
      api
        .getCronInfo(cron)
        .then((res) => {
          setCronMessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleCronChange = (event) => {
    const value = event.target.value;
    if (value.trim().length > 0) {
      setCronInfo(value);
    } else setCronMessage("Validate Cron");
    setCron(value);
  };

  return (
    <div>
      <FileUpload uploadFlag={{ set: setFileUploaded, get: isFileUploaded }} />
      {records.length > 0 ? (
        <div>
          <table className="table table-striped table-hover">
            <tbody>
              <tr>
                {Object.keys(records[0]).map((element) => {
                  return <th key={element}>{element}</th>;
                })}
              </tr>
              {records.map((val, key) => {
                return (
                  <tr key={key}>
                    {Object.values(val).map((value) => {
                      return <td key={Math.random()}>{value}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
      <div className="fixed-bottom">
        <form className="form-floating">
          <input
            type="text"
            className="form-control is-invalid"
            id="floatingInputInvalid"
            onChange={handleCronChange}
            value={cron}
          />
          <label htmlFor="floatingInputInvalid">{cronMessage}</label>
        </form>
      </div>
    </div>
  );
}

export default CronDetails;
