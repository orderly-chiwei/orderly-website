const imgFrame16188720501 = "/images/ship-fast.avif";

function Frame() {
  return (
    <div className="absolute h-[296.01px] left-[152.85px] top-[179.7px] w-[257.15px]">
      <div className="absolute h-[296.5px] left-[-0.35px] top-0 w-[257.5px]" data-name="Frame 1618872050 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame16188720501} />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[36px] relative rounded-[30px] size-full" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[32px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Ship Fast
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.179px] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        White-label DEX in minutes. SDK: full custom integration in days.
      </p>
      <Frame />
    </div>
  );
}