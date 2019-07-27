import "../../styles/directory.scss";
import React from "react";
import MenuItem from "../item/MenuItem";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/selectors/directorySelectors";

import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
