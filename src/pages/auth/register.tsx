import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { color } from "../../components/Color";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import { Text, Title } from "../../components/Typography";
import apiClient from "../../utils/services/apiClient";
import { useQuery } from "../../utils/useQuery";

export default function Register() {
  const query = useQuery();
  const [userData, setUserData] = React.useState({
    nim: "",
    nama: "",
    prodi: "",
    username: "",
  });

  const navigate = useNavigate();

  const register = () => {
    apiClient
      .post("/api/register", userData)
      .then((response) => {
        if (response.status >= 400) {
          alert(response.data.data);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const username = query.get("username");
    setUserData({ ...userData, username: username || "" });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: color.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "347px" }}>
        <Card>
          <div>
            <Title>Register</Title>
            <Text color={color.text}>
              Kamu sudah punya akun github. Tapi username kamu belum terdaftar
              di Sistem kami. Silahkan registrasi untuk melanjutkan
            </Text>
            <Divider />
            <FormField
              type="number"
              value={userData.nim}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setUserData({ ...userData, nim: event.currentTarget.value })
              }
              placeholder="NIM"
            />
            <FormField
              type="text"
              value={userData.nama}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setUserData({ ...userData, nama: event.currentTarget.value })
              }
              placeholder="Nama"
            />
            <FormField
              type="text"
              value={userData.prodi}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setUserData({ ...userData, prodi: event.currentTarget.value })
              }
              placeholder="Program Studi"
            />
            <FormField
              type="text"
              value={userData.username || ""}
              onChange={(event: React.FormEvent<HTMLInputElement>) =>
                setUserData({
                  ...userData,
                  username: event.currentTarget.value,
                })
              }
              placeholder="Username Github"
              disabled
            />
            <Button
              text="Daftar"
              onClick={() => {
                register();
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
