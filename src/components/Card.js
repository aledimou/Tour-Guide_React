import React, { useState } from "react";
import "./cardStyle.css";
import { GrZoomIn, GrZoomOut } from "react-icons/gr";
import { data } from "../data";

const mystyle = {
  width: "1000px",
  height: "800px",
  padding: "100px"
};

const Card = () => {
  const [castles, setCastles] = useState(data);
  const [show, setShow] = useState(true);

  const removeItem = (id) => {
    let newList = castles.filter((castle) => castle.id !== id);
    setCastles(newList);
  };

  const showImgFull = (e) => {
    const castleZoom = castles.filter((castle) => castle.img === e.target.src);
    if (castleZoom) {
      setShow(false);
    }
  };

  return (
    <>
      {castles.map((castle) => {
        let { id, name, img, content } = castle;

        return (
          <div className="card-container" key={id}>
            <h2 className="card-name">
              <i className="fas fa-map-marker-alt"></i>
              {name}
            </h2>
            {show ? (
              <div>
                <img
                  onClick={showImgFull}
                  id={id}
                  className="card-img"
                  src={img}
                  alt="Castle Img"
                ></img>
              </div>
            ) : (
              <div>
                <img
                  onClick={() => {
                    setShow(true);
                  }}
                  className="card-img"
                  src={img}
                  alt="Castle Img"
                  style={mystyle}
                ></img>
              </div>
            )}
            {show ? (
              <button
                className="btn-zoomIn"
                type="btn"
                onClick={() => {
                  setShow(false);
                }}
              >
                <GrZoomIn />
              </button>
            ) : (
              <button
                className="btn-zoomOut"
                onClick={() => {
                  setShow(true);
                }}
              >
                <GrZoomOut />
              </button>
            )}
            <h4>Description:</h4>
            <p className="card-content">
              {content}
              {/* <button className="btn-read-more">...Read More</button> */}
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Card;
