const imgWhyIconContainer3 = "/images/Deep-Shared-Liquidity.png";
const imgWhyIconContainer12 = "/images/Omnichain-by-Default.avif";
const imgWhyIconContainer22 = "/images/you-own-the-economics.avif";
const imgWhyIconContainer31 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/pooBPQAAAABJRU5ErkJggg==";
const imgWhyIconContainer42 = "/images/self-custody.avif";
const imgWhyIconContainer52 = "/images/battle-tested.avif";

function WhyIconContainer() {
  return (
    <div className="absolute contents left-[135.85px] top-[144.63px]" data-name="Why Icon Container">
      <div className="absolute h-[110px] left-[135.85px] top-[144.63px] w-[79.322px]" data-name="Why Icon Container 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyIconContainer3} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[12.096px] h-[290px] items-start overflow-clip px-[20px] py-[21.772px] relative rounded-[18.143px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Deep Shared Liquidity
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[70.984px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[200px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        One orderbook powers every builder. Your users get CEX-grade depth from day one — no bootstrapping needed.
      </p>
      <WhyIconContainer />
    </div>
  );
}

function WhyIconContainer1() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[110px] top-[calc(50%+55.21px)]" data-name="Why Icon Container">
      <div className="-translate-y-1/2 absolute left-[110px] size-[110px] top-[calc(50%+55.21px)]" data-name="Why Icon Container-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyIconContainer12} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[12.096px] h-[290px] items-start overflow-clip px-[20px] py-[21.772px] relative rounded-[18.143px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Omnichain by Default
      </p>
      <WhyIconContainer1 />
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[85.449px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[198px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Live on Ethereum, Arbitrum, Base, Solana, and 14+ more. One integration, every chain.
      </p>
    </div>
  );
}

function WhyIconContainer2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+42.54px)] top-[calc(50%+53.62px)]" data-name="Why Icon Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[112.148px] left-[calc(50%+42.54px)] top-[calc(50%+53.62px)] w-[126.167px]" data-name="Why Icon Container-2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyIconContainer22} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[12.096px] h-[290px] items-start overflow-clip px-[20px] py-[21.772px] relative rounded-[18.143px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] relative shrink-0 text-[17px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        You own the economics
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[85.449px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[200px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Set your own fees. Keep your revenue. No rev-share traps.
      </p>
      <WhyIconContainer2 />
    </div>
  );
}

function WhyIconContainer3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents h-[205.151px] left-[calc(50%+48.3px)] top-[calc(50%+54.42px)] w-[189.492px]" data-name="Why Icon Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[165.131px] left-[calc(50%+48.3px)] top-[calc(50%+54.42px)] w-[143.41px]" data-name="Why Icon Container-3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyIconContainer31} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[12.096px] h-[290px] items-start overflow-clip px-[20px] py-[21.772px] relative rounded-[18.143px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Ship Fast
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[85.449px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[198px] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        {`White-label DEX in minutes. SDK: full custom integration `}
        <br aria-hidden="true" />
        in days.
      </p>
      <WhyIconContainer3 />
    </div>
  );
}

function WhyIconContainer4() {
  return (
    <div className="absolute contents right-[23.86px] top-[145px]" data-name="Why Icon Container">
      <div className="absolute h-[120.668px] right-[23.86px] top-[145px] w-[98.654px]" data-name="Why Icon Container-4 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyIconContainer42} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[12.096px] h-[290px] items-start overflow-clip px-[20px] py-[21.772px] relative rounded-[18.143px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Self Custody
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[85.449px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[175.653px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        User funds stay on-chain. No counterparty risk. Sleep at night.
      </p>
      <WhyIconContainer4 />
    </div>
  );
}

function WhyIconContainer5() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+43.37px)] top-[150.48px]" data-name="Why Icon Container">
      <div className="-translate-x-1/2 absolute h-[114.617px] left-[calc(50%+43.37px)] top-[150.48px] w-[113.408px]" data-name="Why Icon Container-5 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyIconContainer52} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[12.096px] h-[290px] items-start overflow-clip px-[20px] py-[21.772px] relative rounded-[18.143px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] min-w-full relative shrink-0 text-[17px] text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Battle-Tested
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[85.449px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[198px] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        {`$30B+ cumulative volume. `}
        <br aria-hidden="true" />
        Multiple audits. 1M+ users across the ecosystem.
      </p>
      <WhyIconContainer5 />
    </div>
  );
}

export default function WhyContentList() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative size-full" data-name="Why Content List">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}