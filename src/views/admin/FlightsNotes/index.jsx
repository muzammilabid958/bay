import React, { useState } from "react";
import Banner from "views/admin/marketplace/components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField, Container } from "@mui/material";
import {
  Box,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { styled } from "@mui/material/styles";

import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
import Card from "components/card/Card";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import Menu from "components/menu/MainMenu";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import TimePicker from "react-time-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Switch, Space } from "antd";
import { CaretDownFilled } from '@ant-design/icons';
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "../../admin/LiveForm/liveForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  toggleATA,
  toggleATD,
  toggleChocksOnOff,
} from "../../../state/Slice/formSlice";
import { Button } from "antd";
// import { validRegistration1, validDesignation } from '../FlightsNotes/RegEx';
// import { DatePicker, TimePicker } from 'antd';
// import moment from 'moment';



const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
  "& #componentdate": {
    width: "100px",
  },
}));

export default function FlightNotes() {
  const dispatch = useDispatch();
  const reduxFormData = useSelector((state) => state.form);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [selectedValue, setSelectedValue] = useState("");
  const aircraftTypes = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const [selectedFlightType, setSelectedFlightType] = useState("Local"); // Set the default value
  const [showATA, setShowATA] = useState(true);
  const [showATD, setShowATD] = useState(true);
  const [userObj, setUserObj] = useState({});

  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleTimeChangee = (time) => {
    setSelectedTime(time);
  };


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDatee, setSelectedDatee] = useState(null);

  console.log(userObj);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleDateChangee = (date) => {
    setSelectedDatee(date);
  };
  const handleDateChangeee = (date) => {
    setSelectedDatee(date);
  };


  const handleFlightTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedFlightType(selectedType);
    // if (selectedType === "Local") {
    //   setShowATA(true);
    //   setShowATD(true);
    // } else if (selectedType === "International Arrivals") {
    //   setShowATA(true);
    //   setShowATD(false);
    // } else if (selectedType === "International Departures") {
    //   setShowATA(false);
    //   setShowATD(true);
    // }
  };
  const handleRegistrationChange = (e) => {
    dispatch(updateField({ name: "registration", value: e.target.value }));
  };

  const handleATAChange = () => {
    dispatch(toggleATA());
  };

  const handleATDChange = () => {
    dispatch(toggleATD());
  };

  const handleChocksOnOffChange = () => {
    dispatch(toggleChocksOnOff());
  };

  const submitttt = () => {
      alert("Success");
  };

  // const createUser = async (e) => {
  //   e.preventDefault();
  //   let formData = {
  //     registration: e.target[0].value,
  //     flightRule: e.target[1].value,
  //   };
  //   const isValid = await userSchema.isValid(formData);
  //   console.log(isValid);
  // };
  
  // const [Registration1, setRegistration] = useState('');
  // const [Designation, setDesignation] = useState('');
  // const [Registration1Err, setRegistration1Err] = useState(false);
  // const [DesignationError, setDesignationError] = useState(false);
  // const validate = () => {
  //    if (!validRegistration1.test(Registration1)) {
  //       setEmailErr(true);
  //    }
  //    if (!validDesignation.test(Designation)) {
  //       setPwdError(true);
  //    }
  // };

  return (
    <Box pt={{ base: "80px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        spacing={{ base: "20px", xl: "120px" }}
        ml={{ base: "0", md: "0", xl: "5" }}
        mt="10"
      >
        <Card className="row" direction="column" w="100%" px="60px">
          <div className="row">
            <div className="col-md-6">


            
              <FormControl>
                <FormLabel htmlFor="component-simple1">
                  A/C Registration 1
                </FormLabel>
                <Input
                  id="component-simple1"
                  placeholder="Enter Aircraft Registration Number 1"
                  value={reduxFormData.registration1}
                  onChange={(e) =>
                    setUserObj({ ...userObj, registration1: e.target.value })
                  }
                />
              </FormControl>
            </div>
            <div className="col-md-6">
              <FormControl>
                <FormLabel htmlFor="component-simple2">A/C Type</FormLabel>
                <select
                  id="component-simple2"
                  className="form-control"
                  placeholder="Select A/C Type"
                  onChange={(e) =>
                    setUserObj({ ...userObj, actype: e.target.value })
                  }
                >
                  <option disabled>Select A/C</option>
                  <option>Commercial Aircraft</option>
                  <option>General Aviation</option>
                  <option>Helicopters</option>
                </select>
              </FormControl>


              
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <FormLabel htmlFor="componentdate">Date</FormLabel>
              <DatePicker
                id="componentdate"
                selected={selectedDate}
                // onChange={(e) => setUserObj({ ...userObj, date: e.target.value })}
                onChange={handleDateChangeee}
                // onChange={(e)=> (date) => {
                //   setSelectedDate(date);
                // }}
                placeholderText="Autofills Date But also Manually Editable"
                className="form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="col-md-6">
              <FormLabel htmlFor="component-simple2">Call Sign</FormLabel>
              <select
                id="component-simple2"
                className="form-control"
                onChange={(e) =>
                  setUserObj({ ...userObj, caalSignb: e.target.value })
                }
              >
                <option disabled>Select Call Sign</option>
                <option>Call Sign 1</option>
                <option>Call Sign 2</option>
                <option>Call Sign 3</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <FormLabel htmlFor="component-simple2">
                Flight Rule
              </FormLabel>
              <Input
                id="component-simple2"
                placeholder="Enter Flight Rule"
                onChange={(e) =>
                  setUserObj({ ...userObj, flightRule: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <FormLabel htmlFor="component-simple1">Departure</FormLabel>
              <DatePicker
                id="component-simple1"
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Departure"
                className="form-control"
                width={{ base: "100%" }}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>


       
         




          <div className="row">
            <div className="col-md-6">
              <FormLabel htmlFor="flight-type">Flight Type</FormLabel>
              <select
                id="flight-type"
                className="form-control"
                onChange={(e) => setSelectedFlightType(e.target.value)}
                value={selectedFlightType}

             >

           
                <option value="Local">Local</option>
                <option value="International Arrivals">
                  International Arrivals
                </option>
                <option value="International Departures">
                  International Departures
                </option>
              </select> 
            </div>
            <div className="col-md-6">
            {selectedFlightType === "Local" && (
          <>
          

            <FormControl className="col-md-2">
              <FormLabel htmlFor="ata">ATA</FormLabel>

              <div className="row">
        <div className="col-md-6">
          {/* TimePicker */}
          <TimePicker
            id="ata"
            value={selectedTime}
            onChange={handleTimeChangee}
            placeholderText="Enter Aircraft Departure Time"
          />
        </div>

        <div className="col-md-6">
          {/* DatePicker */}
          <DatePicker
            id="atd"
            selected={selectedDate}
            onChange={handleDateChangee}
            placeholderText="Enter Aircraft Departure Date"
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

            </FormControl>
            <FormControl className="col-md-2">
              <FormLabel htmlFor="atd">ATD</FormLabel>

              <div className="row">
        <div className="col-md-6">
          {/* TimePicker */}
          <TimePicker
            id="ata"
            value={selectedTime}
            onChange={handleTimeChangee}
            placeholderText="Enter Aircraft Departure Time"
          />
        </div>

        <div className="col-md-6">
          {/* DatePicker */}
          <DatePicker
            id="atd"
            selected={selectedDate}
            onChange={handleDateChangee}
            placeholderText="Enter Aircraft Departure Date"
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>





            </FormControl>
           

          </>
        )}
              {selectedFlightType === "International Arrivals" && (
                <FormControl className="col-md-2">
                  <FormLabel htmlFor="ata">ATA</FormLabel>


                  <div className="row">
        <div className="col-md-6">
          {/* TimePicker */}
          <TimePicker
            id="ata"
            value={selectedTime}
            onChange={handleTimeChangee}
            placeholderText="Enter Aircraft Departure Time"
          />
        </div>

        <div className="col-md-6">
          {/* DatePicker */}
          <DatePicker
            id="atd"
            selected={selectedDate}
            onChange={handleDateChangee}
            placeholderText="Enter Aircraft Departure Date"
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>





                </FormControl>
              )}
              {selectedFlightType === "International Departures" && (
                <FormControl className="col-md-2">
                  <FormLabel htmlFor="atd">ATD</FormLabel>


             
                  <div className="row">
        <div className="col-md-6">
          {/* TimePicker */}
          <TimePicker
            id="ata"
            value={selectedTime}
            onChange={handleTimeChangee}
            placeholderText="Enter Aircraft Departure Time"
          />
        </div>

        <div className="col-md-6">
          {/* DatePicker */}
          <DatePicker
            id="atd"
            selected={selectedDate}
            onChange={handleDateChangee}
            placeholderText="Enter Aircraft Departure Date"
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
        </FormControl>
              )}
            </div>
          </div>
          <div className="col-md-6">
    <FormLabel htmlFor="component-simple2">Destination</FormLabel>
    <Input
      id="component-simple2"
      onChange={(e) =>
        setUserObj({ ...userObj, Designation: e.target.value })
      }
      placeholder="Destination"
    />
  </div>


            <div className="col-sm-6">
              <FormControl className="col-md-2">
                <FormLabel htmlFor="component-simple1">
                  Chocks On/Off (Toggle)
                </FormLabel>
                <Switch
                  defaultChecked={reduxFormData.chocksOnOff}
                  onChange={handleChocksOnOffChange}
                  className="custom-switch"
                />
              </FormControl>
            </div>
       
          
          <div className="row">
            <Button
              type="primary"
              style={{ backgroundColor: "#A21D20", width: "200px" }}
              danger
              onClick={submitttt}
              disabled={
                userObj.registration1 &&
                userObj.Designation &&
                userObj.actype &&
                userObj.caalSignb &&
                userObj.flightRule
                  ? false
                  : true  
              }
            >
              Submit
            </Button>
          </div>

          
        </Card>
      </SimpleGrid>
    </Box>
  );
}
