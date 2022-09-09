import React from "react";
import { YouTube } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { FacebookRounded } from "@mui/icons-material";

const SocialIcons = () => {
  const iconsStyles = { width: "48px", height: "48px", };

  return (
    <div>
      <div className="icons">
        <a href="#">
          <FacebookRounded sx={iconsStyles} />
        </a>
        <a href="#">
          <Twitter sx={iconsStyles} />
        </a>
        <a href="#">
          <YouTube sx={iconsStyles} />
        </a>
      </div>

      <style jsx="true">
        {`
        .icons {
          display: flex;
          justify-content: space-around;
          gap: 1em;
        }
      `}
      </style>
    </div>
  );
};

export default SocialIcons;
