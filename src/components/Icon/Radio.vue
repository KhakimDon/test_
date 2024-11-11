<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_4561_32072)" />
    <circle cx="12" cy="12" r="11.5" stroke="#E4E4E4" stroke-opacity="0.1" />
    <g filter="url(#filter0_d_4561_32072)">
      <circle cx="12" cy="12" r="7" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_d_4561_32072"
        x="3"
        y="5"
        width="18"
        height="18"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_4561_32072"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4561_32072"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4561_32072"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4561_32072"
        x1="13.05"
        y1="24.3"
        x2="13.05"
        y2="-1.47569e-06"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0073FF" />
        <stop offset="1" stop-color="#00C2FF" />
      </linearGradient>
    </defs>
  </svg>
</template>
