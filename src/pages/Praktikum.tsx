import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { color } from "../components/Color";
import PraktikumCard from "../components/PraktikumCard";
import { Heading3, Text, Title } from "../components/Typography";
import MateriService from "../utils/services/MateriService";
import MateriShimmer from "../components/MateriShimmer";
import { useParams } from "react-router-dom";
import {
  Praktikum,
  PraktikumElement,
  PraktikumFinalElement,
  PraktikumMateri,
} from "../utils/services/response/PraktikumResponse";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../utils/services/response/ApiResponse";

const materiInitialState: PraktikumMateri = {
  id: 0,
  nama: "",
  deskripsi: "",
  framework_id: 0,
  pendahuluan: "",
  url_materi: "",
  created_at: "",
  updated_at: "",
};

const praktikumInitialState: Array<PraktikumFinalElement> = [];

export default function DetailMateri() {
  const [materi, setmateri] = useState(materiInitialState);
  const [praktikum, setPraktikum] = useState(praktikumInitialState);
  const [kuis, setKuis] = useState(praktikumInitialState);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    MateriService("21|qWdKpL3jRqdNts5Sq5uBkMlqxUjnICzCP7ymJDCg")
      .getMateri(id !== undefined ? id : "")
      .then((materiData: AxiosResponse<ApiResponse<Praktikum>>) => {
        //memilih praktikum yang bisa dikerjakan
        var available = true;
        const praktikumList: Array<PraktikumFinalElement> = [];

        materiData.data.data.praktikum.forEach(
          (praktikum: PraktikumElement) => {
            const thiscoursesuccess = praktikum.tanggal_selesai !== null;
            if (thiscoursesuccess) {
              praktikumList.push({
                ...praktikum,
                available: true,
              });
            } else if (available) {
              praktikumList.push({
                ...praktikum,
                available: true,
              });
              available = false;
            } else {
              praktikumList.push({
                ...praktikum,
                available: false,
              });
            }
          }
        );

        setmateri(materiData.data.data.materi);
        setPraktikum(
          praktikumList.filter(
            (value: PraktikumFinalElement) => value.type === "praktikum"
          )
        );
        setKuis(
          praktikumList.filter(
            (value: PraktikumFinalElement) => value.type === "kuis"
          )
        );
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Heading3>{materi.nama}</Heading3>
        </div>
        <Card>
          <div style={{ display: "grid", rowGap: "20px" }}>
            <Title>Pendahuluan</Title>
            <Text color={color.text}>{materi.pendahuluan}</Text>
            <div>
              <Button text={"Download Materi"} onClick={() => {}} />
            </div>
          </div>
        </Card>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Praktikum</Heading3>
      </div>
      <div style={{ marginBottom: "40px" }}>
        {praktikum.map((value) => (
          <PraktikumCard key={value.id} praktikum={value} />
        ))}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Kuis</Heading3>
      </div>
      <div style={{ marginBottom: "20px" }}>
        {loading ? (
          <MateriShimmer />
        ) : (
          kuis.map((value) => (
            <PraktikumCard
              key={value.id}
              praktikum={value}
              // showAlert={showAlert()}
            />
          ))
        )}
      </div>
    </div>
  );
}
