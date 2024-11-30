import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState, useRef } from "react";

function AccordionSection({ shippingData, setShippingData }) {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const InformationData = [
    {
      label: "Name",
      type: "text",
      placeholderText: "Enter Name",
    },
    {
      label: "Email",
      type: "email",
      placeholderText: "Enter Email",
    },
    {
      label: "Phone",
      type: "tel",
      placeholderText: "Enter Phone #",
    },
  ];

  const AddressData = [
    {
      label: "Address",
      type: "text",
      placeholderText: "Enter Address",
    },
    {
      label: "City",
      type: "text",
      placeholderText: "Enter City Name",
    },
    {
      label: "Zip_Code",
      type: "number",
      placeholderText: "Enter Zip Code",
    },
  ];

  return (
    <div className="flex flex-col gap-y-2 w-full">
      {/* Billing Information  */}
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          className="text-base text-gray-700"
        >
          Billing Information
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-y-4 mb-1">
          {InformationData.map((data, index) => (
            <div className="flex flex-col" key={index}>
              <label className="text-sm text-gray-500 "> {data.label}: </label>
              <input
                type={data.type}
                placeholder={data.placeholderText}
                required
                value={shippingData[data.label]}
                className="border border-gray-300 p-1 text-sm text-gray-500 focus:outline-none"
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    [data.label]: e.target.value,
                  })
                }
              ></input>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Shipping Information  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          className="text-base text-gray-700"
        >
          Shipping Information
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-y-4 mb-1">
          {AddressData.map((data, index) => (
            <div className="flex flex-col" key={index}>
              <label className="text-sm text-gray-500 "> {data.label}: </label>
              <input
                type={data.type}
                placeholder={data.placeholderText}
                required
                value={shippingData[data.label] || ""}
                className="border border-gray-300 p-1 text-sm text-gray-500 focus:outline-none"
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    [data.label]: e.target.value,
                  })
                }
              ></input>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Payment Method  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Payment Method
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-y-2 mb-1 text-gray-500">
          <div className="flex flex-row items-center gap-x-1 text-sm">
            <input
              type="radio"
              name="COD"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
            />{" "}
            Cash on Delivery
          </div>
          <div className="flex flex-row items-center gap-x-1 text-sm">
            <input
              type="radio"
              name="DebitCard"
              checked={paymentMethod === "DebitCard"}
              onChange={() => setPaymentMethod("DebitCard")}
            />{" "}
            Debit Card
          </div>

          {paymentMethod === "DebitCard" && (
            <>
              <div className="flex flex-col px-3 py-2 gap-y-4 bg-gray-200 rounded-md relative top-2 mb-2 pb-2">
                <h1 className="text-gray-800 text-lg font-medium">
                  Debit Card Information
                </h1>

                <div className="flex flex-col gap-y-1">
                  <label className="text-xs text-black "> Card Number </label>
                  <input
                    type="number"
                    placeholder="Enter card Number"
                    required
                    className="border border-gray-300 p-1 text-sm text-gray-500 focus:outline-none"
                  ></input>
                </div>

                <div className="flex flex-col gap-y-1">
                  <label className="text-xs text-black ">
                    {" "}
                    Card Holder Name{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter card holder name"
                    required
                    className="border border-gray-300 p-1 text-sm text-gray-500 focus:outline-none"
                  ></input>
                </div>

                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-5">
                  <div className="flex flex-col gap-y-1">
                    <label className="text-xs text-black"> Expiry Date </label>
                    <input
                      type="date"
                      required
                      className="border border-gray-300 p-1 text-sm text-gray-500 focus:outline-none"
                    ></input>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <label className="text-xs text-black "> CVV </label>
                    <input
                      type="text"
                      placeholder="CVV"
                      required
                      className="border border-gray-300 p-1 text-sm text-gray-500 focus:outline-none"
                    ></input>
                  </div>
                </div>
              </div>
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionSection;
