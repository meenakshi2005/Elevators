import React from "react";

const Videos = () => {
  return (
    <div className="" style={{marginTop:"-10px",backgroundImage:"linear-gradient(#f5f2f0, #f7f6f5)"}}>
      <h2 className="text-start px-24 p-4 text-2xl font-bold leading-tight text-black ">
      Videos
      </h2>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 lg:grid-cols-2 gap-6 md:space-y-0">
        <div className="rounded-md border">
          <video
            controls
            // style={{ height: "50px", objectFit: "cover" }} // Set height and background cover
          >
            <source src="vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="rounded-md border">
          <video
            controls
          >
            <source src="vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="rounded-md border">
          <video
            controls
          >
            <source src="vid3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="rounded-md border">
          <video
            controls
          >
            <source src="vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Videos;
