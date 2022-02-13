import { LogTest } from "./SubmissionsResponse";

export interface SubmissionsDetailResponse {
  id:             number;
  success:        number;
  pembelajaranid: number;
  created_at:     Date;
  updated_at:     Date;
  runtime_error:  string | null;
  log_test:       LogTest[];
  pembelajaran:   Pembelajaran;
}

export interface SubmissionDetailPraktikum {
  id:             number;
  nama_praktikum: string;
  penjelasan:     string;
  template_repo:  string;
  materi_id:      number;
  created_at:     Date;
  updated_at:     Date;
  type:           string;
}
export interface Pembelajaran {
  id:              number;
  username:        string;
  user_repo:       string;
  tanggal_mulai:   Date;
  tanggal_selesai: Date | null;
  praktikum_id:    number;
  created_at:      Date;
  updated_at:      Date;
  praktikum:       SubmissionDetailPraktikum;
}
