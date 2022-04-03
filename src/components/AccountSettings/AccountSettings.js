import "./AccountSettings.scss";
import { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Logo from "../../assets/logo.png";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';

export default function AccountSettings(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [precio, fijarPrecio] = useState([0, 100]);
  const [responseGoogle, setResponseGoogle] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
  };

  return (
    <div className="account-container">
      <div class = "top-information">
        <span>Configuracion de Cuenta</span>
        <span>Cambia su perfil y configuracion</span>
      </div>       
      <div class = "settings-container">

      </div>
    </div>
  );
}
