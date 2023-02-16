import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import apiClient from "./apiClient";

export const useMateriService = () => {
    const apiToken = useSelector((state: AppState) => state.auth.api_token);

    const getListPembelajaran = () =>
        apiClient.get("/api/framework", {
            headers: {
                Accept: "application/json",
            },
        });

    const getListMateri = (pembelajaranId: number) =>
        apiClient.get(`/api/framework/${pembelajaranId}/materi`, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + apiToken,
            },
        });

    const getMateri = (materiId: string) =>
        apiClient.get(`/api/materi/${materiId}/praktikum`, {
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + apiToken,
            },
        });

    const mulaiPraktikum = (praktikumId: number) =>
        apiClient.post(
            `/api/praktikum/${praktikumId}/mulai`,
            {},
            {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + apiToken,
                },
            }
        );

    return {
        getListPembelajaran,
        getListMateri,
        getMateri,
        mulaiPraktikum,
    };
};
