import "./PasswordSettings.scss";
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

export default function PasswordSettings(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [userInformation, setUserInformation] = useState(null);
  const [passwordUppercase, setUppercase] = useState(null);
  const [passwordLength, setPasswordLength] = useState(null);
  const [passwordNumber, setPasswordNumber] = useState(null);

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
  const regexChecker = (password) => {
    console.log(password);
    if (password.length >= 8) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }

    var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

    if (regex.test(password)) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }
    var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

    if (regex.test(password)) {
      setPasswordNumber(true);
    } else {
      setPasswordNumber(false);
    }
  };

  return (
    <div className="password-wrapper">
      <h3>Cambiar Contraseña</h3>
      <div className="password-container">

      <div className="input-container">
        <div className="input-wrapper">
          <span>Contraseña Actual</span>
          <input type="password" />
        </div>
        <div className="input-wrapper">
          <span>Contraseña Nueva</span>
          <input
            type="password"
            onChange={(evt) => regexChecker(evt.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <span>Confirmar Contraseña</span>
          <input type="password" />
        </div>
      </div>
      <div className = "regex-list">
        <div className = "regex-container">
        <span>Contraseña debe tener:</span>
        <div>
          <li className = {`${passwordLength && 'active'}`}>8+ characteres</li>
          <li className = {`${passwordNumber && 'active'}`}>1+ numero</li>
          <li className = {`${passwordUppercase && 'active'}`}>1+ letra mayuscula</li>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
