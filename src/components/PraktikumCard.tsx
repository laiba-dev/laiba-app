import React from "react";
import Button from "./Button";
import Card from "./Card";
import { color } from "./Color";
import { Text, Title } from "./Typography";
import MateriService from "../utils/services/MateriService";
import swal from "sweetalert";
import { PraktikumFinalElement } from "../utils/services/response/PraktikumResponse";
import { useSelector } from "react-redux";
import { AppState } from "../utils/redux/store";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../utils/services/response/ApiResponse";
import { MulaiPraktikumResponse } from "../utils/services/response/MulaiPraktikumResponse";

export default function PraktikumCard({
  praktikum,
}: {
  praktikum: PraktikumFinalElement;
}) {
  const auth = useSelector((state: AppState) => state.auth);

  const renderButton = () => {
    if (praktikum.tanggal_selesai !== null) {
      return <Button text={"Selesai"} disabled={true} onClick={() => {}} />;
    } else if (praktikum.user_repo !== null) {
      return (
        <Button
          text={"Lanjutkan"}
          onClick={() => {
            window.location.href = "https://github.com/" + praktikum.user_repo;
          }}
        />
      );
    } else if (praktikum.available === true) {
      return (
        <Button
          text={"Kerjakan"}
          onClick={() => {
            MateriService(auth.api_token)
              .mulaiPraktikum(praktikum.id)
              .then(
                (
                  response: AxiosResponse<ApiResponse<MulaiPraktikumResponse>>
                ) => {
                  window.location.href =
                    "https://github.com/" + response.data.data.user_repo;
                }
              )
              .catch((err) => {
                console.log(err);
                swal({
                  text: "Gagal memulai pembelajaran",
                  title: "Gagal memulai pembelajaran",
                  icon: "error",
                });
              });
          }}
        />
      );
    } else {
      return (
        <Button
          text={"Kerjakan praktikum sebelumnya"}
          disabled={true}
          onClick={() => {}}
        />
      );
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Title>{praktikum.nama_praktikum}</Title>
            <Text color={color.text}>{praktikum.penjelasan}</Text>
          </div>
          {renderButton()}
        </div>
      </Card>
    </div>
  );
}
