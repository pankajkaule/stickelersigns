import React from 'react';

function ProjectsIcon() {
  return (
    <svg width="160px" height="120px" viewBox="0 0 160 120" version="1.1">
      <defs>
        <filter
          x="-37.5%"
          y="-37.7%"
          width="175.0%"
          height="175.5%"
          filterUnits="objectBoundingBox"
          id="projects-filter-1">
          <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="projects-linearGradient-2">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0.282411318%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0.282411318%"
          x2="50%"
          y2="100%"
          id="projects-linearGradient-3">
          <stop stop-color="#596E9B" stop-opacity="0.25" offset="0%"></stop>
          <stop stop-color="#0D1424" stop-opacity="0.25" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="Projects-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(29.000000, 10.000000)">
          <path
            d="M21.0204082,20 L77.6524223,20 C79.5055556,20 81.2547056,20.8562992 82.3913149,22.3199324 L89.7593007,31.8078268 C90.5767072,32.8604167 91.0204082,34.1551909 91.0204082,35.4878944 L91.0204082,89.5123244 C91.0204082,95.0351719 86.5432557,99.5123244 81.0204082,99.5123244 L21.0204082,99.5123244 C15.4975607,99.5123244 11.0204082,95.0351719 11.0204082,89.5123244 L11.0204082,30 C11.0204082,24.4771525 15.4975607,20 21.0204082,20 Z"
            id="Rectangle"
            fill-opacity="0.2"
            fill="#09090A"
            filter="url(#projects-filter-1)"></path>
          <path
            d="M10,0.5 C4.75329488,0.5 0.5,4.75329488 0.5,10 L0.5,69.5123244 C0.5,74.7590295 4.75329488,79.0123244 10,79.0123244 L92.0408163,79.0123244 C97.2875214,79.0123244 101.540816,74.7590295 101.540816,69.5123244 L101.540816,15.9003361 C101.540816,14.4507208 100.968522,13.0597197 99.948383,12.0298164 L90.1419106,2.12948035 C89.1089952,1.08667835 87.7021143,0.5 86.2343439,0.5 L10,0.5 Z"
            id="Rectangle"
            stroke="#FFFFFF"
            fill="url(#projects-linearGradient-2)"></path>
          <path
            d="M89.2755102,2.22751494 L89.2755102,9.26530612 C89.2755102,11.1983027 90.8425136,12.7653061 92.7755102,12.7653061 L99.8133014,12.7653061 L89.2755102,2.22751494 Z"
            id="Rectangle-Copy-14"
            stroke="#FFFFFF"
            fill="url(#projects-linearGradient-3)"></path>
          <path
            d="M56.121805,28.7263807 L62.2652099,49.3499298 C62.7382186,50.9378306 61.8344199,52.6085278 60.2465192,53.0815364 C59.6876808,53.2480049 59.0924417,53.2480049 58.5336033,53.0815364 L37.9100541,46.9381315 C36.8514536,46.6227924 36.2489212,45.5089943 36.5642603,44.4503938 C36.6591256,44.131929 36.8318453,43.8421194 37.0668125,43.6071522 L52.7908257,27.8831391 C53.5718742,27.1020905 54.8382042,27.1020905 55.6192528,27.8831391 C55.85422,28.1181063 56.0269397,28.4079159 56.121805,28.7263807 Z"
            id="Rectangle-Copy-11"
            fill="#FFFFFF"
            transform="translate(49.271137, 40.087464) scale(1, -1) rotate(-45.000000) translate(-49.271137, -40.087464) "></path>
        </g>
      </g>
    </svg>
  );
}

export default ProjectsIcon;
