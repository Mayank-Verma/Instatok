import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <StyledWrapper style={{ width: "30px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="loader"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          fillRule="evenodd"
          fill="none"
          strokeWidth={1}
          stroke="none"
        >
          <line y2={6} x2={24} y1={2} x1={24} />
          <line
            transform="translate(34, 6.679) rotate(30) translate(-34, -6.679)"
            y2="8.679"
            x2={34}
            y1="4.679"
            x1={34}
          />
          <line
            transform="translate(41.321, 14) rotate(60) translate(-41.321, -14)"
            y2={16}
            x2="41.321"
            y1={12}
            x1="41.321"
          />
          <line
            transform="translate(44, 24) rotate(90) translate(-44, -24)"
            y2={26}
            x2={44}
            y1={22}
            x1={44}
          />
          <line
            transform="translate(41.321, 34) rotate(120) translate(-41.321, -34)"
            y2={36}
            x2="41.321"
            y1={32}
            x1="41.321"
          />
          <line
            transform="translate(34, 41.321) rotate(150) translate(-34, -41.321)"
            y2="43.321"
            x2={34}
            y1="39.321"
            x1={34}
          />
          <line
            transform="translate(24, 44) rotate(180) translate(-24, -44)"
            y2={46}
            x2={24}
            y1={42}
            x1={24}
          />
          <line
            transform="translate(14, 41.321) rotate(210) translate(-14, -41.321)"
            y2="43.321"
            x2={14}
            y1="39.321"
            x1={14}
          />
          <line
            transform="translate(6.679, 34) rotate(240) translate(-6.679, -34)"
            y2={36}
            x2="6.679"
            y1={32}
            x1="6.679"
          />
          <line
            transform="translate(4, 24) rotate(270) translate(-4, -24)"
            y2={26}
            x2={4}
            y1={22}
            x1={4}
          />
          <line
            transform="translate(6.679, 14) rotate(300) translate(-6.679, -14)"
            y2={16}
            x2="6.679"
            y1={12}
            x1="6.679"
          />
          <line
            transform="translate(14, 6.679) rotate(330) translate(-14, -6.679)"
            y2="8.679"
            x2={14}
            y1="4.679"
            x1={14}
          />
        </g>
      </svg>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 30px;
    height: 30px;
    transform: rotate(0deg);
    animation: spin 2.4s linear infinite;
  }

  .loader line {
    stroke: #ffffff; /* White color for better visibility */
    stroke-width: 4;
    stroke-linecap: round;
    opacity: 0.8;
    stroke-dasharray: 10;
    stroke-dashoffset: 10;
    animation: dash 2.4s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 10;
      opacity: 0.8;
    }
    50% {
      stroke-dashoffset: 0;
      opacity: 0.4;
    }
    100% {
      stroke-dashoffset: 10;
      opacity: 0.8;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;