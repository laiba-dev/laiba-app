import React from "react";
import SubmissionCard from "../components/SubmissionCard";
import { Heading3 } from "../components/Typography";
import SubmissionService from "../utils/services/SubmissionService";
import { useState } from "react";
import MateriShimmer from "../components/MateriShimmer";
import { AxiosResponse } from "axios";
import { ApiResponse } from "../utils/services/response/ApiResponse";
import {
  LogPembelajaran,
  LogPembelajaranFinal,
  SubmissionPembelajaran,
} from "../utils/services/response/SubmissionsResponse";

const submissionsInitalState: Array<LogPembelajaranFinal> = [];

export default function Submissions() {
  const [submissions, setSubmissions] = React.useState(submissionsInitalState);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    SubmissionService("21|qWdKpL3jRqdNts5Sq5uBkMlqxUjnICzCP7ymJDCg")
      .getListSubmission()
      .then(
        (
          response: AxiosResponse<ApiResponse<Array<SubmissionPembelajaran>>>
        ) => {
          var listsubmission: Array<LogPembelajaranFinal> = [];
          response.data.data.forEach((pembelajaranItem) => {
            pembelajaranItem.log_pembelajaran.forEach(
              (log: LogPembelajaran) => {
                var submission = {
                  ...log,
                  nama_praktikum: pembelajaranItem.praktikum.nama_praktikum,
                  tanggal_mulai: pembelajaranItem.created_at,
                };
                listsubmission.push(submission);
              }
            );
          });
          setSubmissions(listsubmission);
          setLoading(false);
        }
      );
  }, []);
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Heading3>Hasil Pembelajaran</Heading3>
      </div>

      <div>
        {loading ? (
          <MateriShimmer />
        ) : (
          submissions.map((submission) => (
            <SubmissionCard key={submission.id} submission={submission} />
          ))
        )}
      </div>
    </div>
  );
}
