import React from "react";
import Shimmer from "react-js-loading-shimmer";
import Card from "./Card";

export default function MateriShimmer() {
  return (
    <div>
      <Card>
        <div
          style={{
            width: "100%",
          }}
        >
          <Shimmer height={"30px"} /> <br />
          <Shimmer height={"30px"} />
        </div>
      </Card>
    </div>
  );
}
