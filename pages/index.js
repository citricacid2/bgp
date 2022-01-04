import Head from "next/head";

export default function Home() {
  let questions = [
    {
      question: "what is the solution to the french revolution",
      answer: "lorem ipsum",
    },

  ];

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto grid place-content-center h-screen grid-cols-3">
        <div className="relative col-start-2 h-52">
          {questions.map((q) => (
            <div>
              <div className="rounded-2xl shadow-2xl p-5 bg-white h-52">
                <h2 className="font-bold text-xl">Question #1</h2>
                <p>{q.question}</p>
                <div className="flex flex-row">
                  <input
                    type="text"
                    placeholder="Your answer..."
                    className="my-2 p-2 border-2 rounded-xl flex-grow"
                  />
                  <button className="color px-4 m-2 py-2 text-white rounded-xl bg-blue-400">
                    Submit
                  </button>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
