import "./AccountSettings.scss";
import { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import { views } from '../../helpers/app-views';
import GeneralSettings from '../GeneralSettings/GeneralSettings';
import PasswordSettings from '../PasswordSettings/PasswordSettings';
import NotificationsSettings from '../NotificationsSettings/NotificationsSettings';
import HelpSettings from '../HelpSettings/HelpSettings';

export default function AccountSettings(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [userInformation, setUserInformation] = useState(null);
  const [activeItem, setActiveItem] = useState('account');
  const [view, setView] = useState(views.SETTINGS);

  const navigate = useNavigate();
  useEffect(()=>{ 
    setUserInformation({first_name:'Nicolas', last_name:'Morell', email: 'nicomorell1@hotmail.com', telephone: '+1 849 274 3502'});
  },[])
  const handleChange = (event) => {};

  return (
    <div className="account-container">
      <div class="top-information">
        <h1>Configuracion de Cuenta</h1>
        <h3>Cambia su perfil y configuracion</h3>
      </div>
      <div class="settings-container">
        <div className="left-panel">
        <ListItem onClick={() => {setActiveItem('help'); setView(views.SETTINGS)}}  className = {`left-panel_text ${activeItem == 'account' ? 'active' : ''}`}>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon fill="#6b6a7a" />
            </ListItemIcon>
            <ListItemText
              primary="Cuenta"
            />
          </ListItem>
          <ListItem onClick={() => {setActiveItem('help'); setView(views.PASSWORD)}}  className = {`left-panel_text ${activeItem == 'password' ? 'active' : ''}`}>
            <ListItemIcon>
            <LockOutlinedIcon fill="#6b6a7a" />
            </ListItemIcon>
            <ListItemText
              primary="Contraseña"
            />
          </ListItem>
          <ListItem onClick={() => {setActiveItem('help'); setView(views.NOTIFICATIONS)}}  className = {`left-panel_text ${activeItem == 'notifications' ? 'active' : ''}`}>
            <ListItemIcon>
            <NotificationsNoneOutlinedIcon fill="#6b6a7a" />
            </ListItemIcon>
            <ListItemText
             sx={{
              typography: {
                fontFamily: 'Public Sans',
              },
            }}
              primary="Notificationes"
            />
          </ListItem>
          <ListItem onClick={() => {setActiveItem('help'); setView(views.HELP)}} className = {`left-panel_text ${activeItem == 'help' ? 'active' : ''}`}>
            <ListItemIcon>
            <PrivacyTipOutlinedIcon fill="#6b6a7a" />
            </ListItemIcon>
            <ListItemText
              primary="Ayuda"
            />
          </ListItem>
        </div>
        <div className="right-panel">
            {view === views.SETTINGS && (
              <GeneralSettings
                changeView={setView}
              />
            )}
            {view === views.PASSWORD && (
              <PasswordSettings
                changeView={setView}
              />
            )}
            {view === views.NOTIFICATIONS && (
              <NotificationsSettings
                changeView={setView}
              />
            )}
            {view === views.HELP && (
              <HelpSettings
                changeView={setView}
              />
            )}
        </div>
      </div>
    </div>
  );
}
