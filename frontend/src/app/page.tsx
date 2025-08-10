"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: number;
  title: string;
  detail: string;
  photo: string;
}

export default function Home() {
  const [myblogs, setMyblogs] = useState<Post[]>([]);
  const getMyblog = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setMyblogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMyblog();
  }, []);

  return (
    <div className="py-4 px-10 flex h-[3000px]">
      <div className="w-1/6 text-black sticky top-20 self-start text-2xl font-medium border-l-4 min-h-screen bg-gray-100">
        <div className="bg-white">
          <Link href="/">
            <div className="w-full border-t-4 border-black bg-gray-800 text-white hover:bg-gray-200">
              Home
            </div>
          </Link>
          <div className="w-full border-y-4 hover:bg-gray-200 ">Profile</div>
          <Link href={"/blog"}>
            <div className="w-full border-b-4 hover:bg-gray-200">Write</div>
          </Link>
        </div>
      </div>
      <div className="w-5/6 border-l-4">
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
          <div className="flex flex-wrap  gap-2">
            {myblogs.map((post) => (
              <Link href={`/blog/${post._id}`} key={post._id}>
                <div className="shadow-xl hover:border-blue-500 hover:shadow-2xl hover:border-2 rounded-lg p-4 duration-100 ease-in-out w-64 h-64 bg-gradient-to-b from-blue-400 from-[20%] to-white to-[20%]">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {post.title}
                  </h3>
                  <p>{post.detail}</p>
                  {/* <Image
              src={post.photo}
              alt="Blog"
              width={400} // กำหนดความกว้างที่ต้องการ
              height={300} // กำหนดความสูงที่ต้องการ
              />{" "} */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
