export default function ColorSwatches() {
  return (
    <div className="flex flex-wrap gap-2 absolute bottom-2 right-2">
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-text">
        <span className="text-primaryBtn">text</span>
        <span className="text-primaryBtn">{`#fefdfb`}</span>
      </div>
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-bg">
        <span className="text-primaryBtn">bg</span>
        <span className="text-primaryBtn">{`#140f05`}</span>
      </div>
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-primaryBtn">
        <span className="text-text">primaryBtn</span>
        <span className="text-text">{`#4370cb`}</span>
      </div>
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-secondaryBtn">
        <span className="text-text">secondaryBtn</span>
        <span className="text-text">{`#241b0a`}</span>
      </div>
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-accent">
        <span className="text-text">accent</span>
        <span className="text-text">{`#4370cb`}</span>
      </div>
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-secondaryBg1">
        <span className="text-text">secondaryBg1</span>
        <span className="text-text">{`#201b12`}</span>
      </div>
      <div className="w-32 h-32 flex flex-col justify-center items-center bg-secondaryBg2">
        <span className="text-text">secondaryBg2</span>
        <span className="text-text">{`#17140f`}</span>
      </div>
    </div>
  )
}
