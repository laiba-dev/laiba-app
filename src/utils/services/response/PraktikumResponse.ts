export interface Praktikum {
  materi: PraktikumMateri;
  praktikum: PraktikumElement[];
}

export interface PraktikumMateri {
  id: number;
  nama: string;
  deskripsi: string;
  framework_id: number;
  pendahuluan: string;
  url_materi: string;
  created_at: string;
  updated_at: string;
}

export interface PraktikumElement {
  id: number;
  nama_praktikum: string;
  penjelasan: string;
  template_repo: string;
  materi_id: number;
  type: string;
  user_repo: string;
  petunjuk: string;
  tanggal_selesai: string;
  created_at: string;
  updated_at: string;
}

export interface PraktikumFinalElement {
  id: number;
  nama_praktikum: string;
  penjelasan: string;
  template_repo: string;
  materi_id: number;
  type: string;
  available: boolean;
  user_repo: string;
  petunjuk: string;
  tanggal_selesai: string;
  created_at: string;
  updated_at: string;
}
