import React from "react";
import { LogTest } from "../utils/services/response/SubmissionsResponse";
import { Text } from "./Typography";

export default function KriteriaItem({ kriteria }: { kriteria: LogTest }) {
  return (
    <div className="kriteria-item">
      <img
        src={
          kriteria.result === "success"
            ? "/images/icon-check.svg"
            : "/images/icon-cross.svg"
        }
        alt="Kriteria Sukses"
        width={24}
        height={24}
      />
      <Text>
        {kriteria.nama_test_case.length > 50
          ? kriteria.nama_test_case.slice(0, 50) + "..."
          : kriteria.nama_test_case}
      </Text>
    </div>
  );
}
