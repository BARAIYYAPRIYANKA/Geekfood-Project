import "./Loader.css";
export const Loader = () => {
  return (
    <div className="mt-20 justify-center items-center flex flex-col gap-5 py-20">
        <div className="dot-spinner p-8">
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
    <h1 className="text-2xl font-bold  text-red-600">If it takes long time, please refresh the page or Try something else</h1>
    </div>
  );
};