import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Toast from "../../components/Toast";
import Spinner from "../../components/Spinner";
import { ipGetter } from "../../../utilities/ipgetter";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    msg: "Message sent!",
    code: "success",
  });
  const [inputs, setInputs] = useState({ email: "", subject: "", content: "" });

  const handleShowToast = (message, status) => {
    setToastMessage({
      msg: message,
      code: status,
    });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  function handleInputs(event) {
    const name = event.target.name;
    let value = event.target.value;

    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const ip = await ipGetter();
      const response = await axios.post(
        //Sends POST request to the server
        baseUrl + "/api/v1/contact-message",
        {
          email: inputs.email,
          subject: inputs.subject,
          content: inputs.content,
          ipv4: ip.ipv4,
          ipv6: ip.ipv6,
        },
        { withCredentials: true }
      );

      handleShowToast(response.data.msg, "success");
      setInputs({ email: "", subject: "", content: "" });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      const error_msg = err.response.data.msg || "There was an error :(";
      handleShowToast(error_msg, "error");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function logInteraction() {
      try {
        const ip = await ipGetter();
        const response = await axios.post(
          //Sends POST request to the server
          baseUrl + "/api/v1/page-interaction",
          {
            interaction_type: "public-page",
            interaction_descriptor: "page-visit",
            route: "/contact",
            origin_type: "site",
            ipv4: ip.ipv4,
            ipv6: ip.ipv6,
          },
          { withCredentials: true }
        );
      } catch (err) {
        console.log(err);
      }
    }
    logInteraction();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="z-10 w-full justify-center font-mono text-sm">
        <div className="bg-gradient-to-r min-h-screen max-h-full from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-10">
          <h2 className="text-3xl text-center justify-center font-bold tracking-tight text-white sm:text-4xl">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="text-center justify-center">
              <p className="text-lg justify-center tracking-tight text-white">
                Your Email*
              </p>
              <input
                required
                aria-label="email-input"
                name={"email"}
                value={inputs.email}
                onChange={handleInputs}
                className="required:border-red-500 h-[35px] w-[280px] md:w-[320px] lg:w-[360px] rounded-lg text-black p-2 m-2"
                type={"email"}
              />
              <p className="text-lg justify-center tracking-tight text-white">
                Subject*
              </p>
              <input
                required
                aria-label="subject-input"
                name={"subject"}
                value={inputs.subject}
                onChange={handleInputs}
                className="required:border-red-500 h-[35px] w-[280px] md:w-[320px] lg:w-[360px]  rounded-lg text-black p-2 m-2"
              />
              <p className="text-lg justify-center tracking-tight text-white">
                Message*
              </p>
              <textarea
                required
                aria-label="message-input"
                name={"content"}
                value={inputs.content}
                onChange={handleInputs}
                className="required:border-red-500 h-[100px] w-[280px] md:w-[320px] lg:w-[360px]  rounded-lg text-black p-2 m-2"
              />
              <br />
              {isLoading ? (
                <Spinner message={"Loading... "} />
              ) : (
                <button
                  className="bg-white text-lg rounded-lg text-black p-2 m-2 w-[120px] hover:bg-sky-700"
                  type={"submit"}
                  aria-label="submit-button"
                >
                  Submit!
                </button>
              )}
              {showToast && (
                <Toast
                  message={toastMessage.msg}
                  status={toastMessage.code}
                  onClose={() => setShowToast(false)}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
