"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { finalDate } from "@/lib/utils";

const renderer = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="font-poppins text-3xl flex gap-4">
      <div>
        <div className="bg-neutralGray px-3 py-3 rounded-sm">
          {days >= 10 ? days : "0" + days}
        </div>
        <p className="text-xs text-blackishGray max-w-max mx-auto">Days</p>
      </div>
      <div>
        <div className="bg-neutralGray px-3 py-3 rounded-sm">{hours}</div>
        <p className="text-xs text-blackishGray max-w-max mx-auto">Hours</p>
      </div>
      <div>
        <div className="bg-neutralGray px-3 py-3 rounded-sm">{minutes}</div>
        <p className="text-xs text-blackishGray max-w-max mx-auto">Minutes</p>
      </div>
      <div>
        <div className="bg-neutralGray px-3 py-3 rounded-sm">{seconds}</div>
        <p className="text-xs text-blackishGray max-w-max mx-auto">Seconds</p>
      </div>
    </div>
  );
};

const SaleCountdown = () => {
  // const saleEndDate = new Date();
  // saleEndDate.setDate(new Date().getDate() + 1);
  return (
    <>
      <Countdown date={finalDate} renderer={renderer} />
    </>
  );
};

export default SaleCountdown;
