import Image from "next/image";
import BookAMeeting from "./ActionButton";
import Link from "next/link";
import Container from "./Container";
const heroBg = {
  backgroundImage:
    "url('./herobg.png')",
  minHeight: 720,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  return (
    <section style={heroBg}>
      <Container>
        <div className="flex flex-wrap pt-16 lg:pt-40 justify-between lg:pb-40 text-white" >

          <div className="w-full lg:w-5/12 flex flex-col">
            <h1 className="capitalize mb-3 text-4xl font-bold leading-snug text-dark sm:text-[40px] lg:text-[42px] xl:text-[48px]">
              Your Website’s Essence Captured in One Headline
            </h1>
            <p className="mb-8 max-w-5/12 text-base text-body-color">
              The hero section description is a succinct follow-up to a compelling headline. Keep it brief, straightforward, and pointedly descriptive.
            </p>

            <div className="flex flex-col items-center py-3 space-y-3 sm:space-x-4 lg:space-y-0 md:flex-row justify-center lg:justify-start">
              <BookAMeeting title="Read More >" />
            </div>

            <div className="flex flex-wrap space-x-4 justify-center md:justify-around mt-auto py-8 lg:py-0">
            </div>

          </div>
          <div className="hidden lg:block relative">
            <span className="absolute -left-8 -bottom-8 z-[-1]">
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
}


export default Hero;