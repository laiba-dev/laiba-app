import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import PembelajaranCard from "../components/PembelajaranCard";
import { Heading3 } from "../components/Typography";
import useMateriUseCase from "../usecases/materi";
import { ApiResponse } from "../utils/services/response/ApiResponse";
import { FrameworkResponse } from "../utils/services/response/FrameworkResponse";

const listFrameworkInitialState: Array<FrameworkResponse> = [];

export default function Pembelajaran() {
    const materiUseCase = useMateriUseCase();

    useEffect(() => {
        materiUseCase
            .getListPembelajaran()
            .then(
                (
                    response: AxiosResponse<
                        ApiResponse<Array<FrameworkResponse>>
                    >
                ) => {
                    setListFramework(response.data.data);
                }
            );
    }, []);

    const [listFramework, setListFramework] = useState(
        listFrameworkInitialState
    );

    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <Heading3>Pilih Pembelajaran</Heading3>
            </div>
            <div className="pembelajaran-list">
                {listFramework.map((value) => (
                    <PembelajaranCard key={value.id} pembelajaran={value} />
                ))}
            </div>
        </div>
    );
}
