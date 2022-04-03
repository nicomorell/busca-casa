import "./SignIn.scss";
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

export default function SignIn(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [precio, fijarPrecio] = useState([0, 100]);
  const [responseGoogle, setResponseGoogle] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
  };

  return (
    <div className="sign-in-container">
      <div class = "image-container">
        <img src = {Logo}></img>
      </div>
        <div className="input-container">
        <MailOutlinedIcon fill="#f93e3e" />

        <input placeholder="Email" type="text" className="input-register"></input>
      </div>
      <div className="input-container">
        <LockOutlinedIcon fill="#f93e3e" />
        <input placeholder="Password" type="text" className="input-register"></input>
      </div>
      <div className="button-register">Inicia Sesion</div>
  <h2><span>OR</span></h2>
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={false}
    size="retro"
    fields="name,email,picture"
    icon="fa-facebook"/>
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Inicia Sesion con Google"
      onSuccess={responseGoogle}
      className = "google-sign-in"
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    
    <div  onClick={() =>{ navigate('/register')}} className = "register-text">
      ¿No eres un miembro? ¡Registrate!
    </div>
    </div>
  );
}
