import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SERVICE_ID = "service_y8kaiyp";
const TEMPLATE_ID = "template_w87xtcx";
const USER_ID = "5VS8cl3Cw0xV9Zjd7";

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", duration: 0.8, delay },
  },
});

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Controls & refs for each field
  const controlsName = useAnimation();
  const [refName, inViewName] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (inViewName) controlsName.start("show");
    else controlsName.start("hidden");
  }, [controlsName, inViewName]);

  const controlsEmail = useAnimation();
  const [refEmail, inViewEmail] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (inViewEmail) controlsEmail.start("show");
    else controlsEmail.start("hidden");
  }, [controlsEmail, inViewEmail]);

  const controlsMsg = useAnimation();
  const [refMsg, inViewMsg] = useInView({ triggerOnce: false, threshold: 0.2 });
  useEffect(() => {
    if (inViewMsg) controlsMsg.start("show");
    else controlsMsg.start("hidden");
  }, [controlsMsg, inViewMsg]);

  const controlsBtn = useAnimation();
  const [refBtn, inViewBtn] = useInView({ triggerOnce: false, threshold: 0.2 });
  useEffect(() => {
    if (inViewBtn) controlsBtn.start("show");
    else controlsBtn.start("hidden");
  }, [controlsBtn, inViewBtn]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        setSuccess(true);
        setLoading(false);
        form.current.reset();
      },
      (error) => {
        setSuccess(false);
        setLoading(false);
      }
    );
  };

  return (
    <div
      id="contact"
      className="py-12 sm:py-20 flex items-center justify-center bg-white dark:bg-neutral-900 px-1 sm:px-2"
    >
      <Card className="w-full max-w-2xl px-3 py-6 sm:p-10 md:p-16 bg-white/90 dark:bg-neutral-800/90 border-none shadow-2xl rounded-3xl">
        <div className="mb-10">
          <p className="text-base sm:text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-1 tracking-widest uppercase font-beckman text-center">
            Get in touch
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-2 leading-tight font-mova text-center">
            CONTACT<span className="text-black dark:text-white"></span>
          </h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-7">
          <motion.div
            ref={refName}
            variants={fadeInVariant(0.1)}
            initial="hidden"
            animate={controlsName}
          >
            <label className="block text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2 font-rexlia">
              YOUR NAME
            </label>
            <Input
              name="name"
              required
              placeholder="What's your name?"
              className="font-michroma bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white text-base px-5 sm:px-6 py-3 sm:py-4 rounded-2xl"
            />
          </motion.div>
          <motion.div
            ref={refEmail}
            variants={fadeInVariant(0.2)}
            initial="hidden"
            animate={controlsEmail}
          >
            <label className="block text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2 font-rexlia">
              YOUR EMAIL
            </label>
            <Input
              type="email"
              name="email"
              required
              placeholder="What's your email?"
              className="font-michroma bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white text-base px-5 sm:px-6 py-3 sm:py-4 rounded-2xl"
            />
          </motion.div>
          <motion.div
            ref={refMsg}
            variants={fadeInVariant(0.3)}
            initial="hidden"
            animate={controlsMsg}
          >
            <label className="block text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-200 mb-2 font-rexlia">
              YOUR MESSAGE
            </label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="What's your message?"
              className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-2xl bg-neutral-100 text-black placeholder:text-neutral-400 border border-neutral-300 focus:border-black focus:ring-2 focus:ring-black/40 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500 dark:border-neutral-700 dark:focus:border-white dark:focus:ring-white/40 outline-none transition resize-none font-michroma text-base"
            ></textarea>
          </motion.div>
          <motion.div
            ref={refBtn}
            variants={fadeInVariant(0.5)}
            initial="hidden"
            animate={controlsBtn}
          >
            <Button
              type="submit"
              disabled={loading}
              className="w-full gap-2 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-bold text-base sm:text-lg py-3 sm:py-4 rounded-2xl flex items-center justify-center font-rexlia"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  SEND
                  <span className="ml-2">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white dark:text-black"
                    >
                      <title>Proton Mail</title>
                      <path
                        fill="currentColor"
                        d="m15.24 8.998 3.656-3.073v15.81H2.482C1.11 21.735 0 20.609 0 19.223V6.944l7.58 6.38a2.186 2.186 0 0 0 2.871-.042l4.792-4.284h-.003zm-5.456 3.538 1.809-1.616a2.438 2.438 0 0 1-1.178-.533L.905 2.395A.552.552 0 0 0 0 2.826v2.811l8.226 6.923a1.186 1.186 0 0 0 1.558-.024zM23.871 2.463a.551.551 0 0 0-.776-.068l-3.199 2.688v16.653h1.623c1.371 0 2.481-1.127 2.481-2.513V2.824a.551.551 0 0 0-.129-.36z"
                      />
                    </svg>
                  </span>
                </>
              )}
            </Button>
          </motion.div>
          {success === true && (
            <p className="text-green-600 dark:text-green-500 mt-2 text-center font-semibold font-michroma text-sm sm:text-base">
              Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="text-red-600 dark:text-red-500 mt-2 text-center font-semibold font-michroma text-sm sm:text-base">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Contact;
