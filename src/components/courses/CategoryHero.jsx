export default function CategoryHero({ title, description }) {
  return (
    <div className="py-20 text-center bg-gradient-to-r from-pink-600 to-purple-700 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 max-w-2xl mx-auto text-gray-200">
        {description}
      </p>
    </div>
  );
}