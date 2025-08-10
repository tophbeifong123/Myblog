import Link from "next/link";

export default function Test({ params }: { params: { slug: string } }) {
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
          <div className="flex flex-wrap flex-col gap-2"></div>
        </div>
      </div>
    </div>
  );
}
