import React from "react";
import "./destination.scss";
import locationIcon from "../../assets/image/location-icon.svg";
function Destination(props) {
  return (
    <>
      <div className={"container destination"}>
        <div className={"destination__left"}>
          <img
            className={"destination__img"}
            src={props.imageUrl}
            alt={props.title}
          />
        </div>
        <div className={"destination__right"}>
          <div className={"destination__location"}>
            <img
              className={"destination__location--icon"}
              src={locationIcon}
              alt={"Location Icon"}
            />
            <p className={"destination__country"}>{props.location}</p>
            <a
              href={props.googleMapsUrl}
              className={"destination__geo-location"}
            >
              View on Google Maps
            </a>
          </div>
          <div className={"destination__title"}>
            <h1 className={"destination__title--text"}>{props.title}</h1>
          </div>
          <div className={"destination__time"}>
            <p className={"destination__time--start"}>{props.startDate}</p>
            <span className={"destination__time--dash"}> - </span>
            <p className={"destination__time--end"}>{props.endDate}</p>
          </div>
          <div className={"destination__desc"}>
            <p className={"destination__desc--text"}>{props.description}</p>
          </div>
        </div>
      </div>
      <hr className={"horizontal__ruler"} />
    </>
  );
}

export default Destination;
