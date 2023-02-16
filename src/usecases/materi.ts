import { useMateriService } from "../utils/services/MateriService";

const useMateriUseCase = () => {
    const materiService = useMateriService();
    async function getListPembelajaran() {
        const pembelajaran = await materiService.getListPembelajaran();
        return pembelajaran;
    }

    async function getListMateri(pembelajaranId: number) {
        const pembelajaran = await materiService.getListMateri(pembelajaranId);

        return pembelajaran;
    }

    async function getDetailMateri(materiId: string) {
        const pembelajaran = await materiService.getMateri(materiId);
        return pembelajaran;
    }

    async function mulaiPraktikum(praktikumId: number) {
        const pembelajaran = await materiService.mulaiPraktikum(praktikumId);
        return pembelajaran;
    }

    return {
        getListPembelajaran,
        getListMateri,
        getDetailMateri,
        mulaiPraktikum,
    };
};

export default useMateriUseCase;
