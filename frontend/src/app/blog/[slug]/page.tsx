import Link from "next/link";

export default function Test({ params }: { params: { slug: string } }) {
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
          <div className="flex flex-wrap flex-col gap-2"></div>
        </div>
      </div>
    </div>
  );
}
