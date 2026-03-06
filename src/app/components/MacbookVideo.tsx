interface MacbookVideoProps {
  className?: string;
  canvasWidth?: number;
  canvasHeight?: number;
}

export default function MacbookVideo({
  className,
  canvasWidth = 1125,
}: MacbookVideoProps) {
  const isMobile = canvasWidth < 500;

  return (
    <div className={className}>
      <video
        autoPlay
        muted
        playsInline
        loop={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      >
        {isMobile ? (
          <>
            <source src="/images/macbook-mobile.mov" type="video/quicktime" />
            <source src="/images/macbook-mobile.webm" type="video/webm" />
          </>
        ) : (
          <>
            <source src="/images/macbook.mov" type="video/quicktime" />
            <source src="/images/macbook.webm" type="video/webm" />
          </>
        )}
      </video>
    </div>
  );
}
