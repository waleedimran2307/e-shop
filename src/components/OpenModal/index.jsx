import React from "react";
import { Modal } from "antd";
const OpenModal = ({ openModal, setOpenModal, setAddress }) => {
  const handleOnChange = (e) => {
    e.stopPropagation();
    setAddress(e.target.value);
  };

  return (
    <>
      <Modal
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <div className="text-black flex flex-col justify-start items-center text-center text-3xl font-bold relative -top-4">
          <h1 className=" z-20">E_Shop</h1>
          <span className="relative  before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-[#dc2626] w-20 "></span>
        </div>
        <div className="flex flex-col gap-y-3 relative top-6">
          <h2 className="text-left text-base ">Enter new Address</h2>
          <textarea
            name="Enter new Address"
            id="change Address"
            cols="2"
            rows="5"
            className=" border border-gray-400 rounded-lg pl-3 pt-1 text-sm text-black focus:outline-none"
            placeholder="Type here..."
            onChange={handleOnChange}
          ></textarea>
        </div>
      </Modal>
    </>
  );
};
export default OpenModal;
