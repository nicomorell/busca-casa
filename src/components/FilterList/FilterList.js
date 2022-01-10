import "./FilterList.scss";
import { useState } from "react";

import { useHistory } from "react-router";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import Slider from "@material-ui/core/Slider";
import { RadioGroup } from "@material-ui/core";

export default function FilterList(props) {
  const proxy = process.env.REACT_APP_PROXY_PRODUCTION
    ? process.env.REACT_APP_PROXY_PRODUCTION
    : process.env.REACT_APP_PROXY_DEVELOPMENT;

  const [precio, fijarPrecio] = useState([0, 100]);
  const [minPrecio, fijarMinPrecio] = useState(null);
  const [maxPrecio, fijarMaxPrecio] = useState(null);
  const [minHabitaciones, fijarMinHabitaciones] = useState(null);
  const [maxHabitaciones, fijarMaxHabitaciones] = useState(null);

  const [habitaciones, fijarHabitaciones] = useState([1, 10]);
  const [edad, fijarEdad] = useState(null);

  const numeroPrecio = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 100,
      label: "$100",
    },
  ];
  const numeroHabitaciones = [
    {
      value: 0,
      label: "10",
    },
    {
      value: 100,
      label: "10+",
    },
  ];
  
  const cambioPrecio = (event, newValue) => {
    console.log(event.target);
    console.log(newValue);
    fijarMinPrecio(newValue[0]);
    fijarMaxPrecio(newValue[1]);

    fijarPrecio(newValue);
  };
  const cambioHabitaciones = (event, newValue) => {
    fijarMinHabitaciones(newValue[0]);
    fijarMaxHabitaciones(newValue[1]);
    fijarHabitaciones(newValue);
  };


  const handleChange = (event) => {
    fijarEdad(event.target.value);
  };


  return (
    <div className="">
                  <FormControl fullWidth>
      <div className = "informacion-filtros">
      <FormLabel>Precio</FormLabel>
      <div>{minPrecio == null ? "Cualquier" : '$' + minPrecio + ' -'}  {maxPrecio == null ? "" :'$' + maxPrecio}</div>
      </div>
      <Slider
        marks={numeroPrecio}
        onChange={cambioPrecio}
        value={precio}
      />
            </FormControl>

            <FormControl fullWidth>

            <div className = "informacion-filtros">
      <FormLabel>Habitaciones</FormLabel>
      <div>{minHabitaciones == null ? "Cualquier" : minHabitaciones} - {maxHabitaciones == null ? "" : maxHabitaciones}</div>
      </div>
            <Slider
        onChange={cambioHabitaciones}
        value={habitaciones}
        step={1}
        defaultValue={1}
        min={1}
        max={10}
      />
      </FormControl>
      <FormControl fullWidth>
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div>Amueblamiento</div>

        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          <RadioGroup >
  <FormControlLabel value="Cualquier" control={<Radio  />} label="Cualquier" />
  <FormControlLabel value="Amueblado" control={<Radio  />} label="Amueblado" />
  <FormControlLabel value="No Amueblado" control={<Radio  />} label="No Amueblado" />
  <FormControlLabel value="Parcialmente Amueblado" control={<Radio  />} label="Parcialmente Amueblado" />
  </RadioGroup>
</FormGroup>
        </AccordionDetails>
      </Accordion>
</FormControl>

<FormControl fullWidth>
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>Comodidades</div>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          <RadioGroup >
  <FormControlLabel value="Piscina" control={<Checkbox  />} label="Piscina" />
  <FormControlLabel value="Terraza" control={<Checkbox  />} label="Terraza" />
  <FormControlLabel value="Garaje" control={<Checkbox  />} label="Garaje" />
  <FormControlLabel value="Jardin" control={<Checkbox  />} label="Jardin" />
  <FormControlLabel value="Planta Electrica" control={<Checkbox  />} label="Planta Electrica" />
  <FormControlLabel value="Seguridad" control={<Checkbox  />} label="Seguridad" />

  </RadioGroup>
</FormGroup>
        </AccordionDetails>
      </Accordion>
</FormControl>

    </div>
  );
}
