import sayaImg3 from '../assets/images/saya3.png';
import ShinyText from "../ShinyText";
import RotatingText from "../RotatingText";
import LiquidEther from "../LiquidEther";

const Hero = () => {
  return (
    <main className="hero-wrapper">
      <div className="hero-ether-bg">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={28}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={12}
          iterationsPoisson={12}
          resolution={0.35}
          BFECC={false}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={3.4}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="hero">
        <section className="hero-left">
          <p className="eyebrow">Halo,</p>
          <p className="subtext">
            Saya fokus membangun produk digital yang rapi, cepat, dan siap
            berkembang. Frontend, backend, dan data - semua terintegrasi.
          </p>
          <div className="role-list">
            <span className="role-label">Creative</span>
            <RotatingText
              texts={["Full Stack Developer", "Data Scientist", "Data Analyst", "UI/UX Designer"]}
              mainClassName="rotating-role rotating-pill"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="rotating-split"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </section>

        <section className="hero-center" aria-hidden="true">
          <div className="portrait-wrap">
            <img src={sayaImg3} alt="Dimas Edwin Saputra" className="portrait-image" />
          </div>
        </section>

        <section className="hero-right">
          {/* <p className="tag">Insinyur TI</p> */}
          <h2>
            Saya
            <span>
              <ShinyText
                text="Dimas Edwin Saputra"
                speed={2}
                delay={0}
                color="var(--text)"
                shineColor="#898989"
                direction="left"
              />
            </span>
          </h2>
        </section>
      </div>
    </main>
  );
};

export default Hero;
