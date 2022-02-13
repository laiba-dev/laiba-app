import Card from "./Card";
import { Text } from "./Typography";
import KriteriaItem from "./KriteriaItem";
import { color } from "./Color";
import Button from "./Button";
import { LogPembelajaranFinal } from "../utils/services/response/SubmissionsResponse";
import { useNavigate } from "react-router-dom";

export default function DetailSubmissionCard({
  submission,
}: {
  submission: LogPembelajaranFinal;
}) {
  let navigate = useNavigate();

  return (
    <div>
      <Card>
        <div>
          <div className="detail-grid">
            <div className="submission-time">
              <Text color={color.text}>Waktu Mulai Mengerjakan</Text>
              <Text>{submission.tanggal_mulai.toString()}</Text>
              <Text color={color.text}>Waktu Pengumpulan</Text>
              <Text>{submission.created_at.toString()}</Text>
              <Text color={color.text}>Waktu Pengerjaan</Text>
              <Text>1 Hari 20 Menit</Text>
            </div>
            <div className="submission-time">
              <Text color={color.text}>Kriteria</Text>
              <div>
                {submission.log_test.map((log) => (
                  <KriteriaItem kriteria={log} key={log.id} />
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "right",
            }}
          >
            <Button
              text="Lihat Detail Jawaban"
              onClick={() => navigate("/submissions/" + submission.id)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
