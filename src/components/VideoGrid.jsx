import React from "react";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const VIDEOS = [
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
    {
      title: "Learn Full Stack Web Development | MERN Stack",
      channel: "Harkirat Singh",
      views: 2.1,
      postedAt: "2 months ago",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <VideoCard
          title={video.title}
          channel={video.channel}
          views={video.views}
          postedAt={video.postedAt}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
