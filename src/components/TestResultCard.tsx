import React from "react";
import { Text } from "./Typography";
import { shadow } from "./Color";
import { color } from "./Color";
import { LogTest } from "../utils/services/response/SubmissionsResponse";

export default function TestResultCard({ test }: { test: LogTest }) {
  const [showDetail, setShowDetail] = React.useState(false);
  const isError = test.result === "error";

  return (
    <div
      style={{
        width: "inherit",
        height: "inherit",
        padding: "20px",
        borderRadius: "4px",
        background: isError ? "white" : color.success,
        boxShadow: shadow,
        border: isError ? "1px solid #D00000" : undefined,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Text color={isError ? "#202020" : "white"}>
            {test.nama_test_case}
          </Text>
          <Text color={isError ? "#202020" : "white"}>{test.result}</Text>
        </div>
        {isError && (
          <div
            onClick={() => setShowDetail(!showDetail)}
            className={"pointer " + (showDetail ? "button-rotate" : "")}
          >
            <img
              src="/images/icon-down.svg"
              alt="Detail Hasil Pembelajaran"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
      {isError && showDetail && (
        <div
          style={{ padding: "20px", background: "#FFDBDB", marginTop: "20px" }}
        >
          {test?.message?.split("\n").map((row: string) => (
            <Text key={row}>{row}</Text>
          ))}
        </div>
      )}
    </div>
  );
}
