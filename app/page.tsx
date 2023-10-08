import Link from 'next/link';
import './page.css'
export default function HomePage() {
  return (
    <div className="hero-section">
    <div className="flex-hero" data-aos="fade-up">
      <h1>
        Your Health<br/>
        <span className="text-gradient">
          Our Responsibility
        </span>
      </h1>
      <div className="blob-cont">
        <div className="blob blue"></div>
      </div>
      <div className="blob-cont">
        <div className="blob blue1"></div>
      </div>
      <h4>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
      </h4>
      <a href="#services">
        <button className="button">Get Started</button>
      </a>
    </div>
  </div>
  );
}


