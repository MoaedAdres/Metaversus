import styles from "../styles";
const StartSteps = ({number,text}) => (
  <div className="flex flex-row">
    <div
      className={`${styles.flexCenter} bg-[#323f5d]
      w-[70px] h-[70px] rounded-[24px] `}>
        <p className="text-white text-[20px] font-bold leading-normal">
          0{number}
        </p>
    </div>
    <p className=" flex-1 text-[18px] font-normal leading-[32px] text-[#B0B0B0] ml-[30px]">
          {text}
        </p>
  </div>
);

export default StartSteps;
