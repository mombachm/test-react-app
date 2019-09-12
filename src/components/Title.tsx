import React, { useState, useEffect, ChangeEvent, SyntheticEvent, FormEvent } from "react";
import Axios from 'axios';

interface Props {
}

interface Donation {
  description: string
}

interface State {
  donations: Donation[]
}

export const Title: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    Axios.get(`http://localhost:4000/donations`)
    .then(res => {
      const donations = res.data;
      setDonations(donations);
    });
  }, []);

  function createDonation() {
    debugger;
    Axios.post(`http://localhost:4000/createDonation/`, {
      description: inputValue
    })
    .then(res => {
      const newDonations = res.data;
      setDonations([...donations, newDonations]);
    });
  };

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setInputValue(newValue || "ABC")
  }

  return (
    <>
      <ul>
        { donations.map(donation => <li>{donation.description}</li>) }
      </ul>
      <input onChange={onInputChange}></input>
      <button onClick={() => {createDonation()}}>Create Donation</button>
    </>
  );
};