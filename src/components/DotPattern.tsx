const DotPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none opacity-20 ${className}`}
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    aria-hidden="true"
  >
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 10 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 20 + 10}
          cy={row * 20 + 10}
          r="2.5"
          fill="currentColor"
        />
      ))
    )}
  </svg>
);

export default DotPattern;
