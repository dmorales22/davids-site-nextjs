import Navbar from "@/components/Navbar";
import { useState } from "react";
import Toast from "../../components/Toast";

export default function Index() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Message sent!");
  const [inputs, setInputs] = useState({ email: "", subject: "", content: "" });

  const handleShowToast = (message) => {
    setToastMessage(message);
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

    try {
      handleShowToast("Message sent!");
      setInputs({ email: "", subject: "", content: "" });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <main>
      <Navbar />
      <div className="z-10 w-full justify-center font-mono text-sm">
        <div className="bg-gradient-to-r min-h-screen max-h-full from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-10">
          <p className="text-lg text-center justify-center tracking-tight text-white">
            Contact form is currently not functional. Please contact me at my
            email: <a href="mailto:dmoral1414@gmail.com">dmoral1414@gmail.com</a>
          </p>
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
                name={"content"}
                value={inputs.content}
                onChange={handleInputs}
                className="required:border-red-500 h-[100px] w-[280px] md:w-[320px] lg:w-[360px]  rounded-lg text-black p-2 m-2"
              />
              <br />
              <button
                className="bg-white text-lg rounded-lg text-black p-2 m-2 w-[120px] hover:bg-sky-700"
                type={"submit"}
              >
                Submit!
              </button>
              {showToast && (
                <Toast
                  message={toastMessage}
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
