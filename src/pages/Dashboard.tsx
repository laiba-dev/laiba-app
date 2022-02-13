import { Heading3, Heading2, Text } from "../components/Typography";
import Card from "../components/Card";
import { color } from "../components/Color";
import React from "react";

export default function Dashboard() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
      }}
    >
      <div>
        <div style={{ marginBottom: "20px" }}>
          <Heading3>Selamat Datang, Irfan Rafif</Heading3>
        </div>
        <div className="dashboard-stats">
          <Card>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              >
                {/* <img
              src={session.user.image}
              alt="Foto Profil"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            /> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                {/* <Title>{session.user.name}</Title> */}
                <Text color={color.text}>D-IV Teknik Informatika</Text>
                <Text color={color.text}>1841720176</Text>
              </div>
            </div>
          </Card>
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                columnGap: "20px",
              }}
            >
              <div style={{ flex: "1" }}>
                <Heading2>1</Heading2>
                <Text color={color.text}>Materi dikerjakan</Text>
              </div>
              <div style={{ flex: "1" }}>
                <Heading2>1</Heading2>
                <Text color={color.text}>Praktikum dikerjakan</Text>
              </div>
              <div style={{ flex: "1" }}>
                <Heading2>4</Heading2>
                <Text color={color.text}>Percobaan dilakukan</Text>
              </div>
              <div style={{ flex: "1" }}>
                <Heading2>70%</Heading2>
                <Text color={color.text}>Praktikum berhasil dikerjakan</Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
