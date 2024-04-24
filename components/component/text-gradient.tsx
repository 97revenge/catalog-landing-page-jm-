export function TextAnimatedGradient({ ...props }) {
  return (
    <h1
      className="inline-flex animate-text-gradient bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200 bg-[200%_auto]  text-transparent bg-clip-text text-6xl text-center font-bold tracking-tighter"
      {...props}
    ></h1>
  );
}
