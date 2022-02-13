import React from "react";
import { Title, Text } from "./Typography";
import Card from "./Card";
import { FrameworkResponse } from "../utils/services/response/FrameworkResponse";
import { Link } from "react-router-dom";

export default function PembelajaranCard({
  pembelajaran,
}: {
  pembelajaran: FrameworkResponse;
}) {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        // router.push("/materi?pembelajaranId=" + pembelajaran.id);
      }}
    >
      <Link to={"/materi?pembelajaranId=" + pembelajaran.id}>
        <Card>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <img
                src={pembelajaran.url_gambar}
                alt="Logo Pembelajaran"
                width="156px"
                height="156px"
              />
            </div>
            <Title>{pembelajaran.judul}</Title>
            <Text color="#808080">{pembelajaran.deskripsi}</Text>
          </div>
        </Card>
      </Link>
    </div>
  );
}
