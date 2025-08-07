import React from "react";

const WatchNow = (props) => {
  return (
    <div
      className="bg-(--color-black) text-(--color-white) font-(family-name:--font-titles) uppercase
    flex flex-col justify-center items-center pt-[3em] pb-[3em]
    
    md:flex-row md:pl-[2em] "
    >
      <div className="mb-[2em] md:bg-blue-300">
        <img src={props.poster} alt="movie poster" className="w-[200px]" />
      </div>

      <div
        className="justify-self-start align-self-start w-[85%] 
      md:  md:h-[300px] md:place-content-start md: md:w-[400px] md:ml-[2em]
      lg:w-[600px]"
      >
        {props.stream ? (
          <>
            <div className="">
              <h2 className="text-[1.25rem]">Stream</h2>
              <div className="mt-[0.5em] flex flex-wrap gap-[10px]">
                {props.stream.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="border-(--color-title-red) border-2 w-[100px] rounded-[50px] h-[30px] 
              text-(--color-gray) hover:text-(--color-white) text-[0.85rem]
            flex justify-center items-center cursor-pointer"
                    >
                      {service}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {props.rent ? (
          <div className="mt-[1.5em]">
            <h2 className="text-[1.25rem]">Rent</h2>
            <div className="mt-[0.5em] flex flex-wrap gap-[10px]">
              {props.rent.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="border-(--color-title-red) border-2 w-[100px] rounded-[50px] h-[30px] 
              text-(--color-gray) hover:text-(--color-white) text-[0.85rem]
            flex justify-center items-center cursor-pointer"
                  >
                    {service}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        {props.buy ? (
          <h2
            className="flex justify-center text-[1.25rem] 
          md:items-center md:h-[280px] md:justify-start md:pl-[1em]"
          >
            {props.buy}
          </h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WatchNow;
