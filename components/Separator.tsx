export default function Separator() {
  return (
    <div className="relative w-full py-12 flex justify-center">
      <div className="h-[2px] w-4/5 bg-gradient-to-r from-transparent via-blue-500 via-purple-500 via-pink-500 to-transparent"></div>
      <div className="absolute h-[4px] w-3/4 bg-gradient-to-r from-transparent via-blue-600 via-purple-600 via-pink-600 to-transparent blur-md opacity-70"></div>
    </div>
  );
}
