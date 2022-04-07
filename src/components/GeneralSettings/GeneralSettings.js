import "./GeneralSettings.scss";
import { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import { views } from "../../helpers/app-views";

export default function AccountSettings(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [userInformation, setUserInformation] = useState(null);
  const [activeItem, setActiveItem] = useState("account");
  const [view, setView] = useState(views.SETTINGS);

  const navigate = useNavigate();
  useEffect(() => {
    setUserInformation({
      first_name: "Nicolas",
      last_name: "Morell",
      email: "nicomorell1@hotmail.com",
      telephone: "+1 849 274 3502",
    });
  }, []);
  const handleChange = (event) => {};

  return (
    <div>
      <h3>Informacion General</h3>
      <div className="input-container">
        <div className="input-wrapper">
          <span>Nombre</span>
          <input
            name={userInformation && userInformation.first_name}
            value={userInformation && userInformation.first_name}
          />
        </div>
        <div className="input-wrapper">
          <span>Apellido</span>
          <input
            name={userInformation && userInformation.last_name}
            value={userInformation && userInformation.last_name}
          />
        </div>
        <div className="input-wrapper">
          <span>Correo Electronico</span>
          <input
            name={userInformation && userInformation.email}
            value={userInformation && userInformation.email}
          />
        </div>
        <div className="input-wrapper">
          <span>Numero</span>
          <input
            name={userInformation && userInformation.telephone}
            value={userInformation && userInformation.telephone}
          />
        </div>
      </div>
    </div>
  );
}
