import React, { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";

import Intro from './Intro'
import InfoTags from './InfoTags'
import Card from './Card'
import Form from './Form'

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <Intro
          currentAccount={currentAccount}
          connectWallet={connectWallet}/>
          <InfoTags/>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <Card currentAccount={currentAccount}/>
          <Form isLoading={isLoading} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>

      </div>
    </div>
  );
};

export default Welcome;
