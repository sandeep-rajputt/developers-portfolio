import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaCheckCircle } from "react-icons/fa";
import { IoAlertCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Notification({ className, success }) {
  const [overlayRoot, setOverlayRoot] = useState(null);

  useEffect(() => {
    // Create the overlay div
    const overlayDiv = document.createElement("div");
    overlayDiv.id = "overlay-root";
    document.body.appendChild(overlayDiv);
    setOverlayRoot(overlayDiv);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeChild(overlayDiv);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!overlayRoot) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-5 p-3 gap-3 right-5 text-white rounded backdrop-blur-lg bg-[#ffffff21] border  flex ${className}`}
    >
      <div className="flex-center ">
        {success ? (
          <FaCheckCircle size={"20px"} className="text-green" />
        ) : (
          <IoAlertCircleSharp size={"20px"} className="text-orange" />
        )}
      </div>
      <div className="flex-center">
        {success
          ? "Message Submitted Successfully"
          : "Message Submission Failed"}
      </div>
    </motion.div>,
    overlayRoot
  );
}

export default Notification;
