export default function Test({ params }: { params: { slug: string } }) {
  return (
    <div className="h-screen">
      <h1>Blog {params.slug}</h1>
    </div>
  );
}
