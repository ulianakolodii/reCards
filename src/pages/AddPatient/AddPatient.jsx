import React, { useEffect, useState } from "react";
import {
  PageLayout,
  Pagehead,
  Heading,
  FormControl,
  TextInput,
  Textarea,
  Box,
  Button,
} from "@primer/react";
import { AutocompleteWithTokens } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { addPatient, updatePatient, getPatientByID } from "../../utils/db";

export const AddPatient = () => {
  const { id } = useParams();
  const [
    {
      fathersName,
      firstName,
      lastName,
      birthDate,
      additionalInfo,
      phoneNumber,
      cardNumber,
    },
    setPatient,
  ] = useState({
    fathersName: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    additionalInfo: "",
    phoneNumber: "",
    cardNumber: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (id) {
      updatePatient({
        fathersName,
        firstName,
        lastName,
        birthDate,
        additionalInfo,
        phoneNumber,
        cardNumber,
        id: parseInt(id, 10),
      }).then(() => navigate("/patients"));
    } else {
      addPatient({
        fathersName,
        firstName,
        lastName,
        birthDate,
        additionalInfo,
        phoneNumber,
        cardNumber,
        timestamp: Date.now(),
      }).then(() => navigate("/patients"));
    }
    event.preventDefault();
  };

  const createInputHandler = (name) => (event) => {
    setPatient((prevDoctor) => ({
      ...prevDoctor,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (id) {
      getPatientByID(parseInt(id, 10)).then(setPatient);
    }
  }, [setPatient, id]);

  return (
    <PageLayout>
      <PageLayout.Header>
        <Pagehead>
          <Heading as="h2" sx={{ fontSize: 24 }}>
            Зареєструвати пацієнта
          </Heading>
        </Pagehead>
      </PageLayout.Header>
      <PageLayout.Content>
        <Box
          as="form"
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          onSubmit={handleSubmit}
        >
          <FormControl required>
            <FormControl.Label>Прізвище</FormControl.Label>
            <TextInput
              value={lastName}
              onInput={createInputHandler("lastName")}
              sx={{ width: "100%" }}
              autoFocus
            />
          </FormControl>
          <FormControl required>
            <FormControl.Label>Ім'я</FormControl.Label>
            <TextInput
              value={firstName}
              onInput={createInputHandler("firstName")}
              sx={{ width: "100%" }}
            />
          </FormControl>
          <FormControl required>
            <FormControl.Label>По-батькові</FormControl.Label>
            <TextInput
              value={fathersName}
              onInput={createInputHandler("fathersName")}
              sx={{ width: "100%" }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Дата народження</FormControl.Label>
            <TextInput
              value={birthDate}
              onInput={createInputHandler("birthDate")}
              type="date"
              sx={{
                width: "100%",
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Номер телефону</FormControl.Label>
            <TextInput
              value={phoneNumber}
              onInput={createInputHandler("phoneNumber")}
              type="number"
              sx={{
                width: "100%",
                "& > input[type=number]::-webkit-inner-spin-button": {
                  display: "none",
                },
                "& > input[type=number]::-webkit-outer-spin-button": {
                  display: "none",
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Номер карти</FormControl.Label>
            <TextInput
              value={cardNumber}
              onInput={createInputHandler("cardNumber")}
              type="number"
              sx={{
                width: "100%",
                "& > input[type=number]::-webkit-inner-spin-button": {
                  display: "none",
                },
                "& > input[type=number]::-webkit-outer-spin-button": {
                  display: "none",
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Мітки</FormControl.Label>
            <AutocompleteWithTokens />
          </FormControl>
          <FormControl>
            <FormControl.Label>Додаткова інформація</FormControl.Label>
            <Textarea
              value={additionalInfo}
              onInput={createInputHandler("additionalInfo")}
              sx={{
                width: "100%",
              }}
            />
          </FormControl>
          <Box>
            {!id && (
              <Button type="submit" variant="primary">
                Зареєструвати
              </Button>
            )}
            {id && <Button type="submit">Зберегти</Button>}
          </Box>
        </Box>
      </PageLayout.Content>
    </PageLayout>
  );
};