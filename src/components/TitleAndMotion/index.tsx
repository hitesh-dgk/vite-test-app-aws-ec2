import topMotion from '../../assets/top-motion.mp4';

export function TitleAndMotion() {
  return (
    <>
      <div className="mx-auto -mt-10 mb-6 h-[197px] max-w-[350px] sm:hidden">
        <video autoPlay loop muted playsInline controlsList="nodownload">
          <source src={topMotion} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      <div className="px-8 sm:flex sm:items-center sm:gap-x-4 sm:px-0">
        <div className="relative z-above-blurry-colours text-center sm:text-left">
          <h1 className="font-anybody text-3xl font-extrabold lg:text-5xl">
            <span className="hidden sm:inline">
              Privacy Pass
              <br />
            </span>
            Earn as you inbox
          </h1>
          <div className="mt-4">
            Earn RLC tokens by receiving marketing emails.
            <br />
            Protect the privacy of your email.
          </div>
        </div>
        <div className="-mr-12 hidden min-w-[220px] flex-1 sm:block">
          <video autoPlay loop muted playsInline controlsList="nodownload">
            <source src={topMotion} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
        <div className="hidden sm:block">
          <div className="absolute -left-[120px] top-[150px] z-0 h-[300px] w-[300px] rounded-full bg-[hsla(44,96%,67%,0.5)] blur-[70px] sm:-left-[8%]">
            &nbsp;
          </div>
          <div className="absolute -left-[20px] top-[110px] z-0 h-[150px] w-[150px] rounded-full bg-[hsla(343,73%,54%,0.4)] blur-[50px] sm:left-[3%]">
            &nbsp;
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="absolute -left-[100px] top-[130px] z-0 h-[400px] w-[400px] rounded-full bg-[hsla(44,96%,67%,0.5)] blur-[120px]">
            &nbsp;
          </div>
          <div className="absolute left-[50px] top-[110px] z-0 h-[200px] w-[200px] rounded-full bg-[hsla(343,73%,54%,0.4)] blur-[80px]">
            &nbsp;
          </div>
        </div>
      </div>
    </>
  );
}