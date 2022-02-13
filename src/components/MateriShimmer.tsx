import React from "react";
import { Shimmer } from "react-shimmer";
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
          <Shimmer height={16} width={100} /> <br />
          <Shimmer height={14} width={500} />
        </div>
      </Card>
    </div>
  );
}
