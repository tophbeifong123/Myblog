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
    <div className="h-screen">
      <h2 className="text-2xl font-bold mb-4">Welcome to My Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myblogs.map((post) => (
          <Link href={`/blog/${post._id}`} key={post._id}>
            <div className="border-4 rounded-lg p-4">
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
  );
}
