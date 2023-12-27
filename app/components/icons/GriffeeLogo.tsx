import * as React from 'react';
import type {SVGProps} from 'react';
const SvgGriffeeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 64 64"
    {...props}
  >
    <g fillRule="evenodd">
      <path
        fill="#212121"
        d="M52 1c6.627 0 12 5.373 12 12v37.6c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V13C0 6.373 5.373 1 12 1z"
      />
      <path
        fill="#FFF"
        d="M17.6 19.694a6.4 6.4 0 0 1 12.8 0V42.2a6.4 6.4 0 0 1-12.8.106V19.8zM35.2 41.4a7.2 7.2 0 1 1 14.4 0 7.2 7.2 0 0 1-14.4 0"
      />
    </g>
  </svg>
);
export default SvgGriffeeLogo;
