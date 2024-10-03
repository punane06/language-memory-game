const ArrowLeftIcon = ({
    height = '32px',
    width = '32px',
    fill = 'currentColor',
    stroke = 'currentColor',
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill={fill}
    stroke={stroke}
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.75 15H6.25m0 0L15 23.75M6.25 15 15 6.25"
    />
  </svg>
)

export default ArrowLeftIcon