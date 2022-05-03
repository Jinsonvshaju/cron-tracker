import React from "react";
import "./popup.css";

function POPUP({ elementsMap, stateValue, ...otherProps }) {
  const { popup, setPopup } = stateValue;
  const { title, records } = elementsMap;

  const handleEventClick = () => {
    setPopup(false);
  };

  return (
    <div className={popup ? "popup" : "hide"}>
      <div className="title">{title}</div>
      {typeof records !== "undefined" && records.length > 0 ? (
        <table className="table">
          <tbody>
            <tr>
              {Object.keys(records[0]).map((element) => {
                return <th className="th" key={element}>{element}</th>;
              })}
            </tr>
            {records.map((val, key) => {
              return (
                <tr key={key} className="tr">
                  {Object.values(val).map((value) => {
                    return <td className="td" key={Math.random()}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}
      <div className="dismiss-btn">
        <button className="dismiss-popup-btn" onClick={handleEventClick}>
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default POPUP;
