export interface SubmissionPembelajaran {
  id:               number;
  username:         string;
  user_repo:        string;
  tanggal_mulai:    Date;
  tanggal_selesai:  null;
  praktikum_id:     number;
  created_at:       Date;
  updated_at:       Date;
  log_pembelajaran: LogPembelajaran[];
  praktikum:        Praktikum;
}

export interface LogPembelajaran {
  id:             number;
  success:        number;
  pembelajaranid: number;
  created_at:     Date;
  updated_at:     Date;
  runtime_error:  null;
  log_test:       LogTest[];
}

export interface LogPembelajaranFinal {
  id:             number;
  success:        number;
  pembelajaranid: number;
  created_at:     Date;
  updated_at:     Date;
  tanggal_mulai:  Date;
  nama_praktikum: string;
  runtime_error:  null;
  log_test:       LogTest[];
}

export interface LogTest {
  id:                 number;
  log_pembelajaranid: number;
  nama_test_case:     string;
  created_at:         Date;
  updated_at:         Date;
  result:             string;
  message:            null | string;
}

export interface Praktikum {
  id:             number;
  nama_praktikum: string;
  penjelasan:     string;
  template_repo:  string;
  materi_id:      number;
  created_at:     Date;
  updated_at:     Date;
  type:           string;
}
