export default function Header() {
  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Left Section: Logo Icon + Menu */}
        <div className="nav-left">
          {/* Logo icon */}
          <div className="nav-logo-icon">
            <img
              src="/Logo-Main-Icon.png"
              alt="Other Stuff logo"
              className="nav-logo-image"
              width="64"
              height="64"
              loading="eager"
            />
          </div>

          {/* Desktop Menu placeholder (links removed) */}
          <div className="nav-menu" />
        </div>

        {/* Center Section: Logo Text */}
        <div className="nav-center">
          <div className="nav-logo-pair">
            <span className="nav-logo">Other Stuff</span>
            <span className="nav-logo-separator">×</span>
            <img
              src="/adapt-logo.png"
              alt="Adapt by Design"
              className="nav-adapt-logo"
              width="64"
              height="32"
            />
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="nav-right">
          <a href="#contact" className="nav-contact-link">
            <button className="nav-join-btn">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}
