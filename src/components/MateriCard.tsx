import React from "react";
import Card from "./Card";
import { color } from "./Color";
import Button from "./Button";
import { Text, Title } from "./Typography";
import { MateriFinalData } from "../utils/services/response/MateriResponse";
import { useNavigate } from "react-router-dom";

export default function MateriCard({ materi }: { materi: MateriFinalData }) {
  let navigate = useNavigate();

  const goToDetail = () => {
    navigate("/materi/" + materi.id);
  };

  return (
    <div>
      <Card>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Title>{materi.nama}</Title>
            <Text color={color.text}>{materi.deskripsi}</Text>
          </div>
          <div>
            <Button
              text={
                materi.available
                  ? "Lihat detail"
                  : "Kerjakan praktikum sebelumnya"
              }
              onClick={goToDetail}
              disabled={!materi.available}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
