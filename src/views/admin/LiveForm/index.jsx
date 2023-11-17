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
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "../../admin/LiveForm/liveForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  toggleATA,
  toggleATD,
  toggleChocksOnOff,
} from "../../../state/Slice/liveFormSlice";
import { Button } from "antd";

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

// import { useDispatch, useSelector } from 'react-redux';
// import { updateField, toggleATA, toggleATD, toggleChocksOnOff } from '../../../state/Slice/liveFormSlice';

export default function LiveForm() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [selectedValue, setSelectedValue] = useState("");
  const aircraftTypes = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update the selected value when the dropdown changes
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDatee, setSelectedDatee] = useState(null);
  const [userObj, setUserObj] = useState({});

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
  const dispatch = useDispatch();
  const liveformData = useSelector((state) => state.liveForm.formData);

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
  const handleATAToggle = () => {
    dispatch(toggleATA());
  };
  const handleATDToggle = () => {
    dispatch(toggleATD());
  };
  const handleSubmit = () => {
    // alert(userObj.registration1);
    console.log("newrthrhhrh", userObj);
    // dispatch(submitForm(formData)); // Assuming you want to submit the entire form data
  };

  const [errors, setErrors] = useState({
    registration1: "",
  });

  const validateRegistration1 = () => {
    const value = userObj.registration1.trim();

    setErrors((prevErrors) => ({
      ...prevErrors,
      registration1: !value ? "A/C Registration 1 is required" : "",
    }));
  };

  return (
    <Box pt={{ base: "80px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        //  columns={{ base: 2, sm: 12, md: 12, xl: 12 }} // Set col-sm-12 for small screens
        spacing={{ base: "20px", xl: "120px" }}
        ml={{ base: "0", md: "0", xl: "5" }}
        mt="10"
      >
        <div>
          <Card
            className="row"
            direction="column"
            w="100%"
            px="60px" // col-sm-4 for small screens, col-md-12 for medium screens
          >
            <div className="row">
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple1">
                    A/C Registration 1
                  </FormLabel>
                  <Input
                    id="component-simple1"
                    placeholder="Enter Aircraft Registration Number 1"
                    // onChange={(e) => handleFieldChange('registration1', e.target.value)}
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
                    // onChange={(e) => handleFieldChange('aircraftType', e.target.value)}
                    onChange={(e) =>
                      setUserObj({ ...userObj, aircraftType: e.target.value })
                    }
                  >
                    <option disabled>Select Call Sign</option>
                    <option>Call Sign 1</option>
                    <option>Call Sign 2</option>
                    <option>Call Sign 3</option>
                  </select>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="componentdate">Date</FormLabel>
                  <DatePicker
                    id="componentdate"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Autofills Date But also Manually Editable"
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                  />
                </FormControl>
              </div>
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple2">Call Sign</FormLabel>
                  <select
                    id="component-simple2"
                    className="form-control"
                    // onChange={(e) => handleFieldChange('callSign', e.target.value)}
                    onChange={(e) =>
                      setUserObj({ ...userObj, callSign: e.target.value })
                    }
                  >
                    <option disabled>Select Call Sign</option>
                    <option>Call Sign 1</option>
                    <option>Call Sign 2</option>
                    <option>Call Sign 3</option>
                  </select>
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple1">Flight Type</FormLabel>
                  <Input
                    id="component-simple1"
                    placeholder="Enter Flight Type"
                    //  onChange={(e) => handleFieldChange('flightType', e.target.value)}
                    onChange={(e) =>
                      setUserObj({ ...userObj, flightType: e.target.value })
                    }
                  />
                </FormControl>
              </div>
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple2">Flight Rule</FormLabel>
                  <Input
                    id="component-simple2"
                    placeholder="Enter Flight Rule"
                    //  onChange={(e) => handleFieldChange('flightRule', e.target.value)}
                    onChange={(e) =>
                      setUserObj({ ...userObj, flightRule: e.target.value })
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormControl>
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
                </FormControl>
              </div>

              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple2">Destination</FormLabel>
                  <Input
                    id="component-simple2"
                    placeholder="Destination"
                    // onChange={(e) => handleFieldChange('designation', e.target.value)}
                    onChange={(e) =>
                      setUserObj({ ...userObj, designations: e.target.value })
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple1">ATA</FormLabel>
                  <TimePicker
                    id="component-simple2"
                    value={selectedTime}
                    onChange={handleTimeChange}
                  />
                </FormControl>
              </div>
              <div className="col-md-6">
                <FormControl>
                  <FormLabel htmlFor="component-simple1">ATD</FormLabel>
                  <DatePicker
                    id="component-simple1"
                    selected={selectedDatee}
                    onChange={handleDateChangee}
                    placeholderText="Enter Aircraft Departure Date"
                    className="form-control"
                    width={{ base: "100%", md: "200px" }}
                    dateFormat="dd/MM/yyyy"
                  />
                </FormControl>
              </div>
            </div>
            <div className="row">
            <div className="col-md-6">
              <FormControl>
                <FormLabel htmlFor="component-simple1">
                  Chocks On/Off (Toggle)
                </FormLabel>
                <Switch
                  defaultChecked
                  onChange={onChange}
                  className="custom-switch"
                />
              </FormControl>
            </div>
            </div>

            <Flex mt="20px" justify={{ base: "center", md: "flex-start" }}>
              <Button
                type="primary"
                style={{ backgroundColor: "#A21D20", width: "200px" }}
                danger
                onClick={handleSubmit}
                disabled={
                  userObj.aircraftType &&
                  userObj.designations &&
                  userObj.flightRule &&
                  userObj.registration1 &&
                  userObj.callSign &&
                  userObj.flightType
                    ? false
                    : true
                }
              >
                Submit
              </Button>
            </Flex>
          </Card>
        </div>
      </SimpleGrid>
    </Box>
  );
}
