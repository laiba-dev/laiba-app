import { useEffect, useState } from "react";
import MateriCard from "../components/MateriCard";
import { Heading3 } from "../components/Typography";
import MateriShimmer from "../components/MateriShimmer";
import { useQuery } from "../utils/useQuery";
import {
    MateriFinalData,
    MateriResponse,
} from "../utils/services/response/MateriResponse";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../utils/services/response/ApiResponse";
import useMateriUseCase from "../usecases/materi";

const listMateriInitialState: Array<MateriFinalData> = [];

export default function Materi() {
    const [loading, setLoading] = useState(false);

    const [listMateri, setListMateri] = useState(listMateriInitialState);

    let query = useQuery();
    let pembelajaranId = query.get("pembelajaranId");

    const materiUseCase = useMateriUseCase();

    useEffect(() => {
        setLoading(true);
        materiUseCase
            .getListMateri(
                pembelajaranId !== null ? Number.parseInt(pembelajaranId) : 0
            )
            .then(
                (
                    response: AxiosResponse<ApiResponse<Array<MateriResponse>>>
                ) => {
                    var available = true;
                    const coursesListFinal: Array<MateriFinalData> = [];

                    response.data.data.forEach((course) => {
                        const thiscoursesuccess =
                            course.tanggal_selesai != null;
                        if (thiscoursesuccess) {
                            coursesListFinal.push({
                                ...course,
                                available: true,
                            });
                        } else if (available) {
                            coursesListFinal.push({
                                ...course,
                                available: true,
                            });
                            available = false;
                        } else {
                            coursesListFinal.push({
                                ...course,
                                available: false,
                            });
                        }
                    });

                    setListMateri(coursesListFinal);
                    setLoading(false);
                }
            );
    }, [pembelajaranId]);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
            <Heading3>List Materi</Heading3>
            {loading ? (
                <MateriShimmer />
            ) : (
                listMateri.map((materi) => (
                    <MateriCard key={materi.id} materi={materi} />
                ))
            )}
        </div>
    );
}
