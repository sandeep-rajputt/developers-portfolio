import React, { useRef, useState } from "react";
import Transition from "../Transition";
import InfoTab from "../components/mini-components/InfoTab";
import Vr from "../components/mini-components/Vr";
import Hr from "../components/mini-components/Hr";
import OpenTab from "../components/mini-components/OpenTab";
import InfoDescription from "../components/InfoDescription";
import emailjs from "@emailjs/browser";
import DotSpinner from "../components/DotSpinner";
import Notification from "../components/Notification";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Location from "../components/mini-components/Location";

const contactsData = [
  {
    text: "contact@sandeeprajput.in",
    icon: "mail",
    link: "mailto:contact@sandeeprajput.in",
  },
  {
    text: "sandeep.rajput74",
    icon: "insta",
    link: "https://instagram.com/sandeep.rajput74",
  },
];

const findMeData = [
  {
    text: "Github Profile",
    icon: "share",
    link: "https://github.com/sandeep-rajputt",
  },
  {
    text: "LinkedIn Profile",
    icon: "share",
    link: "https://www.linkedin.com/in/sandeep-rajputt/",
  },
  {
    text: "Instagram Profile",
    icon: "share",
    link: "https://www.instagram.com/sandeep.rajput74/",
  },
  {
    text: "twitter Profile",
    icon: "share",
    link: "https://x.com/WebDevSandeep",
  },
];

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const date = new Date();
  const formattedDate = date.toDateString();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef(null);
  const [notification, setNotification] = useState(false);
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const { isMobile } = useContext(ThemeContext);

  const subData = {
    name,
    email,
    message,
    date: formattedDate,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setSuccess(false);
      })
      .finally(() => {
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 5000);
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <Transition>
      {isMobile && <Location>.../contact-me</Location>}
      <div className="grid md:grid-cols-[auto_auto_1fr] w-full h-fit md:h-full">
        <div className="lg:w-[250px] md:w-[180px] w-full">
          <InfoTab
            parent={"contacts"}
            child={contactsData}
            defaultOpen={!isMobile}
          />
          <Hr />
          <InfoTab
            parent={"find-me-also-in"}
            child={findMeData}
            defaultOpen={!isMobile}
          />
        </div>
        <Vr />
        <div className="grid md:grid-rows-[auto_auto_1fr] overflow-hidden">
          <div className="md:flex w-fit hidden">
            <OpenTab text={"Contacts"} />
            <Vr className={"!h-auto"} />
          </div>
          <Hr className={"hidden md:block"} />
          <div className="grid md:grid-cols-[1fr_auto_1fr] grid-cols-[1fr] overflow-hidden">
            <div className="overflow-y-scroll scrollbar py-10">
              <div className="flex-center px-5 mb:py-10 mb-10 md:mb-0">
                <form
                  ref={form}
                  className="w-full flex flex-col gap-4 max-w-[250px]"
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-word-secondary">
                      _name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      value={name}
                      name="user_name"
                      required
                      onChange={(e) => setName(e.target.value)}
                      className="bg-dark-secondary/50 text-sm w-full border-2 p-1.5 rounded focus:outline-2 focus:outline-offset focus:outline border-word-secondary/20 focus:border-word-secondary/70 focus:outline-word-secondary/30 text-word-secondary shadow-md"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-word-secondary">
                      _email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      name="user_email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-dark-secondary/50 w-full border-2 text-sm p-1.5 rounded focus:outline-2 focus:outline-offset focus:outline border-word-secondary/20 focus:border-word-secondary/70 focus:outline-word-secondary/30 text-word-secondary shadow-md"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="text-word-secondary">
                      _message:
                    </label>
                    <textarea
                      id="message"
                      autoComplete="off"
                      rows={5}
                      value={message}
                      required
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-none textarea-scrollbar bg-dark-secondary/50 w-full border-2 text-sm p-1.5 rounded focus:outline-2 focus:outline-offset focus:outline border-word-secondary/20 focus:border-word-secondary/70 focus:outline-word-secondary/30 text-word-secondary shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      disabled={loading}
                      type="submit"
                      className="px-5 rounded-md bg-dark-third text-white text-sm py-2 hover:bg-dark-fourth"
                    >
                      {loading ? <DotSpinner /> : "submit-message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <Vr />
            <div className="overflow-y-scroll overflow-x-hidden scrollbar hidden md:block">
              <div className="flex-center lg:px-5 lg:py-10 px-0 py-5">
                <div className="w-full flex flex-col gap-4">
                  <InfoDescription isStarline={false} subData={subData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {notification && <Notification success={success} />}
        </AnimatePresence>
      </div>
    </Transition>
  );
};

export default ContactMe;
