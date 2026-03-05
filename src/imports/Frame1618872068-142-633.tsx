'use client';

import { useState, useEffect, useRef, memo } from "react";
import CheckIcon from "@mui/icons-material/Check";
import svgPaths from "./svg-4hybjba00c";
const imgMacBook11 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/pooBPQAAAABJRU5ErkJggg==";
const imgWhyIconContainer3 = "/images/Deep-Shared-Liquidity.png";
const imgWhyIconContainer12 = "/images/Omnichain-by-Default.avif";
const imgWhyIconContainer22 = "/images/you-own-the-economics.avif";
const imgWhyIconContainer31 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/pooBPQAAAABJRU5ErkJggg==";
const imgWhyIconContainer42 = "/images/self-custody.avif";
const imgWhyIconContainer52 = "/images/battle-tested.avif";

function Brandmark() {
  return (
    <div className="h-[31.961px] relative shrink-0 w-[32px]" data-name="Brandmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9999 31.9608">
        <g id="Brandmark">
          <path clipRule="evenodd" d={svgPaths.p2fe0400} fill="var(--fill-0, white)" fillRule="evenodd" id="Intersect" />
          <path clipRule="evenodd" d={svgPaths.p2f88ca00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p22c01780} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract_2" />
          <path clipRule="evenodd" d={svgPaths.p527fe00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px" />;
}

function Menu({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[32px] cursor-pointer hover:opacity-80 active:opacity-60 transition-opacity"
      data-name="menu"
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <rect x="4" y="9"  width="24" height="2.5" rx="1.25" fill="white"/>
        <rect x="4" y="15" width="24" height="2.5" rx="1.25" fill="white"/>
        <rect x="4" y="21" width="24" height="2.5" rx="1.25" fill="white"/>
      </svg>
    </div>
  );
}

function Frame3({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[72px] items-center left-0 px-[24px] top-0 w-[375px]">
      <Brandmark />
      <Frame4 />
      <Menu onClick={onMenuClick} />
    </div>
  );
}

function HeroTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 text-center text-white w-[306px]" data-name="Hero Text Container">
      <div className="font-['Atyp_BL:Text_-_Bold',sans-serif] font-bold leading-none relative shrink-0 text-[36px] whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 6", fontFeatureSettings: "'ss02', 'ss03', 'ss05'" }}>
        <p className="mb-0">LAUNCH YOUR</p>
        <p>OWN PERP DEX</p>
      </div>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>{`Launch a perpetuals DEX on any chain —  with shared liquidity, zero infra cost, and fees that go to you.`}</p>
    </div>
  );
}

function HeroButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Hero Buttons Container">
      <div className="bg-[#6700ce] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="build with orderly">
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
          Start Building
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors" data-name="Trade on Orderly">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
          Talk to Partnerships
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center mb-[-56px] relative shrink-0 w-full" data-name="Frame">
      <HeroTextContainer />
      <HeroButtonsContainer />
    </div>
  );
}

function BackgroundVector() {
  return (
    <div className="-translate-x-1/2 absolute h-[229.903px] left-[calc(50%+5.75px)] top-[63.58px] w-[467.296px]" data-name="Background Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 467.296 229.903">
        <g id="Background Vector">
          <path d={svgPaths.p34e54400} fill="var(--fill-0, #3F0086)" id="Union" />
          <path d={svgPaths.p19b3e0a0} fill="var(--fill-0, #9C75FF)" id="Union_2" />
          <ellipse cx="74.9511" cy="173.172" fill="var(--fill-0, #3F0086)" id="Ellipse 6007" rx="68.11" ry="31.2846" transform="rotate(24.5215 74.9511 173.172)" />
          <ellipse cx="58.4747" cy="108.119" fill="var(--fill-0, #6700CE)" id="Ellipse 6008" rx="7.72497" ry="7.73516" transform="rotate(24.5215 58.4747 108.119)" />
          <path d={svgPaths.p26d2eb00} fill="var(--fill-0, #9C75FF)" id="Vector 7" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[10.93px] top-[63.58px]">
      <BackgroundVector />
      <div className="-translate-x-1/2 absolute h-[219.084px] left-[calc(50%+1.72px)] top-[111.84px] w-[294.328px]" data-name="MacBook垂直背面摄影 1 拷贝 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[200.56%] left-[-24.63%] max-w-none top-[-51.02%] w-[149.29%]" src={imgMacBook11} />
        </div>
      </div>
    </div>
  );
}

function FeatureTag() {
  return (
    <div className="absolute backdrop-blur-[11.195px] bg-gradient-to-t content-stretch flex from-[39.314%] from-[rgba(156,117,255,0.6)] gap-[5.971px] items-center justify-center left-[287.17px] px-[14.927px] py-[11.195px] rounded-[46.273px] to-[rgba(156,117,255,0)] top-[269.05px]" data-name="Feature Tag">
      <div aria-hidden="true" className="absolute border-[1.119px] border-solid border-white inset-0 pointer-events-none rounded-[46.273px] shadow-[6.717px_8.583px_14.927px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[5.38px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3803 5.3803">
          <circle cx="2.69015" cy="2.69015" fill="var(--fill-0, #44DED3)" id="Ellipse 6009" r="2.69015" />
        </svg>
      </div>
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Customizable
      </p>
    </div>
  );
}

function FeatureTag1() {
  return (
    <div className="absolute backdrop-blur-[11.195px] bg-gradient-to-t content-stretch flex from-[rgba(156,117,255,0.6)] gap-[5.971px] items-center justify-center left-[79.64px] px-[14.927px] py-[11.195px] rounded-[46.273px] to-[133%] to-[rgba(156,117,255,0)] top-[246.18px]" data-name="Feature Tag">
      <div aria-hidden="true" className="absolute border-[1.119px] border-solid border-white inset-0 pointer-events-none rounded-[46.273px] shadow-[6.717px_8.583px_14.927px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[5.38px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3803 5.3803">
          <circle cx="2.69015" cy="2.69015" fill="var(--fill-0, #44DED3)" id="Ellipse 6009" r="2.69015" />
        </svg>
      </div>
      <p className="capitalize font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        No-code
      </p>
    </div>
  );
}

function FeatureTag2() {
  return (
    <div className="absolute backdrop-blur-[11.195px] bg-gradient-to-t content-stretch flex from-[39.314%] from-[rgba(156,117,255,0.6)] gap-[5.971px] items-center justify-center left-[296.67px] px-[14.927px] py-[11.195px] rounded-[46.273px] to-[rgba(156,117,255,0)] top-[128.21px]" data-name="Feature Tag">
      <div aria-hidden="true" className="absolute border-[1.119px] border-solid border-white inset-0 pointer-events-none rounded-[46.273px] shadow-[6.717px_8.583px_14.927px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[5.38px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3803 5.3803">
          <g id="Ellipse 6009">
            <circle cx="2.69015" cy="2.69015" fill="var(--fill-0, #FF375B)" r="2.69015" />
            <circle cx="2.69015" cy="2.69015" fill="var(--fill-1, #44DED3)" r="2.69015" />
          </g>
        </svg>
      </div>
      <p className="capitalize font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Deep Liquidity
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[323.535px] relative shrink-0 w-[477.653px]">
      <Group9 />
      <FeatureTag />
      <FeatureTag1 />
      <FeatureTag2 />
    </div>
  );
}

function Tvl() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 text-center text-white w-[151px]" data-name="TVL">
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] min-w-full relative shrink-0 text-[14px] tracking-[-0.1166px] w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        TVL
      </p>
      <div className="capitalize flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] justify-center leading-[0] relative shrink-0 text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        <p className="leading-none">$21.39M</p>
      </div>
    </div>
  );
}

function OpenInterest() {
  return (
    <div className="content-stretch flex flex-col h-[47.104px] items-center justify-center relative shrink-0 w-full" data-name="Open interest">
      <Tvl />
    </div>
  );
}

function TotalBuilders() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 text-center text-white w-[151px]" data-name="Total builders">
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.1166px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Live builders
      </p>
      <div className="capitalize flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] justify-center leading-[0] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        <p className="leading-none">261+</p>
      </div>
    </div>
  );
}

function TotalTradingVolume() {
  return (
    <div className="content-stretch flex flex-col h-[44.591px] items-center justify-center relative shrink-0 w-full" data-name="Total trading volume">
      <TotalBuilders />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[130px]">
      <OpenInterest />
      <TotalTradingVolume />
    </div>
  );
}

function Tvl1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 text-center text-white" data-name="TVL">
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.1166px] w-[143.517px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        24h trading volume
      </p>
      <div className="capitalize flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] justify-center leading-[0] relative shrink-0 text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        <p className="leading-none">$42.50M</p>
      </div>
    </div>
  );
}

function OpenInterest1() {
  return (
    <div className="content-stretch flex flex-col h-[47.104px] items-center justify-center relative shrink-0 w-full" data-name="Open interest">
      <Tvl1 />
    </div>
  );
}

function TotalBuilders1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 text-center text-white w-[151px]" data-name="Total builders">
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] relative shrink-0 text-[14px] tracking-[-0.1166px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Chains
      </p>
      <div className="capitalize flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] justify-center leading-[0] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        <p className="leading-none">17+</p>
      </div>
    </div>
  );
}

function TotalTradingVolume1() {
  return (
    <div className="content-stretch flex flex-col h-[44.591px] items-center justify-center relative shrink-0 w-full" data-name="Total trading volume">
      <TotalBuilders1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[140px]">
      <OpenInterest1 />
      <TotalTradingVolume1 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
      <Frame37 />
      <div className="flex h-[111.694px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[111.694px]">
            <div className="absolute inset-[-0.75px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.694 0.746332">
                <line id="Line 9" stroke="var(--stroke-0, #9C75FF)" strokeWidth="0.746332" x2="111.694" y1="0.373166" y2="0.373166" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame42 />
    </div>
  );
}

function StatsSection() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center py-[20px] relative rounded-[11.195px] shrink-0 w-[335px]" data-name="Stats Section">
      <Frame47 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-56px] relative shrink-0 w-full">
      <Frame30 />
      <StatsSection />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[56px] relative shrink-0 w-[335px]">
      <Frame />
      <Frame31 />
    </div>
  );
}

function FeatureIcon() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center justify-center px-[18px] py-[3.75px] relative rounded-[30px] shrink-0 size-[40px]" data-name="Feature Icon">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] relative shrink-0 text-[24px] text-center text-white w-[20.25px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        1
      </p>
    </div>
  );
}

function FeatureItem() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <FeatureIcon />
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        Connect
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] min-w-full relative shrink-0 text-[14px] text-center text-white tracking-[-0.3125px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        {`Plug into Orderly’s shared orderbook via SDK `}
        <br aria-hidden="true" />
        or white-label (OrderlyOne).
      </p>
    </div>
  );
}

function FeatureIcon1() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center justify-center px-[18px] py-[3.75px] relative rounded-[30px] shrink-0 size-[40px]" data-name="Feature Icon">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] relative shrink-0 text-[24px] text-center text-white w-[24px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        2
      </p>
    </div>
  );
}

function FeatureItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <FeatureIcon1 />
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        Customize
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.3] min-w-full relative shrink-0 text-[14px] text-center text-white tracking-[-0.3125px] w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Brand it, set fees, choose your chain.
        <br aria-hidden="true" />
        Your exchange, your rules.
      </p>
    </div>
  );
}

function FeatureIcon2() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center justify-center px-[18px] py-[3.75px] relative rounded-[30px] shrink-0 size-[40px]" data-name="Feature Icon">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] relative shrink-0 text-[24px] text-center text-white w-[21.75px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        3
      </p>
    </div>
  );
}

function FeatureItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <FeatureIcon2 />
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] min-w-full relative shrink-0 text-[24px] text-center text-white w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        Earn
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[36.4px] leading-[1.3] min-w-full relative shrink-0 text-[14px] text-center text-white tracking-[-0.3125px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>{`Every trade on your frontend =\nrevenue to you. Day one.`}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <FeatureItem />
      <FeatureItem1 />
      <FeatureItem2 />
    </div>
  );
}

function FromZeroTo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[335px]" data-name="from zero to">
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[20px] text-center text-white w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        From zero to live DEX
        <br aria-hidden="true" />
        in one integration
      </p>
      <Frame20 />
    </div>
  );
}

function ArrowLeftCircle({ isEnabled = false }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#474D57";
  return (
    <div className="relative shrink-0 size-[21.998px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9978 21.9978">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.p207f9000} fill={fillColor} />
            <path d={svgPaths.pff2fc00} fill={fillColor} />
          </g>
          <path d={svgPaths.p104d1d80} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49986" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightCircle({ isEnabled = true }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#474D57";
  return (
    <div className="relative size-[21.998px]" data-name="Arrow right-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.998 21.9978">
        <g id="Arrow right-circle">
          <g id="Icon">
            <path d={svgPaths.p207f9000} fill={fillColor} />
            <path d={svgPaths.pff2fc00} fill={fillColor} />
          </g>
          <path d={svgPaths.p3672b240} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49986" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-1 content-stretch flex gap-[10px] items-center justify-end ml-[281px] mt-0 relative row-1">
      <ArrowLeftCircle />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowRightCircle />
        </div>
      </div>
    </div>
  );
}

function WhyTitleContainer2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Why Title Container">
      <p className="col-1 font-['Atyp_BL:Bold',sans-serif] leading-[1.1] ml-0 mt-0 not-italic relative row-1 text-[20px] text-white w-[285px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Why Orderly?
      </p>
    </div>
  );
}

function WhyTitleContainer1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Why Title Container">
      <WhyTitleContainer2 />
    </div>
  );
}

function WhyTitleContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Why Title Container">
      <Frame21 />
      <WhyTitleContainer1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <WhyTitleContainer />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function WhySectionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => { checkScrollPosition(); }, []);

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      {/* Header row: title left, arrows right — clicks handled by MobileHomePage event delegation */}
      <div className="flex items-center justify-between w-full">
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-[1.1] not-italic relative text-[20px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
          Why Orderly?
        </p>
        <div className="flex gap-[10px] items-center">
          <ArrowLeftCircle isEnabled={canScrollLeft} />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <ArrowRightCircle isEnabled={canScrollRight} />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll container: ref + overflow + flex + data-name all on ONE div — mirrors desktop BuildContentList */}
      <div
        ref={scrollRef}
        onScroll={checkScrollPosition}
        className="overflow-x-auto w-full flex gap-[14px] items-center"
        data-name="Why Content List"
        style={{ scrollbarWidth: "none" } as React.CSSProperties}
      >
        <Container />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function WhyIconContainer() {
  return (
    <div className="absolute contents left-[135.85px] top-[144.63px]" data-name="Why Icon Container">
      <div className="absolute h-[110px] left-[135.85px] top-[144.63px] w-[79.322px]" data-name="Why Icon Container 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full mx-[0px] my-[14px]" src={imgWhyIconContainer3} />
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
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] h-[72.8px] leading-[1.3] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[205px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>One orderbook powers every builder. Your users get CEX-grade depth from day one — no bootstrapping needed.</p>
      <WhyIconContainer />
    </div>
  );
}

function WhyIconContainer1() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[110px] top-[calc(50%+55.21px)]" data-name="Why Icon Container">
      <div className="-translate-y-1/2 absolute left-[110px] size-[110px] top-[calc(50%+55.21px)]" data-name="Why Icon Container-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full m-[0px]" src={imgWhyIconContainer12} />
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
        White-label DEX in minutes. SDK: full custom integration in days.
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full m-[0px]" src={imgWhyIconContainer52} />
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

function WhyContentList() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-[335px]" data-name="Why Content List">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function ArrowLeftCircle1({ isEnabled = false }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#474D57";
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[21.998px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9978 21.9978">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.p207f9000} fill={fillColor} />
            <path d={svgPaths.pff2fc00} fill={fillColor} />
          </g>
          <path d={svgPaths.p104d1d80} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49986" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRightCircle1({ isEnabled = true }: { isEnabled?: boolean }) {
  const fillColor = isEnabled ? "#3F0086" : "#1E2026";
  const strokeColor = isEnabled ? "white" : "#474D57";
  return (
    <div className="relative size-[21.998px]" data-name="Arrow right-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.998 21.9978">
        <g id="Arrow right-circle">
          <g id="Icon">
            <path d={svgPaths.p207f9000} fill={fillColor} />
            <path d={svgPaths.pff2fc00} fill={fillColor} />
          </g>
          <path d={svgPaths.p3672b240} id="Icon_2" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49986" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ArrowLeftCircle1 />
      <div className="col-1 flex items-center justify-center ml-[28px] mt-0 relative row-1 size-[21.998px]">
        <div className="flex-none rotate-180">
          <ArrowRightCircle1 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Group10 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Atyp_BL:Bold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[20px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        What you can build
      </p>
      <Frame24 />
    </div>
  );
}

function BuildButtonContainer() {
  return (
    <a href="https://dex.orderly.network/" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[4.203px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity" data-name="Build Button Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
        Orderly One
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[9.607px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.57227 7.57324">
                <path d={svgPaths.p10472e00} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container6() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[130.29px] h-[290px] items-start overflow-clip p-[21.014px] relative rounded-[18.012px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] h-[103.872px] leading-[1.2] relative shrink-0 text-[24px] text-white w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        {`Launch `}
        <br aria-hidden="true" />
        {`a branded `}
        <br aria-hidden="true" />
        Perp DEX
      </p>
      <BuildButtonContainer />
    </div>
  );
}

function BuildButtonContainer1() {
  return (
    <a href="https://orderly.network/docs/build-on-omnichain/evm-api/introduction" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[4.203px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity" data-name="Build Button Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>{`SDK & API`}</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[9.607px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.57227 7.57324">
                <path d={svgPaths.p10472e00} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container7() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[130.29px] h-[290px] items-start overflow-clip p-[21.014px] relative rounded-[18.012px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] h-[103.872px] leading-[1.2] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Add perps to your dApp or wallet
      </p>
      <BuildButtonContainer1 />
    </div>
  );
}

function BuildButtonContainer2() {
  return (
    <a href="https://orderly.network/listing/" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[4.203px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity" data-name="Build Button Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
        Listings
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[9.607px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.57227 7.57324">
                <path d={svgPaths.p10472e00} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container8() {
  return (
    <div className="bg-[#3f0086] content-stretch flex flex-col gap-[130.29px] h-[290px] items-start overflow-clip p-[21.014px] relative rounded-[18.012px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] h-[103.872px] leading-[1.2] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        List your token
      </p>
      <BuildButtonContainer2 />
    </div>
  );
}

function BuildButtonContainer3() {
  return (
    <a href="https://dex.orderly.network/" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[4.203px] items-end justify-end relative shrink-0 w-full no-underline hover:opacity-80 transition-opacity" data-name="Build Button Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'liga' 0" }}>
        Start Building
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[9.607px]" data-name="Build Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.57227 7.57324">
                <path d={svgPaths.p10472e00} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function Container9() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col gap-[130.29px] h-[290px] items-start overflow-clip p-[21.014px] relative rounded-[18.012px] shrink-0 w-[240px]" data-name="Container">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] h-[103.872px] leading-[1.2] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06'" }}>
        Building trading tools
      </p>
      <BuildButtonContainer3 />
    </div>
  );
}

function BuildContentList() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-[335px]" data-name="Build Content List">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame23 />
      <BuildContentList />
    </div>
  );
}

function BuildSectionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => { checkScrollPosition(); }, []);

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      {/* Header row: title left, arrows right — clicks handled by MobileHomePage event delegation */}
      <div className="flex items-center justify-between w-full">
        <p className="flex-[1_0_0] font-['Atyp_BL:Bold',sans-serif] leading-[1.1] min-h-px min-w-px not-italic relative text-[20px] text-white" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
          What you can build
        </p>
        <div className="flex gap-[10px] items-center">
          <ArrowLeftCircle1 isEnabled={canScrollLeft} />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <ArrowRightCircle1 isEnabled={canScrollRight} />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll container: ref + overflow + flex + data-name all on ONE div — mirrors desktop BuildContentList */}
      <div
        ref={scrollRef}
        onScroll={checkScrollPosition}
        className="overflow-x-auto w-full flex gap-[14px] items-center"
        data-name="Build Content List"
        style={{ scrollbarWidth: "none" } as React.CSSProperties}
      >
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function QuickStartTitleContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-white w-[949px]" data-name="Quick Start Title Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[20px] w-[min-content]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Quick Start
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.4] relative shrink-0 text-[14px] tracking-[0.294px] w-[1305.965px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Install the Orderly MCP Server in seconds.
      </p>
    </div>
  );
}

function QuickStartClient() {
  return (
    <div className="bg-[#6700ce] content-stretch flex h-[47.305px] items-center justify-center px-[17px] py-[8px] relative rounded-[8px] shrink-0" data-name="Quick Start Client">
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Interactive</p>
    </div>
  );
}

function QuickStartClients() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-center min-h-px min-w-px overflow-clip relative" data-name="Quick Start Clients">
      <QuickStartClient />
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Claude</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Cursor</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">VScode</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Codex</p>
      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Opencode</p>
    </div>
  );
}

function ArrowLeftCircle2() {
  return (
    <div className="h-[42.667px] relative w-[44.667px]" data-name="Arrow left-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6667 42.6667">
        <g id="Arrow left-circle">
          <g id="Icon">
            <path d={svgPaths.p10be0e00} fill="var(--fill-0, #3F0086)" />
            <path d={svgPaths.p16992700} fill="var(--fill-0, #3F0086)" />
            <path d={svgPaths.p180d8980} stroke="var(--stroke-0, #3F0086)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
          <path d={svgPaths.p344fa9e0} id="Icon_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ArrowLeftCircle2 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#14151a] h-[98.461px] relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[20px] relative size-full">
          <QuickStartClients />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function QuickStartCommand() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['DM_Mono:Regular',sans-serif] gap-[20px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[16px]" data-name="Quick Start Command">
      <p className="relative shrink-0 text-[#5e6673] w-full">Supported clients: claude, cursor, vscode, codex, opencode</p>
      <p className="relative shrink-0 text-white w-full">$ npx @orderly.network/mcp-server init</p>
    </div>
  );
}

function ContentCopy() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.594px]" data-name="content_copy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5945 24">
        <g id="content_copy">
          <mask height="24" id="mask0_78_972" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="23.5945" />
          </mask>
          <g mask="url(#mask0_78_972)">
            <path d={svgPaths.p3775a80} fill="var(--fill-0, white)" id="content_copy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuickStartIconContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[40px] items-start justify-end p-[8px] relative rounded-[8px] shrink-0 w-[39.324px]" data-name="Quick Start Icon Container">
      <ContentCopy />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <QuickStartIconContainer />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <QuickStartCommand />
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#1e2026] relative rounded-bl-[30px] rounded-br-[30px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
        <Frame32 />
      </div>
    </div>
  );
}

function QuickStartContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Quick Start Content">
      <Frame35 />
      <Frame34 />
    </div>
  );
}

function QuickStartHeader1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[333px]" data-name="Quick Start Header">
      <QuickStartContent />
    </div>
  );
}

function QuickStartHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[333px]" data-name="Quick Start Header">
      <QuickStartHeader1 />
    </div>
  );
}

const QS_CLIENTS = [
  {
    id: "interactive",
    label: "Interactive",
    mode: "interactive" as const,
    command: "npx @orderly.network/mcp-server init",
    subtext: "Supported clients: claude, cursor, vscode, codex, opencode",
  },
  { id: "claude",   label: "Claude",   mode: "one-liner" as const, command: "npx @orderly.network/mcp-server init --client claude"   },
  { id: "cursor",   label: "Cursor",   mode: "one-liner" as const, command: "npx @orderly.network/mcp-server init --client cursor"   },
  { id: "vscode",   label: "VScode",   mode: "one-liner" as const, command: "npx @orderly.network/mcp-server init --client vscode"   },
  { id: "codex",    label: "Codex",    mode: "one-liner" as const, command: "npx @orderly.network/mcp-server init --client codex"    },
  { id: "opencode", label: "Opencode", mode: "one-liner" as const, command: "npx @orderly.network/mcp-server init --client opencode" },
];

function QuickStartSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied,    setCopied]    = useState(false);
  const active = QS_CLIENTS[activeIdx];
  const total  = QS_CLIENTS.length;

  function copyCmd(e: React.MouseEvent) {
    e.stopPropagation();
    const text = active.command;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
      document.body.appendChild(el);
      el.focus(); el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function advance(e: React.MouseEvent) {
    e.stopPropagation();
    setActiveIdx((i) => (i + 1) % total);
  }

  function pickTab(e: React.MouseEvent, i: number) {
    e.stopPropagation();
    setActiveIdx(i);
  }

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Quick Start Section">
      <QuickStartTitleContainer />

      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[333px]">

        {/* ── tab bar ── */}
        <div className="bg-[#14151a] h-[98.461px] relative rounded-tl-[30px] rounded-tr-[30px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[20px] relative size-full">

              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px overflow-hidden relative">
                {active.mode === "interactive" ? (
                  QS_CLIENTS.map((c, i) =>
                    i === 0 ? (
                      <div
                        key={c.id}
                        onClick={(e) => pickTab(e, i)}
                        className="bg-[#6700ce] content-stretch flex h-[47.305px] items-center justify-center px-[17px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer"
                      >
                        <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{c.label}</p>
                      </div>
                    ) : (
                      <p
                        key={c.id}
                        onClick={(e) => pickTab(e, i)}
                        className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap cursor-pointer"
                        style={{ opacity: 0.65 }}
                      >
                        {c.label}
                      </p>
                    )
                  )
                ) : (
                  <>
                    <p
                      onClick={(e) => pickTab(e, 0)}
                      className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap cursor-pointer"
                      style={{ opacity: 0.6 }}
                    >
                      One-Liner
                    </p>
                    <div className="bg-[#6700ce] content-stretch flex h-[47.305px] items-center justify-center px-[17px] py-[8px] relative rounded-[8px] shrink-0 w-[120px]">
                      <p className="font-['DM_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{active.label}</p>
                    </div>
                  </>
                )}
              </div>

              {/* arrow → next client */}
              <div onClick={advance} className="content-stretch flex flex-col items-end relative shrink-0 cursor-pointer">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-180">
                    <div className="h-[42.667px] relative w-[44.667px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.6667 42.6667">
                        <g>
                          <path d={svgPaths.p10be0e00} fill="var(--fill-0, #3F0086)" />
                          <path d={svgPaths.p16992700} fill="var(--fill-0, #3F0086)" />
                          <path d={svgPaths.p180d8980} stroke="var(--stroke-0, #3F0086)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                          <path d={svgPaths.p344fa9e0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── command body ── */}
        <div className="bg-[#1e2026] relative rounded-bl-[30px] rounded-br-[30px] shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">

              {active.mode === "interactive" ? (
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['DM_Mono:Regular',sans-serif] gap-[20px] items-start leading-[normal] min-h-px min-w-px not-italic relative text-[16px]">
                  <p className="relative shrink-0 text-[#5e6673] w-full">{active.subtext}</p>
                  <p className="relative shrink-0 text-white w-full">$ {active.command}</p>
                </div>
              ) : (
                <div className="content-stretch flex flex-col h-[146px] items-start relative shrink-0 w-[240px]">
                  <div className="flex flex-col font-['DM_Mono:Regular',sans-serif] h-[146px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
                    <p className="leading-[normal]">$ {active.command}</p>
                  </div>
                </div>
              )}

              {/* copy icon */}
              <div
                onClick={copyCmd}
                data-name="Quick Start Icon Container"
                className="content-stretch flex h-[40px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-[39.324px] cursor-pointer transition-colors"
                style={{ background: copied ? "rgba(103,0,206,0.35)" : "rgba(255,255,255,0.1)" }}
                title={copied ? "Copied!" : "Copy command"}
              >
                {copied ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#9c75ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <div className="h-[24px] relative shrink-0 w-[23.594px]" data-name="content_copy">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5945 24">
                      <mask id="mask_qs_copy" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" height="24" x="0" y="0">
                        <rect fill="#D9D9D9" height="24" width="23.5945" />
                      </mask>
                      <g mask="url(#mask_qs_copy)">
                        <path d={svgPaths.p3775a80} fill="white" />
                      </g>
                    </svg>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function TrustedHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-white w-full" data-name="Trusted Header">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] w-full" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Trusted by builders you know
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.4] relative shrink-0 text-[14px] tracking-[0.294px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        DEXs and protocols powered by the Orderly omnichain infrastructure.
      </p>
    </div>
  );
}

function Image5Vectorized() {
  return (
    <div className="h-[25px] relative shrink-0 w-[26px]" data-name="image 5 [Vectorized]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 25">
        <g id="image 5 [Vectorized]">
          <path d={svgPaths.pae3d500} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p18fcec80} fill="var(--fill-0, #3EEDB9)" id="Vector_2" />
          <path d={svgPaths.p12efb330} fill="var(--fill-0, #26FAB9)" id="Vector_3" />
          <path d={svgPaths.p5db2300} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1f627100} fill="var(--fill-0, #26FAB9)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-[#26fab9] content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <Image5Vectorized />
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        LogX
      </p>
    </div>
  );
}

function DexCard() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-2 justify-self-stretch relative rounded-[5px] row-2 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <a
            href="https://logx.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="contents"
          >
            <LogoContainer />
            <ProductInfo />
          </a>
        </div>
      </div>
    </div>
  );
}

function LogoContainer1() {
  return (
    <div className="bg-[#00a9de] content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <div className="h-[11.25px] relative shrink-0 w-[16.875px]" data-name="logos">
        <div className="absolute inset-[0_25.05%_0_0.77%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5178 11.25">
            <path d={svgPaths.p8ceb900} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[40.38%_9.01%_0_60.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.19447 6.70673">
            <path d={svgPaths.p1313b980} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_0.78%_75.96%_77.55%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.65625 2.70433">
            <path d={svgPaths.pa0b4c80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        WOOFi Pro
      </p>
    </div>
  );
}

function DexCard1() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-1 justify-self-stretch relative rounded-[5px] row-1 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <LogoContainer1 />
          <ProductInfo1 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[33.13%_35.93%_33.21%_36.48%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.27785 10.1001">
        <g id="Group">
          <path d={svgPaths.p1ceebd80} fill="url(#paint0_linear_78_873)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_78_873" x1="-6.51099" x2="13.1405" y1="9.29075" y2="-2.17741">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[33.13%_35.93%_33.21%_36.48%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[57.52%_36.14%_33.62%_53.54%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.09641 2.65901">
        <g id="Group">
          <path d={svgPaths.p363d200} fill="url(#paint0_linear_78_1031)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_78_1031" x1="-8.49161" x2="11.1602" y1="7.35285" y2="-4.11551">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[57.52%_36.14%_33.62%_53.54%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[33.13%_35.93%_33.21%_36.48%]" data-name="Group">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[11.3%_17.12%_12.08%_16.52%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.908 22.9854">
        <g id="Group">
          <path d={svgPaths.p1e47aa00} fill="url(#paint0_linear_78_862)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p1743fd00} fill="url(#paint1_linear_78_862)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_78_862" x1="0.246451" x2="19.8981" y1="17.1581" y2="5.6899">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_78_862" x1="0.268789" x2="19.9199" y1="17.1963" y2="5.72836">
            <stop stopColor="#4ECDC4" />
            <stop offset="0.4946" stopColor="#3772FF" />
            <stop offset="1" stopColor="#C200FB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[11.3%_17.12%_12.08%_16.52%]" data-name="Group">
      <Group1 />
      <Group6 />
    </div>
  );
}

function ProductInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        Raydium
      </p>
    </div>
  );
}

function DexCard2() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-2 justify-self-stretch relative rounded-[5px] row-1 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[30px]" data-name="Trusted Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <circle cx="15" cy="15" fill="var(--fill-0, #131A35)" id="Ellipse 3023" r="15" />
            </svg>
            <Group />
          </div>
          <ProductInfo2 />
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0_-0.11%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5952 29.5314">
        <g id="Group 25979">
          <path d={svgPaths.p1dffff00} fill="var(--fill-0, white)" id="Path 16214" />
          <path d={svgPaths.p759ad80} fill="var(--fill-0, #2188C6)" id="Path 16215" />
          <path d={svgPaths.pb94c080} fill="var(--fill-0, #162B4E)" id="Path 16216" />
          <path d={svgPaths.p22d08500} fill="var(--fill-0, #21326F)" id="Path 16217" />
          <path d={svgPaths.p192abfc0} fill="var(--fill-0, #162B4E)" id="Path 16218" />
          <path d={svgPaths.pf0bb560} fill="var(--fill-0, #3F0086)" id="Path 16219" />
          <path d={svgPaths.p3c96f00} fill="var(--fill-0, #3A9DD7)" id="Path 16220" />
          <path d={svgPaths.p184025f0} fill="var(--fill-0, #162B4E)" id="Path 16221" />
          <path d={svgPaths.p191a7600} fill="var(--fill-0, #162B4E)" id="Path 16222" />
          <path d={svgPaths.p27dafe80} fill="var(--fill-0, #2797D2)" id="Path 16223" />
          <path d={svgPaths.p307c8f80} fill="var(--fill-0, #162B4E)" id="Path 16224" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <div className="relative shrink-0 size-[29.531px]" data-name="logos">
        <Group8 />
      </div>
    </div>
  );
}

function ProductInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        Quickswap
      </p>
    </div>
  );
}

function DexCard3() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-1 justify-self-stretch relative rounded-[5px] row-2 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <LogoContainer2 />
          <ProductInfo3 />
        </div>
      </div>
    </div>
  );
}

function Logos() {
  return (
    <div className="relative shrink-0 size-[16.875px]" data-name="logos">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.875 16.875">
        <path d={svgPaths.p18108800} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function LogoContainer3() {
  return (
    <div className="bg-[#1e2026] content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <Logos />
    </div>
  );
}

function ProductInfo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        What.Exchange
      </p>
    </div>
  );
}

function DexCard4() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-1 justify-self-stretch relative rounded-[5px] row-3 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <LogoContainer3 />
          <ProductInfo4 />
        </div>
      </div>
    </div>
  );
}

function LogoContainer4() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <div className="relative shrink-0 size-[29.531px]" data-name="logos">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.5312 29.5312">
          <path clipRule="evenodd" d={svgPaths.p210f6100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ProductInfo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        VOOI
      </p>
    </div>
  );
}

function DexCard5() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-2 justify-self-stretch relative rounded-[5px] row-3 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <LogoContainer4 />
          <ProductInfo5 />
        </div>
      </div>
    </div>
  );
}

function TrustedLogo() {
  return (
    <div className="h-[16.873px] relative shrink-0 w-[16.387px]" data-name="Trusted Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3866 16.8742">
        <g id="Trusted Logo">
          <path d={svgPaths.p3cd2af00} fill="var(--fill-0, #0A0B0D)" id="Rectangle 376715171" />
          <path d={svgPaths.p37695180} fill="var(--fill-0, #D6F22B)" id="Vector 8" />
          <path d={svgPaths.p26f5cb00} fill="var(--fill-0, #D6F22B)" id="Vector 9" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <TrustedLogo />
    </div>
  );
}

function ProductInfo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        Kyrrio
      </p>
    </div>
  );
}

function DexCard6() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-1 justify-self-stretch relative rounded-[5px] row-4 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <LogoContainer5 />
          <ProductInfo6 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[36.563px] relative shrink-0 w-[37.031px]" data-name="_隔离模式">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.0312 36.5625">
        <g id="_éç¦»æ¨¡å¼">
          <path d={svgPaths.p1934be00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer6() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center relative rounded-[28.125px] shrink-0 size-[30px]" data-name="Logo Container">
      <Component />
    </div>
  );
}

function ProductInfo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Product Info">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-none relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss02', 'ss03', 'ss05', 'ss06', 'lnum', 'pnum'" }}>
        PerpsDAO
      </p>
    </div>
  );
}

function DexCard7() {
  return (
    <div className="bg-[rgba(20,21,26,0.7)] col-2 justify-self-stretch relative rounded-[5px] row-4 self-start shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-name="DEX Card">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <LogoContainer6 />
          <ProductInfo7 />
        </div>
      </div>
    </div>
  );
}

function Dex() {
  return (
    <div className="gap-x-[14px] gap-y-[14px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,fit-content(100%))] relative shrink-0 w-full" data-name="DEX">
      <DexCard />
      <DexCard1 />
      <DexCard2 />
      <DexCard3 />
      <DexCard4 />
      <DexCard5 />
      <DexCard6 />
      <DexCard7 />
    </div>
  );
}

function TrustedButtonContainer() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-[100px] cursor-pointer hover:opacity-80 transition-opacity" data-name="Trusted Button Container">
      <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'liga' 0" }}>
        View all
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Trusted Button Icon">
            <div className="absolute inset-[10.42%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6133 12.6133">
                <path d={svgPaths.p35ba4800} fill="var(--fill-0, white)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustedContent() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-[334px]" data-name="Trusted Content">
      <Dex />
      <TrustedButtonContainer />
    </div>
  );
}

function TrustedSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[334px]" data-name="Trusted Section">
      <TrustedHeader />
      <TrustedContent />
    </div>
  );
}

function HeroTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-center text-white w-full" data-name="Hero Text Container">
      <p className="font-['Atyp_BL:Display_-_Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[24px] uppercase w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        The best time to launch was yesterday.
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.4] relative shrink-0 text-[14px] tracking-[0.294px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        The second best time is now.
        <br aria-hidden="true" />
        Start earning from day one.
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[17px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#6700ce] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="build with orderly">
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
          Start Building
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:bg-white/10 transition-colors" data-name="Trade on Orderly">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[24px]" />
        <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06', 'liga' 0" }}>
          Talk to Partnerships
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center py-[20px] relative shrink-0 w-[335px]" data-name="Frame">
      <HeroTextContainer1 />
      <Frame14 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white w-full whitespace-nowrap">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.3] relative shrink-0 text-[18px] tracking-[0.18px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        AI Access
      </p>
      <p className="font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.4] relative shrink-0 text-[16px] tracking-[0.176px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Retrieve structured capabilities at:
      </p>
    </div>
  );
}

const AI_SKILL_URL = "https://orderly.network/skill.md";

function Frame44() {
  return (
    <div className="bg-[#14151a] relative rounded-[10px] shrink-0 w-full" data-name="ai-url">
      <div className="flex flex-row items-center size-full overflow-hidden">
        <div className="content-stretch flex items-center pl-[18px] py-[16px] relative w-full overflow-hidden">
          <a href="https://orderly.network/skill.md" target="_blank" rel="noopener noreferrer" className="font-['DM_Mono:Medium',sans-serif] leading-[1.4] not-italic opacity-70 relative shrink-0 text-[16px] text-white tracking-[0.336px] whitespace-nowrap overflow-hidden text-ellipsis hover:opacity-100 transition-opacity">
            orderly.network/skill.md
          </a>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textarea = document.createElement("textarea");
    textarea.value = AI_SKILL_URL;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
    document.body.removeChild(textarea);
  };

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Frame44 />
      <button
        onClick={handleCopy}
        className="bg-black relative rounded-[24px] shrink-0 w-full border-0 cursor-pointer hover:opacity-80 transition-opacity"
        data-name="ai-copy"
        style={{ padding: 0 }}
      >
        <div className="flex flex-row items-center justify-center w-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
            {copied ? (
              <CheckIcon style={{ fontSize: 20, color: "white" }} />
            ) : (
              <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap" style={{ fontFeatureSettings: "'liga' 0" }}>
                Copy
              </p>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame12 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#1e2026] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[30px] relative w-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[1.2] relative shrink-0 text-[18px] text-white tracking-[0.18px] w-full" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        Be the first to hear about launches, token listings, and builder updates.
      </p>
    </div>
  );
}

function Frame13() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.stopPropagation();
    if (email && email.includes("@")) {
      console.log("Newsletter signup:", email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      {/* Email input */}
      <div className="bg-[#7800f0] relative rounded-[10px] shrink-0 w-full" data-name="newsletter-email">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[18px] py-[16px] relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(e as unknown as React.KeyboardEvent); }}
              placeholder="satoshi@orderly.network"
              className="w-full bg-transparent border-0 outline-none font-['Atyp_BL:Display_-_Medium',sans-serif] font-[507] leading-[1.4] text-[16px] text-white tracking-[0.336px] placeholder:opacity-70"
              style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}
            />
          </div>
        </div>
      </div>
      {/* Sign Up button */}
      <button
        onClick={(e) => handleSubmit(e)}
        className="bg-black relative rounded-[24px] shrink-0 w-full border-0 cursor-pointer hover:opacity-80 transition-opacity"
        data-name="newsletter-signup"
        style={{ padding: 0 }}
      >
        <div className="flex flex-row items-center justify-center w-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
            {isSubmitted ? (
              <CheckIcon style={{ fontSize: 20, color: "white" }} />
            ) : (
              <p className="font-['Atyp_BL:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap" style={{ fontFeatureSettings: "'liga' 0" }}>
                Sign Up
              </p>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame13 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#6700ce] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[30px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Brandmark1() {
  return (
    <div className="col-1 h-[47.94px] ml-0 mt-0 relative row-1 w-[47.998px]" data-name="Brandmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9978 47.9396">
        <g id="Brandmark">
          <path clipRule="evenodd" d={svgPaths.pdfa100} fill="var(--fill-0, white)" fillRule="evenodd" id="Intersect" />
          <path clipRule="evenodd" d={svgPaths.p6be8000} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <path clipRule="evenodd" d={svgPaths.p3fa2a600} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract_2" />
          <path clipRule="evenodd" d={svgPaths.p1ebf2d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Logo">
      <Brandmark1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[6px] items-center ml-0 mt-0 p-[12px] relative rounded-[63px] row-1 cursor-pointer hover:opacity-80 transition-opacity" data-name="buy-order">
      <div className="flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        <p className="leading-[0.753]">Buy ORDER</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[14.667px]" data-name="Icon">
            <div className="absolute inset-[-8.52%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1667 17.1667">
                <path d={svgPaths.p30a87c0} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterStatus1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[98px] mt-0 place-items-start relative row-1" data-name="Footer Status">
      <Component1 />
    </div>
  );
}

function LiveOrderPrice() {
  const [price, setPrice] = useState<string>("$0.051");

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=orderly-network&vs_currencies=usd"
        );
        const data = await res.json();
        const usd = data?.["orderly-network"]?.usd;
        if (usd !== undefined) {
          setPrice("$" + usd.toFixed(3));
        }
      } catch {
        setPrice("$—");
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="leading-[0.753] text-[20px]" data-name="order-price">{price}</p>
  );
}

function FooterStatus() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Footer Status">
      <div className="col-1 flex flex-col font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] h-[38px] justify-center ml-0 mt-0 relative row-1 text-[16px] text-white tracking-[0.16px] w-[82px]" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
        <LiveOrderPrice />
      </div>
      <FooterStatus1 />
    </div>
  );
}

function StatusMessageContainer() {
  return (
    <div className="bg-[rgba(156,117,255,0.1)] content-stretch flex gap-[9px] items-center leading-[0] p-[12px] relative rounded-[63px] shrink-0" data-name="Status Message Container">
      <Logo />
      <FooterStatus />
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_78_895" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_78_895)">
            <path d={svgPaths.p2770b500} fill="var(--fill-0, white)" fillOpacity="0.8" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Orderly One",   href: "https://dex.orderly.network/" },
    { label: "Orderly SDKs",  href: "https://orderly.network/docs/sdks/overview" },
    { label: "Documentation", href: "https://orderly.network/docs/introduction/getting-started/what-is-orderly" },
    { label: "GitHub",        href: "https://github.com/OrderlyNetwork" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header row — stopPropagation keeps MobileHomePage's FooterSheet from firing */}
      <div
        className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
        data-name="footer-nav-Builders"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      >
        <p className="capitalize flex-[1_0_0] font-['Atyp_BL:Bold',sans-serif] leading-[0.753] min-h-px min-w-px not-italic relative text-[14px] text-white tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
          Builders
        </p>
        <div
          className="relative shrink-0 size-[24px]"
          data-name="expand_more"
          style={{ transition: "transform 0.22s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="expand_more_frame7">
              <mask height="24" id="mask0_frame7" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="#D9D9D9" height="24" width="24" />
              </mask>
              <g mask="url(#mask0_frame7)">
                <path d={svgPaths.p2770b500} fill="white" fillOpacity="0.8" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Inline sub-links */}
      {open && (
        <div className="flex flex-col gap-[4px] pt-[12px] pb-[6px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="no-underline capitalize px-[2px] py-[10px]"
              style={{
                color: "#9c75ff",
                fontFamily: "'Atyp BL Medium', sans-serif",
                fontSize: "14px",
                fontFeatureSettings: "'ss03','ss02','ss05','ss06'",
                letterSpacing: "0.14px",
                lineHeight: "0.753",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function ExpandMore1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_78_895" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_78_895)">
            <path d={svgPaths.p2770b500} fill="var(--fill-0, white)" fillOpacity="0.8" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Partners",     href: "https://orderly.network/partners/" },
    { label: "Listings",     href: "https://orderly.network/listing/" },
    { label: "Case Studies", href: "https://dex.orderly.network/case-studies" },
    { label: "Governance",   href: "https://snapshot.box/#/s:orderlygov.eth" },
    { label: "Staking",      href: "https://app.orderly.network/staking" },
    { label: "Blog",         href: "https://orderly.network/blog/" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div
        className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
        data-name="footer-nav-Ecosystem"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      >
        <p className="capitalize flex-[1_0_0] font-['Atyp_BL:Bold',sans-serif] leading-[0.753] min-h-px min-w-px not-italic relative text-[14px] text-white tracking-[0.14px]">Ecosystem</p>
        <div
          className="relative shrink-0 size-[24px]"
          data-name="expand_more"
          style={{ transition: "transform 0.22s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="expand_more_frame9">
              <mask height="24" id="mask0_frame9" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="#D9D9D9" height="24" width="24" />
              </mask>
              <g mask="url(#mask0_frame9)">
                <path d={svgPaths.p2770b500} fill="white" fillOpacity="0.8" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-[4px] pt-[12px] pb-[6px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="no-underline capitalize px-[2px] py-[10px]"
              style={{
                color: "#9c75ff",
                fontFamily: "'Atyp BL Medium', sans-serif",
                fontSize: "14px",
                fontFeatureSettings: "'ss03','ss02','ss05','ss06'",
                letterSpacing: "0.14px",
                lineHeight: "0.753",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function ExpandMore2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_78_895" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_78_895)">
            <path d={svgPaths.p2770b500} fill="var(--fill-0, white)" fillOpacity="0.8" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Live DEXs",  href: "https://dex.orderly.network/board/" },
    { label: "Dashboard",  href: "https://orderly-dashboard.orderly.network/" },
    { label: "API",        href: "https://orderly.network/docs/build-on-omnichain/evm-api/introduction" },
    { label: "Explorer",   href: "https://explorer.orderly.network/" },
    { label: "Campaigns",  href: "https://app.orderly.network/campaigns" },
    { label: "Vaults",     href: "http://app.orderly.network/vaults" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div
        className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
        data-name="footer-nav-Traders"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      >
        <p className="capitalize flex-[1_0_0] font-['Atyp_BL:Bold',sans-serif] leading-[0.753] min-h-px min-w-px not-italic relative text-[14px] text-white tracking-[0.14px]" style={{ fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
          Traders
        </p>
        <div
          className="relative shrink-0 size-[24px]"
          data-name="expand_more"
          style={{ transition: "transform 0.22s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="expand_more_frame10">
              <mask height="24" id="mask0_frame10" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="#D9D9D9" height="24" width="24" />
              </mask>
              <g mask="url(#mask0_frame10)">
                <path d={svgPaths.p2770b500} fill="white" fillOpacity="0.8" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-[4px] pt-[12px] pb-[6px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="no-underline capitalize px-[2px] py-[10px]"
              style={{
                color: "#9c75ff",
                fontFamily: "'Atyp BL Medium', sans-serif",
                fontSize: "14px",
                fontFeatureSettings: "'ss03','ss02','ss05','ss06'",
                letterSpacing: "0.14px",
                lineHeight: "0.753",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function ExpandMore3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <mask height="24" id="mask0_78_895" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_78_895)">
            <path d={svgPaths.p2770b500} fill="var(--fill-0, white)" fillOpacity="0.8" id="expand_more_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Team",      href: "https://orderly.network/team/" },
    { label: "Analytics", href: "https://dune.com/orderly_network/orderly-dashboard" },
    { label: "Careers",   href: "https://job-boards.greenhouse.io/orderly" },
    { label: "Brand Kit", href: "https://live.standards.site/orderly-brandguidelines" },
    { label: "FAQ",       href: "/faq" },
  ];

  return (
    <div className="flex flex-col w-full">
      <div
        className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
        data-name="footer-nav-About"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
      >
        <p className="capitalize flex-[1_0_0] font-['Atyp_BL:Bold',sans-serif] leading-[0.753] min-h-px min-w-px not-italic relative text-[14px] text-white tracking-[0.14px]">About</p>
        <div
          className="relative shrink-0 size-[24px]"
          data-name="expand_more"
          style={{ transition: "transform 0.22s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="expand_more_frame11">
              <mask height="24" id="mask0_frame11" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="#D9D9D9" height="24" width="24" />
              </mask>
              <g mask="url(#mask0_frame11)">
                <path d={svgPaths.p2770b500} fill="white" fillOpacity="0.8" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-[4px] pt-[12px] pb-[6px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="no-underline capitalize px-[2px] py-[10px]"
              style={{
                color: "#9c75ff",
                fontFamily: "'Atyp BL Medium', sans-serif",
                fontSize: "14px",
                fontFeatureSettings: "'ss03','ss02','ss05','ss06'",
                letterSpacing: "0.14px",
                lineHeight: "0.753",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <StatusMessageContainer />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.08" x2="295" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.08" x2="295" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame9 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.08" x2="295" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame10 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.08" x2="295" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeOpacity="0.08" x2="295" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Frame8 />
      </div>
    </div>
  );
}

function StatusMessageContainer1() {
  return (
    <div className="bg-[rgba(156,117,255,0.1)] content-stretch flex gap-[6px] items-center p-[12px] relative rounded-[63px] shrink-0" data-name="Status Message Container">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #24AD8F)" id="Ellipse 308" r="3" />
        </svg>
      </div>
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] leading-[0.753] relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        All systems operational.
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[17.15%_0.72%_17.16%_0.72%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7554 11.1677">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.pabdd780} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <g id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IcSocialYoutubeS() {
  return (
    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[17px]" data-name="ic/social-youtube-s24">
      <Group7 />
    </div>
  );
}

function SocialMediaIconsContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Social Media Icons Container">
      <a href="https://discord.com/invite/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="Discord">
        <div className="absolute inset-[11%_0_12.78%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12.1955">
            <path d={svgPaths.p15bda300} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a href="https://t.me/Orderly_Discussions" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="Telegram">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p2a7b4dc0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://x.com/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="X">
        <div className="absolute inset-[7.93%_4.17%_9.21%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.2573">
            <path d={svgPaths.p2746f000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a href="https://www.youtube.com/@Orderly.Network" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[17px] block hover:opacity-80 transition-opacity" data-name="YouTube">
        <IcSocialYoutubeS />
      </a>
      <a href="https://www.linkedin.com/company/orderly-network" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="LinkedIn">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p114d3270} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://github.com/OrderlyNetwork" target="_blank" rel="noopener noreferrer" className="overflow-clip relative shrink-0 size-[16px] block hover:opacity-80 transition-opacity" data-name="GitHub">
        <div className="absolute inset-[4.06%_10.42%_8.33%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-5.71%_-6.15%_-5.71%_-6.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6002 15.6179">
              <path d={svgPaths.p11607ae8} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end p-[8px] relative w-full">
          <SocialMediaIconsContainer />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-h-px min-w-px relative">
      <StatusMessageContainer1 />
      <Frame15 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[30px] pt-[20px] px-[20px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#6700ce] content-stretch flex flex-col items-center relative rounded-[30px] shrink-0 w-full">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-['Atyp_BL:Display_-_Regular',sans-serif] font-normal gap-[20px] items-center justify-end relative shrink-0">
      <a href="https://orderly.network/docs/introduction/terms-of-service" target="_blank" rel="noopener noreferrer" className="relative shrink-0 text-white no-underline hover:opacity-80 transition-opacity">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
          Terms
        </p>
      </a>
      <a href="https://orderly.network/docs/introduction/privacy-policy" target="_blank" rel="noopener noreferrer" className="relative shrink-0 text-white no-underline hover:opacity-80 transition-opacity">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72" }}>
          Privacy
        </p>
      </a>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-between leading-[1.2] relative shrink-0 text-[14px] text-white tracking-[0.14px] w-full whitespace-nowrap">
      <p className="font-['Atyp_BL:Display_-_SemiBold',sans-serif] font-[612] relative shrink-0" style={{ fontVariationSettings: "'ital' 0, 'opsz' 72", fontFeatureSettings: "'ss03', 'ss02', 'ss05', 'ss06'" }}>
        © 2026 Orderly Network
      </p>
      <Frame29 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame28 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[335px] pb-[32px]">
      <Frame19 />
      <Frame26 />
      <Frame50 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[46px] items-start left-[20px] top-[82px] w-[335px]">
      <Frame46 />
      <FromZeroTo />
      <WhySectionCarousel />
      <BuildSectionCarousel />
      <QuickStartSection />
      <TrustedSection />
      <Frame1 />
      <Frame43 />
    </div>
  );
}

const Frame40 = memo(function Frame40({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <div className="bg-black relative size-full">
      <Frame3 onMenuClick={onMenuClick} />
      <Frame41 />
    </div>
  );
});

export default Frame40;

// ─── Named exports for reuse in other pages (e.g. FAQ mobile footer) ──────────
export { Frame19 as MobileAIAccessCard, Frame26 as MobileNewsletterCard, Frame50 as MobileFooterCard };