/* eslint-disable react/prop-types */
export default function Carousel({
  data,
  className,
  handleNext,
  handlePrev,
  pressKey,
  object,
  index,
  seeImg,
}) {
  return (
    <>
      <div
        className={`card ${className} text-start w-1/2 border m-auto my-20 rounded-xl flex flex-col justify-center items-center`}
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
            className="card-img-top border h-[600px] w-full rounded-t-lg"
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

          <div
            id="index-container"
            className="absolute bottom-2 flex gap-3 justify-center items-center right-1/2 translate-x-1/2"
          >
            {object.map((el, j) => (
              <div
                key={j}
                onClick={() => seeImg(j)}
                className={`w-7 h-7 rounded-full border hover:cursor-pointer ${
                  j === index ? "bg-white" : "bg-transparent"
                }`}
              ></div>
            ))}
          </div>
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
