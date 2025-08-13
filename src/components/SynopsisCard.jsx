import React, { useEffect, useState } from "react";
import axios from "axios";

const SynopsisCard = (props) => {
  const synopsisArr = [
    {
      title: "movie1",
      summary:
        "Upon graduation, highly trained teenage assassins Chisato and Mahiro are informed by upper management that they will need to hold down “normal” jobs as a cover, and—even worse—they’ll be forced to share an apartment. However, after an unfortunate run-in with a Yakuza member, the two must band together to survive an epic fight for their lives.",
      apiCall: "http://www.omdbapi.com/?t=baby+assassins",
      youtubeSrc: "https://www.youtube.com/watch?v=BXTWQxqdKo8",
      websiteSrc: "https://babywalkure.com/bw01/",
      bgColor: "bg-(--color-BA1-red)",
      btnColor: "bg-(--color-BA1-yellow)",
      btnTextColor: "text-(--color-BA1-red)",
    },
    {
      title: "movie1",
      summary:
        "Chisato and Mahiro were banned from performing tasks because they violated the organization's rules?! Needing money to make ends meet, they resumed their days as part time workers. The two are busy working to earn money, but they suddenly encounter other assassins who are after them. What should they do if they can't reveal their identity as assassins when they are not on duty?",
      apiCall: "http://www.omdbapi.com/?t=baby+assassins%3A+2+babies",
      youtubeSrc: "https://www.youtube.com/watch?v=rvMR90x3T3w",
      websiteSrc: "https://babywalkure.com/",
      bgColor: "bg-(--color-BA1-red)",
      btnColor: "bg-(--color-BA2-blue)",
      btnTextColor: "text-(--color-BA1-red)",
    },
    {
      title: "movie1",
      summary:
        "Teen assassins and BFFs, Chisato and Mahiro head to a coastal resort for a well-deserved vacation when The Agency calls with an assignment -- take out an embezzler. Unfortunately, the gig has been double-booked, and the duo cross paths with an unpredictably vicious freelancer out to add to his personal kill count. What should have been a straightforward mission becomes a test of their friendship and killing skills, as the ruthless killer targets the two young roomies.",
      apiCall: "http://www.omdbapi.com/?t=baby+assassins%3A+nice+days",
      youtubeSrc: "https://www.youtube.com/watch?v=gKGRaNzLt8M",
      websiteSrc: "https://babywalkure-nicedays.com/",
      bgColor: "bg-(--color-dark-blue)",
      btnColor: "bg-(--color-title-red)",
      btnTextColor: "text-(--color-dark-blue)",
    },
  ];

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [apiCall, setApiCall] = useState(synopsisArr[0].apiCall);

  useEffect(() => {
    props.selection.map((selected, index) => {
      if (selected.active === true) {
        return setApiCall(synopsisArr[index].apiCall);
      }
    });

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${apiCall}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
        );
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.selection, apiCall]);

  if (error) return <div>error fetching data! check again soon!</div>;

  return props.selection.map((selected, index) => {
    if (selected.active === true) {
      return (
        <div
          key={index}
          className={`${synopsisArr[index].bgColor} text-(--color-white) font-(family-name:--font-text)
  p-[1.5em] pt-[3em] pb-[3em]
  flex flex-col

  md:flex-row-reverse md:gap-x-[50px] md:justify-center `}
        >
          <div className="md:max-w-[600px]">
            <p className="text-[1.15rem]">{synopsisArr[index].summary}</p>
            <div className="flex justify-between items-center mb-[2em] mt-[2em]">
              {loading ? (
                <>
                  <div>Loading...</div>
                </>
              ) : (
                <>
                  <p>
                    Released: {data.Released} <br /> RunTime: {data.Runtime}
                    <br />
                    Genre: {data.Genre}
                    <br />
                    Director: {data.Director}
                  </p>
                  <p>
                    Ratings <br />
                    {data.Ratings.map((rating, i) => {
                      return (
                        <span key={i}>
                          {rating.Source} : {rating.Value}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                </>
              )}
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-y-[20px]
    md:max-w-[500px]"
          >
            <a href={synopsisArr[index].youtubeSrc}>
              <button
                className={`flex items-center justify-center cursor-pointer w-[200px] h-[45px] rounded-[10px] text-[1.5rem]
       ${synopsisArr[index].btnColor} ${synopsisArr[index].btnTextColor} font-(family-name:--font-titles)
        uppercase font-bold shadow-[0px_5px_6px_rgba(0,0,0,1)]`}
              >
                trailer
              </button>
            </a>
            <a href={synopsisArr[index].websiteSrc} target="_blank">
              <button
                className={`flex items-center justify-center cursor-pointer w-[200px] h-[45px] rounded-[10px] text-[1.5rem]
        ${synopsisArr[index].btnColor} ${synopsisArr[index].btnTextColor} font-(family-name:--font-titles)
        uppercase font-bold shadow-[0px_5px_6px_rgba(0,0,0,1)]`}
              >
                website
              </button>
            </a>
          </div>
        </div>
      );
    }
  });
};

export default SynopsisCard;
