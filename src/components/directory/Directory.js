import "../../styles/directory.scss";
import React, { Component } from "react";
import MenuItem from "../menu/MenuItem";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "Chicken",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/chicken"
      },
      {
        title: "Mutton",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/mutton"
      },
      {
        title: "Fish",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/fish"
      },
      {
        title: "Seafood",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/seafood"
      },
      {
        title: "Bestsellers",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/bestsellers"
      }
    ]
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
