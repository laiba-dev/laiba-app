import SidebarItem from "./SidebarItem";
import { Text, Heading1 } from "../Typography";
import { connect } from "react-redux";
import { setSelectedMenu } from "../../utils/redux/actions/MenuActions";
import { Link } from "react-router-dom";
import routes, { RouteItem } from "../../utils/routes";
import { AppState } from "../../utils/redux/store";
import { MenuState } from "../../utils/redux/reducers/MenuReducer";

function Sidebar({
  menu,
  setSelectedMenu,
}: {
  menu: MenuState;
  setSelectedMenu: (selectedMenu: string) => Promise<void>;
}) {
  return (
    <div className="sidebar">
      <div style={{ marginBottom: "20px", padding: "20px" }}>
        <Heading1 color="white">LAIBA</Heading1>
        <Text color="white">Learning Application in Balanced Assessment</Text>
      </div>
      {routes.map((item: RouteItem) => {
        return (
          !item.hidden && (
            <Link to={item.route} key={item.nama}>
              <SidebarItem
                icon={item.icon || ""}
                text={item.nama}
                active={menu.selectedMenu === item.nama}
                onSelected={() => setSelectedMenu(item.nama)}
              />
            </Link>
          )
        );
      })}
    </div>
  );
}

export default connect(
  (state: AppState) => ({
    menu: state.menu,
  }),
  { setSelectedMenu }
)(Sidebar);
