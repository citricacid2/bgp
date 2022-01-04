import Head from "next/head";

export default function Home() {

  let questions = {}

  return (
    <div>
      <div className="container mx-auto grid place-content-center h-screen bg-gray-200 grid-cols-3">
        <div className="relative col-start-2">
          <div className="rounded-2xl shadow-2xl p-5 bg-white absolute top-0 left-0 rotate-2">
            <h2 className="font-bold text-xl">Question #1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis accusamus iure similique ipsa ipsam officia in labore
              a. Quo tempore ipsa blanditiis nulla inventore ratione repellendus
              voluptas optio iure praesentium?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl p-5 bg-white absolute top-0 left-0 rotate-3">
            <h2 className="font-bold text-xl">Question #1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis accusamus iure similique ipsa ipsam officia in labore
              a. Quo tempore ipsa blanditiis nulla inventore ratione repellendus
              voluptas optio iure praesentium?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl p-5 bg-white absolute top-0 left-0">
            <h2 className="font-bold text-xl">Question #1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis accusamus iure similique ipsa ipsam officia in labore
              a. Quo tempore ipsa blanditiis nulla inventore ratione repellendus
              voluptas optio iure praesentium?
            </p>
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
      </div>
    </div>
  );
}
