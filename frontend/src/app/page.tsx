"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  _id: number;
  title: string;
  body: string;
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
    <div className="py-4 flex">
      <div className="w-1/3 text-black sticky top-20 self-start text-4xl">
        <Link href="/">
          <div className="w-full border-t-4">Home</div>
        </Link>
        <div className="w-full border-y-4">Profile</div>
        <Link href={"/blog"}>
          <div className="w-full border-b-4">Write</div>
        </Link>
      </div>
      <div className="w-2/3">
        <div className="bg-gray-200 p-10 border-y-4 border-x-4 border-gray-500 ">
          <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
          <div className="flex flex-wrap flex-col gap-2">
            {myblogs.map((post) => (
              <Link href={`/blog/${post._id}`} key={post._id}>
                <div className="border-4 rounded-lg p-4 hover:bg-gray-300 ">
                  {/* <Image
              src={post.photo}
              alt="Blog"
              width={400} // กำหนดความกว้างที่ต้องการ
              height={300} // กำหนดความสูงที่ต้องการ
              />{" "} */}
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
