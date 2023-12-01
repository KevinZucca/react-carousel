export default function Carousel({
  data,
  className,
  handleNext,
  handlePrev,
  pressKey,
}) {
  return (
    <>
      <div
        className={`card ${className} text-start w-1/2 border m-auto my-20 rounded-3xl flex flex-col justify-center items-center`}
      >
        <div className="card-header flex justify-between items-center relative w-full">
          <button
            onClick={handlePrev}
            onKeyDown={pressKey}
            className="btn bg-gray-600 border rounded-full p-6 h-3 flex justify-center items-center absolute left-3 top-1/2"
          >
            left
          </button>
          <img
            className="card-img-top border h-[600px] w-full"
            src={data.image}
            alt="Title"
          />
          <button
            onClick={handleNext}
            onKeyDown={pressKey}
            className="btn bg-gray-600 border rounded-full p-6 h-3 flex justify-center items-center absolute right-3 top-1/2"
          >
            right
          </button>
        </div>

        <div className="card-body">
          <h4 className="card-title text-center p-5">{data.location}</h4>
          <p className="card-text text-center p-5">{data.date}</p>
          <p className="card-text text-center p-5">{data.description}</p>
        </div>
      </div>
    </>
  );
}
