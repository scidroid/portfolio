import Image from "next/image";
import { handleFormSubmit } from "utils/analytics";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Form = ({ locales }) => {
  const [submissionCunter, setSubmissionCounter] = useState(0);
  return (
    <>
      <section className="flex flex-row flex-wrap justify-center m-8 sm:m-32">
        <article className="max-w-lg mt-2 mb-2 mr-4">
          <h1 className="text-4xl sm:text-6xl sm:mt-8 mb-4 sm:mb-16 font-bold">{locales.title}</h1>
          <p className="text-gray-600 text-xl">{locales.subtitle}</p>
          <a
            className="mt-8 mb-8 flex flex-row items-center"
            href="mailto:scidroid@scidroid.me?cc=scidroidgames@gmail.com&subject=Hi%2C%20I%20have%20an%20amazing%20oportunity%20for%20you"
          >
            <Image
              alt="mail logo"
              src="/mail.svg"
              width="32"
              height="32"
              className="mr-4"
            />
            <span className="text-xl ml-2 text-gray-600 font-bold">
              scidroid@scidroid.me
            </span>
          </a>
        </article>
        <form
          className="max-w-xl w-full flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            if (submissionCunter < 2) {
              setSubmissionCounter(submissionCunter + 1);
              toast.promise(
                handleFormSubmit({
                  email: e.target.email.value,
                  name: e.target.name.value,
                  message: e.target.message.value,
                }),
                {
                  loading: locales.saving,
                  success: <b>{locales.sucessful_message}</b>,
                  error: <b>{locales.error_message}</b>,
                  duration: 5000,
                }
              );
            } else {
              toast.error(locales.attemps_exceeded);
            }
          }}
        >
          <Toaster />
          <div className="flex flex-col mt-2 mb-2">
            <label className="text-xl font-bold mb-2">{locales.name}</label>
            <input
              className="sm:w-5/6 p-4 text-xl bg-gray-200"
              name="name"
              placeholder={locales.name_placeholder}
              required
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2 mb-2">
            <label className="text-xl font-bold mb-2">{locales.email}</label>
            <input
              className="sm:w-5/6 p-4 text-xl bg-gray-200"
              name="email"
              placeholder={locales.email_placeholder}
              required
              type="email"
            />
          </div>
          <div className="flex flex-col mt-2 mb-2">
            <label className="text-xl font-bold mb-2">{locales.message}</label>
            <textarea
              className="sm:w-5/6 p-4 text-xl mb-4 bg-gray-200"
              name="message"
              placeholder={locales.message_placeholder}
              required
            />
          </div>
          <button className="button sm:w-3/6 mt-4">
            <div className="button-up">
              <div className="button-text">
                <p className="font-bold">{locales.submit}</p>
              </div>
            </div>
            <div className="button-down">
              <div className="button-text"></div>
            </div>
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
