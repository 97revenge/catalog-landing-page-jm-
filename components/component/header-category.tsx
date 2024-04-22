export function HeaderCategory({ ...props }) {
  return (
    <div className="w-full">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col gap-1.5 py-6 items-center"
          {...props}
        ></div>
      </div>
    </div>
  );
}
