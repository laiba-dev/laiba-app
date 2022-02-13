export type MateriResponse = {
  id: number,
  nama: string,
  deskripsi: string,
  framework_id: number,
  pendahuluan: string,
  url_materi: string,
  created_at: string,
  updated_at: string,
  tanggal_selesai?: any
}

export type MateriFinalData = {
  id: number,
  nama: string,
  deskripsi: string,
  framework_id: number,
  pendahuluan: string,
  url_materi: string,
  created_at: string,
  updated_at: string,
  available: boolean
  tanggal_selesai?: string | null
}