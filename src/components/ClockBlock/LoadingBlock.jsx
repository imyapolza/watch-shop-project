import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="clock-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="131" cy="147" r="112" />
      <rect x="-4" y="276" rx="0" ry="0" width="280" height="26" />
      <rect x="-2" y="313" rx="6" ry="6" width="280" height="84" />
      <rect x="22" y="378" rx="6" ry="6" width="22" height="3" />
      <rect x="119" y="392" rx="6" ry="6" width="1" height="0" />
      <rect x="137" y="416" rx="20" ry="20" width="136" height="40" />
      <rect x="1" y="420" rx="6" ry="6" width="90" height="28" />
    </ContentLoader>
  );
}

export default LoadingBlock;
