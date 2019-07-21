import React, { Component } from "react";
import ShopData from "../helpers/ShopData";
import CollectionPreview from "../helpers/CollectionPreview";

class ShopBestsellers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData
    };
  }

  render() {
    console.log(this.state);
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopBestsellers;
