import React from "react";
import northernPic from "./image/northern_hemisphere.png";
import southernPic from "./image/southern_hemisphere.png";

const hemisphereConfig = {
  Northern: {
    text: "Northern Hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "Southern Hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className="ui raised text container segment">
      <div className="ui teal bottom attached label">
        You are currently in the <strong>{text}</strong>
      </div>
      <div className="image">
        <img src={picture} width="100%" alt="hemisphere picture" />
      </div>
    </div>
  );
};

export default HemisphereDisplay;
