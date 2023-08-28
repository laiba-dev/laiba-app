import React from "react";
import Card from "../components/Card";
import { Text, Heading3, Title } from "../components/Typography";
import { color, shadow } from "../components/Color";
import TestResultCard from "../components/TestResultCard";
import SubmissionService from "../utils/services/SubmissionService";
// import Shimmer from "react-js-loading-shimmer";
import { useParams } from "react-router-dom";
import { SubmissionsDetailResponse } from "../utils/services/response/SubmissionDetailResponse";
import MateriShimmer from "../components/MateriShimmer";
import { useSelector } from "react-redux";
import { AppState } from "../utils/redux/store";

const testResultInitialState: SubmissionsDetailResponse = {
  pembelajaran: {
    praktikum: {
      id: 0,
      nama_praktikum: "",
      materi_id: 0,
      penjelasan: "",
      template_repo: "",
      type: "",
      created_at: Date.prototype,
      updated_at: Date.prototype,
    },
    id: 0,
    praktikum_id: 0,
    created_at: Date.prototype,
    tanggal_mulai: Date.prototype,
    tanggal_selesai: Date.prototype,
    username: "",
    user_repo: "",
    updated_at: Date.prototype,
  },
  id: 0,
  success: 0,
  pembelajaranid: 0,
  created_at: Date.prototype,
  updated_at: Date.prototype,
  log_test: [],
  runtime_error: "",
};

export default function DetailSubmission() {
  const [testResult, setTestResult] = React.useState(testResultInitialState);
  const [loading, setLoading] = React.useState(true);

  let { id } = useParams();
  let auth = useSelector((state: AppState) => state.auth);

  React.useEffect(() => {
    setLoading(true);
    SubmissionService(auth.api_token ?? "")
      .getSubmission(id !== undefined ? id : "")
      .then((response) => {
        const logPembelajaranData = response.data.data;
        setTestResult(logPembelajaranData);
        setLoading(false);
      });
  }, [id, auth.api_token]);

  return (
    <div>
      <div className="container-row">
        <Heading3>Detail Hasil Pembelajaran</Heading3>
      </div>
      <div className="container-row">
        <Card>
          {loading ? (
            <div></div>
          ) : (
            <div className="submission-time">
              <Text color={color.text}>Nama Mahasiswa</Text>
              <Text>{testResult.pembelajaran.username}</Text>
              <Text color={color.text}>Praktikum yang dikerjakan</Text>
              <Text>{testResult.pembelajaran.praktikum.nama_praktikum}</Text>
              <Text color={color.text}>Waktu Pengumpulan</Text>
              <Text>{testResult.created_at.toString()}</Text>
            </div>
          )}
        </Card>
      </div>
      {loading ? (
        <MateriShimmer />
      ) : (
        testResult.log_test.map((test) => (
          <div className="container-row" key={test.id}>
            <TestResultCard test={test} />
          </div>
        ))
      )}
      {testResult !== null && (testResult?.runtime_error?.length || 0) > 0 && (
        <div className="container-row">
          <div
            style={{
              width: "inherit",
              height: "inherit",
              padding: "20px",
              borderRadius: "4px",
              background: "white",
              boxShadow: shadow,
              border: "1px solid #D00000",
            }}
          >
            <Title>Runtime Error</Title>
            <div
              style={{
                padding: "20px",
                background: "#FFDBDB",
                marginTop: "20px",
              }}
            >
              {testResult?.runtime_error?.split("\n").map((row, index) => (
                <div
                  key={index}
                  style={{
                    fontFamily: "Fira Code",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#202020",
                  }}
                >
                  {row}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
