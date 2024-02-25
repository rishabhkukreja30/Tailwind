import React from "react";

const VideoCard = ({ title, channel, views, postedAt }) => {
  return (
    <div className="p-3 cursor-pointer">
      <img className="rounded-lg" src="/yt.jpg" alt="card image" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img
            className="rounded-full"
            src="/thumb.png"
            alt="thumbnail image"
          />
        </div>
        <div className="col-span-11 pl-2 ">
          <div className="font-medium">{title}</div>
          <div className="text-gray-500 text-base">{channel}</div>
          <div className="flex">
            <div className="text-gray-500 text-base">{views}M views</div>
            <div className="text-gray-500 text-base pl-2">{postedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
