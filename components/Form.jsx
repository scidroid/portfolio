import Image from "next/image";
import Head from "next/head";
import splitbee from "@splitbee/web";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  return (
    <>
      <Head>
        <title>Contact | SciDroid</title>
        <meta
          key={"description"}
          name="description"
          content="Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you as soon as possible."
        />
        <meta
          key={"ogtitle"}
          property="og:title"
          content="Contact | SciDroid"
        />
        <meta
          key={"ogdescription"}
          property="og:description"
          content="Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you as soon as possible."
        />
        <meta
          key={"ogimage"}
          property="og:image"
          content="https://scidroid.co/avatar.png"
        />
        <meta
          key={"ogurl"}
          property="og:url"
          content={"https://scidroid.co/contact"}
        />
      </Head>
      <section className="flex flex-row flex-wrap justify-center m-8 sm:m-32">
        <article className="max-w-lg mt-2 mb-2 mr-4">
          <h1 className="text-6xl mt-8 mb-16 font-bold">Get in touch</h1>
          <p className="text-gray-600 text-xl">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you as soon as possible.
          </p>
          <a
            className="mt-8 mb-8 flex flex-row items-center"
            href="mailto:scidroid@scidroid.me?cc=scidroidgames@gmail.com&subject=Hi%2C%20I%20have%20an%20amazing%20oportunity%20for%20you"
          >
            <Image src="/mail.svg" width="32" height="32" className="mr-4" />{" "}
            <span className="text-xl ml-2 text-gray-600 font-bold">
              scidroid@scidroid.me
            </span>
          </a>
        </article>
        <form
          autoComplete="on"
          className="max-w-xl w-full flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            let data = JSON.parse({
              email: e.target.email.value,
              name: e.target.name.value,
              last_message: e.target.message.value,
            });
            splitbee.user.set(data);
            toast.promise(splitbee.track("Contact form filled", data), {
              loading: "Saving...",
              success: (
                <b>
                  Hey {data.name}, your message was saved, check your email!!!
                </b>
              ),
              error: <b>Oh no, we can't save your message, try again.</b>,
              duration: 5000,
            });
          }}
        >
          <Toaster />
          <div className="flex flex-col mt-2 mb-2">
            <label className="text-xl font-bold mb-2">Name</label>
            <input
              className="w-5/6 p-4 text-xl bg-gray-200"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2 mb-2">
            <label className="text-xl font-bold mb-2">Email</label>
            <input
              className="w-5/6 p-4 text-xl bg-gray-200"
              name="email"
              placeholder="Your contact email"
              required
              type="email"
            />
          </div>
          <div className="flex flex-col mt-2 mb-2">
            <label className="text-xl font-bold mb-2">Message</label>
            <textarea
              className="w-5/6 p-4 text-xl mb-4 bg-gray-200"
              name="message"
              placeholder="Your message"
              required
            />
          </div>
          <button className="button w-3/6 mt-4">
            <div className="button-up">
              <div className="button-text">
                <p className="font-bold">Submit</p>
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
