import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";

const PaymentModal = ({ isOpen, onClose, onContinue }) => {
  const [paymentMethod, setPaymentMethod] = React.useState("bkash");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/70 bg-opacity-60"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-casal w-[90%] max-w-md p-6 rounded-2xl z-50 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-200 text-4xl font-semibold cursor-pointer"
        >
          &times;
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaMoneyCheckDollar className="w-20 h-20 text-[#FDE8CD]" />
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl text-[#FDE8CD] font-semibold mb-4">
          Choose Payment Method
        </h2>

        {/* Payment Options */}
        <div className="space-y-4">
          {/* bKash Option */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="bkash"
              checked={paymentMethod === "bkash"}
              onChange={() => setPaymentMethod("bkash")}
              className="mt-1"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white text-xl">bKash</span>
                <GiHummingbird className="text-white text-xl" />
              </div>
              <p className="text-sm text-white mt-1">
                Send the payment now via bKash to confirm your spot instantly.
              </p>
            </div>
          </label>

          {/* Cash Option */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="mt-1"
            />
            <div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">Cash</span>
                <FaMoneyBillAlt className="text-xl" />
              </div>
              <p className="text-sm text-white mt-1">
                Pay the event fee directly to the host before the game starts.
              </p>
            </div>
          </label>
        </div>

        <button
          onClick={() => {
            onContinue(paymentMethod);
            onClose();
          }}
          className="mt-6 w-full bg-gray-900 text-white py-3 rounded-full text-lg cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
