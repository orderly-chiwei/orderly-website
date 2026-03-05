const whyIcon1 = "/images/Deep-Shared-Liquidity.png";
const whyIcon2 = "/images/Omnichain-by-Default.avif";
const whyIcon3 = "/images/you-own-the-economics.avif";
const whyIcon4 = "/images/ship-fast.avif";
const whyIcon5 = "/images/self-custody.avif";
const whyIcon6 = "/images/battle-tested.avif";

function WhyIconContainer() {
  return (
    <div className="absolute contents left-[224px] top-[233.29px]" data-name="Why Icon Container">
      <div className="absolute h-[199px] left-[224px] top-[233.29px] w-[143.5px]" data-name="Why Icon Container 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={whyIcon1} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>Deep Shared Liquidity</p>
      <p className="font-['Atyp_BL:Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        One orderbook powers every builder. Your users get CEX-grade depth from day one — no bootstrapping needed.
      </p>
      <WhyIconContainer />
    </div>
  );
}

function WhyIconContainer1() {
  return (
    <div className="absolute contents left-[164px] top-[232.29px]" data-name="Why Icon Container">
      <div className="absolute left-[164px] size-[200px] top-[232.29px]" data-name="Why Icon Container-1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={whyIcon2} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Omnichain by Default
      </p>
      <WhyIconContainer1 />
      <p className="font-['Atyp_BL:Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Live on Ethereum, Arbitrum, Base, Solana, and 14+ more. One integration, every chain.
      </p>
    </div>
  );
}

function WhyIconContainer2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+67.68px)] top-[calc(50%+88.94px)]" data-name="Why Icon Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[212px] left-[calc(50%+67.68px)] top-[calc(50%+88.94px)] w-[238.5px]" data-name="Why Icon Container-2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={whyIcon3} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white w-[356.006px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        You own the economics
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Set your own fees. Keep your revenue. No rev-share traps.
      </p>
      <WhyIconContainer2 />
    </div>
  );
}

function WhyIconContainer4() {
  return (
    <div className="absolute h-[296.01px] left-[152.85px] top-[179.7px] w-[257.15px]">
      <div className="absolute h-[296.5px] left-[-0.35px] top-0 w-[257.5px]" data-name="Frame 1618872050 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={whyIcon4} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Ship Fast
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.179px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        White-label DEX in minutes. SDK: full custom integration in days.
      </p>
      <WhyIconContainer4 />
    </div>
  );
}

function WhyIconContainer3() {
  return (
    <div className="absolute contents left-[192px] top-[228.92px]" data-name="Why Icon Container">
      <div className="absolute h-[222px] left-[192px] top-[228.92px] w-[181.5px]" data-name="Why Icon Container-4 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={whyIcon5} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Self Custody
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        User funds stay on-chain. No counterparty risk. Sleep at night.
      </p>
      <WhyIconContainer3 />
    </div>
  );
}

function WhyIconContainer5() {
  return (
    <div className="absolute contents left-[170.12px] top-[252.66px]" data-name="Why Icon Container">
      <div className="absolute h-[189.5px] left-[170.12px] top-[252.66px] w-[187.5px]" data-name="Why Icon Container-5 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={whyIcon6} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[20px] h-[483px] items-start overflow-clip p-[36px] relative rounded-[30px] shrink-0 w-[410px]" data-name="Container">
      <p className="font-['Atyp_BL:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[30px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Battle-Tested
      </p>
      <p className="font-['Atyp_BL:Medium',sans-serif] font-[507] h-[141.289px] leading-[1.3] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[344.875px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>{`$30B+ cumulative volume. Multiple audits. 1M+ users across the ecosystem.`}</p>
      <WhyIconContainer5 />
    </div>
  );
}

function WhyContentList() {
  return (
    <div className="flex gap-[25px] items-center" data-name="Why Content List">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

export default function WhyContent() {
  return (
    <div className="inline-flex" data-name="Why Content">
      <WhyContentList />
    </div>
  );
}
