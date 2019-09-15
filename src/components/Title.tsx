import React, { useState, useEffect, ChangeEvent, SyntheticEvent, FormEvent } from "react";
import Axios from 'axios';

interface Donation {
  _id: string;
  description: string;
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
  }, [ donations ]);

  function createDonation() {
    Axios.post(`http://localhost:4000/createDonation`, {
      description: inputValue
    })
    .then(res => {
      const newDonations = res.data;
      setDonations([...donations, newDonations]);
      setInputValue("");
    });
  };

  function deleteDonation(id: string) {
    Axios.post(`http://localhost:4000/deleteDonation`, {
      id
    })
    .then(res => { });
  }

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setInputValue(newValue || "ABC")
  }

  return (
    <>
      <ul>
        { donations.map(donation => 
          <tr>
            <td>{donation.description}</td>
            <td><button onClick={() => {deleteDonation(donation._id)}}>Delete</button></td>
          </tr>
        ) }
      </ul>
      <input value={inputValue} onChange={onInputChange}></input>
      <button onClick={() => {createDonation()}}>Create Donation</button>
    </>
  );
};