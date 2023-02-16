import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { color } from "./Color";
import { Text, Title } from "./Typography";
import swal from "sweetalert";
import { PraktikumFinalElement } from "../utils/services/response/PraktikumResponse";
import { useSelector } from "react-redux";
import { AppState } from "../utils/redux/store";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../utils/services/response/ApiResponse";
import { MulaiPraktikumResponse } from "../utils/services/response/MulaiPraktikumResponse";
import ReactMarkdown from "react-markdown";
import useMateriUseCase from "../usecases/materi";

export default function PraktikumCard({
    praktikum,
}: {
    praktikum: PraktikumFinalElement;
}) {
    const materiUseCase = useMateriUseCase();

    const [isGenerating, setIsGenerating] = useState(false);

    const renderButton = () => {
        if (praktikum.tanggal_selesai !== null) {
            return (
                <Button text={"Selesai"} disabled={true} onClick={() => {}} />
            );
        } else if (praktikum.user_repo !== null) {
            return (
                <Button
                    text={"Lanjutkan"}
                    onClick={() => {
                        window.location.href =
                            "https://github.com/" + praktikum.user_repo;
                    }}
                />
            );
        } else if (praktikum.available === true) {
            return (
                <Button
                    text={"Kerjakan"}
                    onClick={() => {
                        setIsGenerating(true);
                        materiUseCase
                            .mulaiPraktikum(praktikum.id)
                            .then(
                                (
                                    response: AxiosResponse<
                                        ApiResponse<MulaiPraktikumResponse>
                                    >
                                ) => {
                                    setIsGenerating(false);
                                    window.location.href =
                                        "https://github.com/" +
                                        response.data.data.user_repo;
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
                    disabled={isGenerating}
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

    const [showMarkdown, setshowMarkdown] = useState(false);

    return (
        <div style={{ marginBottom: "20px" }}>
            <Card>
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <Title>{praktikum.nama_praktikum}</Title>
                            <Text color={color.text}>
                                {praktikum.penjelasan}
                            </Text>
                        </div>
                        {renderButton()}
                    </div>
                    {showMarkdown && (
                        <div
                            style={{
                                border: "1px solid #e2e2e2",
                                padding: "0px 16px",
                                borderRadius: "4px",
                                marginTop: "16px",
                            }}
                        >
                            <ReactMarkdown>{praktikum.petunjuk}</ReactMarkdown>
                        </div>
                    )}
                    <div
                        style={{ marginTop: "16px" }}
                        onClick={() => setshowMarkdown(!showMarkdown)}
                        className={"pointer"}
                    >
                        <Text>
                            {showMarkdown
                                ? "Sembunyikan petunjuk"
                                : "Tampilkan petunjuk"}
                        </Text>
                    </div>
                </div>
            </Card>
        </div>
    );
}
