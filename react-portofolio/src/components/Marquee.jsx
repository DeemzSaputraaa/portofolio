import ScrollVelocity from "./ScrollVelocity";
import "../styles/Marquee.css";

const Marquee = () => {
  const content = (
    <>
      App Design<span className="marquee-sep">✶</span>
      Website Design<span className="marquee-sep">✶</span>
      Dashboard<span className="marquee-sep">✶</span>
      Wireframe<span className="marquee-sep">✶</span>
      User Research<span className="marquee-sep">✶</span>
    </>
  );

  return (
    <section className="marquee" aria-label="Layanan utama">
      <ScrollVelocity
        texts={[content]}
        velocity={-120}
        className="marquee-item"
        parallaxClassName="marquee-parallax"
        scrollerClassName="marquee-scroller"
        numCopies={20}
        scrollerStyle={{ willChange: "transform" }}
      />
    </section>
  );
};

export default Marquee;
