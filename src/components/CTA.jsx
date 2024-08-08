/* eslint-disable react/prop-types */


const CTA = ({text, className}) => {
  return (
    <button className={`group relative px-14 py-5 border-golden border ${className}`}>
        <span className="px-1 relative z-10 group-hover:text-white">{text}</span>
        <span className="absolute left-0 bottom-0 w-full h-0 transition-all bg-golden z-0 group-hover:h-full"></span>
    </button>
  )
}

export default CTA;