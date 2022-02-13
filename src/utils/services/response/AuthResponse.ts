export interface AuthResponse {
  api_token: string;
  user: User;
  access_token: string;
  avatar_url: string;
}

export interface User {
  id: number;
  nama: string;
  nim: string;
  prodi: string;
  username: string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
}
