function CardUser({ data, clasedesfase }) {
  return (
    <div className={`flex flex-col items-start w-full font-sans ${clasedesfase}`}>
      <div className="relative flex items-stretch w-full gap-1 md:gap-2">
        <div className="w-full overflow-hidden rounded-sm bg-slate-800 aspect-3/4">
          <img 
            src={data.img} 
            alt={data.name} 
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
        <div className="flex items-start pt-1 md:pt-2">
          <p 
            className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-300 font-sans select-none whitespace-nowrap" 
            style={{ writingMode: 'vertical-lr' }}
          >
            {data.title}
          </p>
        </div>
      </div>
      <h3 className="text-sm md:text-base font-semibold text-white mt-2 md:mt-3 tracking-wide">
        {data.name}
      </h3>
    </div>
  );
}

export default CardUser;