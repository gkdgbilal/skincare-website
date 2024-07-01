import CountUp from "react-countup";

type StatsItemProps = {
  countNum: number;
  countText?: string;
  text: string;
};

const StatsItem = ({ countNum, countText, text }: StatsItemProps) => {
  return (
    <div className='text-center font-primary'>
      <div className='text-[40px] text-accent mb-4'>
        <CountUp end={countNum} duration={6} delay={2.4} />
        <span>{countText}</span>
      </div>
      <p className='text-lg'>{text}</p>
    </div>
  );
};

export default StatsItem;
