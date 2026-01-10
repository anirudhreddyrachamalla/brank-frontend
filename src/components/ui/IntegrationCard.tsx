interface IntegrationCardProps {
  icon: React.ReactNode;
  name: string;
}

export default function IntegrationCard({ icon, name }: IntegrationCardProps) {
  return (
    <div className="w-[150px] md:w-[172px] h-[150px] md:h-[172px] bg-card-bg rounded-[25px] md:rounded-[31.5px] border border-[#121212]/10 flex flex-col items-center justify-center gap-3 md:gap-[15.7px] shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300">
      <div className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-foreground font-mackinac text-lg md:text-[22px] font-normal leading-[1.25] md:leading-[27.6px] text-center">
        {name}
      </span>
    </div>
  );
}