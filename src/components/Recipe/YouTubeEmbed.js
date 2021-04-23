import React from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe 
      width="560" 
      height="315" 
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
  </div>
);

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTubeEmbed;