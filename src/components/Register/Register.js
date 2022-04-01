import "./Register.scss";
import { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Logo from "../../assets/logo.png";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Register(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [precio, fijarPrecio] = useState([0, 100]);
  const [minPrecio, fijarMinPrecio] = useState(null);



  const handleChange = (event) => {
  };


  return (
    <div className="register-container">
      <div class = "image-container">
      <img src = {Logo}></img>

      </div>
      <div className="input-names">
        <div className="input-container">
          <PersonOutlineOutlinedIcon fill="#f93e3e" />
          <input placeholder="First Name" type="text" className="input-register"></input>
        </div>
        <div className="input-container">
          <PersonOutlineOutlinedIcon fill="#f93e3e" />

          <input placeholder="Last Name" type="text" className="input-register"></input>
        </div>
      </div>
      <div className="input-container">
        <MailOutlinedIcon fill="#f93e3e" />

        <input placeholder="Email" type="text" className="input-register"></input>
      </div>
      <div className="input-phone_container">
        <PhoneInput
          country={'do'}
          masks={{do: '(...) ...-....'}}
        />
      </div>
      <div className="input-container">
        <LockOutlinedIcon fill="#f93e3e" />
        <input placeholder="Password" type="text" className="input-register"></input>
      </div>
      <div className="input-container">
        <LockOutlinedIcon fill="#f93e3e" />
        <input placeholder="Confirm Password" type="text" className="input-register"></input>
      </div>
      <div className="button-register">Register</div>
    </div>
  );
}
