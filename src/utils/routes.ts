import Dashboard from "../pages/Dashboard";
import Pembelajaran from "../pages/pembelajaran";
import Materi from "../pages/materi";
import Praktikum from "../pages/Praktikum";
import Submissions from "../pages/submissions";
import DetailSubmission from "../pages/DetailSubmission";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import AuthCallback from "../pages/auth/callback";

export type RouteItem = {
  nama: string;
  route: string;
  protected: boolean;
  component: () => JSX.Element;
  hidden: boolean;
  icon: string | false;
};

const routes: Array<RouteItem> = [
  {
    nama: "Dashboard",
    route: "/",
    protected: true,
    component: Dashboard,
    hidden: false,
    icon: "/images/bx_bxs-home.png",
  },
  {
    nama: "Pembelajaran",
    route: "/pembelajaran",
    protected: true,
    component: Pembelajaran,
    hidden: false,
    icon: "/images/fluent_learning-app-24-regular.png",
  },
  {
    nama: "Materi",
    route: "/materi",
    protected: true,
    component: Materi,
    hidden: true,
    icon: false,
  },
  {
    nama: "Detail Materi",
    route: "/materi/:id",
    protected: true,
    component: Praktikum,
    hidden: true,
    icon: false,
  },
  {
    nama: "Hasil Pembelajaran",
    route: "/submissions",
    protected: true,
    component: Submissions,
    hidden: false,
    icon: "/images/bx_bxs-report.png",
  },
  {
    nama: "Detail Hasil Pembelajaran",
    route: "/submissions/:id",
    protected: true,
    component: DetailSubmission,
    hidden: true,
    icon: false,
  },
  {
    nama: "Login",
    route: "/login",
    protected: false,
    component: Login,
    hidden: true,
    icon: false,
  },
  {
    nama: "Auth Callback",
    route: "/api/auth/callback/github",
    protected: false,
    component: AuthCallback,
    hidden: true,
    icon: false,
  },
  {
    nama: "Register",
    route: "/register",
    protected: false,
    component: Register,
    hidden: true,
    icon: false,
  },
];

export default routes;
