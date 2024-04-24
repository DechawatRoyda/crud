import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 
            flex justify-between gap-5 items-start flex-wrap"
        >
          <div>
            <h1 className="font-bold text-2xl text-wrap ">{t.title}</h1>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2 cols-2">
            <div className="grid grid-cols-2 ">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
              {/* <input
                type="number"
                className=" border border-slate-800 rounded-sm w-10 flex mt-3 text-center mr-2"
              ></input>
              <button className="bg-slate-800 hover:bg-slate-700 text-white  w-fit  h-5 rounded flex mt-4 items-center p-1">
                add
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
