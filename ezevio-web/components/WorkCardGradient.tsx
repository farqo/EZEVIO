type Blob = { cx: number; cy: number; fill: string };

export type WorkCardGradientSpec = {
  base: string;
  blobs: readonly Blob[];
};

type Props = {
  id: string;
  spec: WorkCardGradientSpec;
};

const BLOB_TRAVEL = [
  { dx: [0, -210, 140, 0], dy: [0, 180, -90, 0], dur: "6.5s" },
  { dx: [0, 190, -160, 0], dy: [0, -170, 140, 0], dur: "8s" },
  { dx: [0, 160, 90, 0], dy: [0, 200, -150, 0], dur: "7.2s" },
  { dx: [0, -180, 170, 0], dy: [0, -160, -80, 0], dur: "9s" },
  { dx: [0, 120, -220, 0], dy: [0, 150, 90, 0], dur: "7.8s" },
  { dx: [0, -150, 80, 0], dy: [0, -200, 170, 0], dur: "6.8s" },
] as const;

/** Mesh gradient from the work-card SVGs, with independently drifting color blobs. */
export function WorkCardGradient({ id, spec }: Props) {
  const filterId = `${id}-card-blur`;
  return (
    <svg
      className="work-card-thumb work-card-gradient-svg"
      viewBox="0 0 675 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <filter
          id={filterId}
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="167" result="effect1_foregroundBlur" />
        </filter>
      </defs>
      <rect width="675" height="900" fill={spec.base} />
      <g filter={`url(#${filterId})`}>
        {spec.blobs.map((blob, i) => {
          const travel = BLOB_TRAVEL[i % BLOB_TRAVEL.length];
          return (
            <circle
              key={i}
              cx={blob.cx}
              cy={blob.cy}
              r="371"
              fill={blob.fill}
            >
              <animate
                attributeName="cx"
                values={travel.dx.map((d) => blob.cx + d).join(";")}
                dur={travel.dur}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={travel.dy.map((d) => blob.cy + d).join(";")}
                dur={travel.dur}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </g>
    </svg>
  );
}
