import villageImage from 'figma:asset/f48f654f22f3ca6cde81203fe821c516567c2cf7.png';
import communityLogo from 'figma:asset/cc25a2a5586a44515811c0390b4a2d1efb55f999.png';
import shivajiMaharaj from 'figma:asset/1c55975af49fc1c522dd869ceb11aba7cfb5d0c3.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered cinematic background */}
      {/* Base gradient - saffron to deep orange */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,154,0,0.9)_0%,rgba(255,87,34,0.7)_50%,rgba(191,54,12,0.9)_100%)]"></div>

      {/* Sacred mandala pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Marigold floral texture near edges */}
      <div className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(255, 193, 7, 0.5) 0%, transparent 25%),
            radial-gradient(circle at 90% 80%, rgba(255, 152, 0, 0.5) 0%, transparent 25%),
            radial-gradient(circle at 5% 90%, rgba(251, 140, 0, 0.4) 0%, transparent 20%)
          `
        }}
      ></div>

      {/* Bahireshwar temple lake blended at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 opacity-12">
        <img
          src={villageImage}
          alt="Bahireshwar Temple Lake"
          className="w-full h-full object-cover"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)'
          }}
        />
      </div>

      {/* Festival fog/smoke effect */}
      <div className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 20% 60%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 35%)
          `
        }}
      ></div>

      {/* Floating golden particles - refined and subtle */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1.5}px`,
              height: `${Math.random() * 4 + 1.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.9) 0%, rgba(255, 193, 7, 0.6) 100%)',
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 193, 7, 0.3)'
            }}
          />
        ))}
      </div>

      {/* Two Column Layout Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* 1. Premium Circular Mandal Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Circular golden aura ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full opacity-70 blur-2xl group-hover:opacity-90 transition duration-700 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-500 via-orange-500 to-yellow-600 rounded-full opacity-50 blur-xl"></div>

                {/* Premium circular frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-orange-500/20 via-yellow-500/10 to-orange-600/20 backdrop-blur-sm border-2 border-yellow-400/40 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  {/* Logo with floating shadow */}
                  <img
                    src={communityLogo}
                    alt="SP Boys Bahireshwar Logo"
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                    style={{
                      filter: 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 2. Main Heading - SP BOYS BAHIRESHWAR */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8 tracking-tight"
              style={{
                textShadow: '0 6px 24px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.15)'
              }}
            >
              SP BOYS BAHIRESHWAR
            </h1>

            {/* 3. Royal Marathi Subtitle - VERSION 1 PREMIUM GOLDEN YELLOW */}
            <div className="mb-7">
              <h2
                className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-3 px-4 lg:px-0"
                style={{
                  fontFamily: 'Georgia, "Noto Serif Devanagari", serif',
                  color: '#FFD700',
                  textShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 15px rgba(255, 193, 7, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '0.04em',
                  fontWeight: '900'
                }}
              >
                बहिरेश्वरचा सम्राट
              </h2>
              {/* Decorative underline flourish */}
              <div className="flex justify-center lg:justify-start items-center gap-2 mt-4">
                <div className="h-0.5 w-10 bg-gradient-to-r from-transparent via-amber-500 to-yellow-500 rounded shadow-sm"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-md shadow-yellow-500/60"></div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded shadow-sm"></div>
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/70 border border-yellow-300/30"></div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 rounded shadow-sm"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-md shadow-yellow-500/60"></div>
                <div className="h-0.5 w-10 bg-gradient-to-r from-yellow-500 via-amber-500 to-transparent rounded shadow-sm"></div>
              </div>
            </div>

            {/* 4. Emotional Marathi Tagline - CLEAN CONTRAST */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-white mb-10 font-medium px-4 lg:px-0"
              style={{
                textShadow: '0 3px 12px rgba(0, 0, 0, 0.9), 0 1px 4px rgba(0, 0, 0, 0.95)',
                letterSpacing: '0.06em',
                lineHeight: '1.6'
              }}
            >
              आपली संस्कृती, आपला अभिमान, आपला बहिरेश्वर
            </p>

            {/* 5. Premium Glassmorphism CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                className="group relative px-10 py-4 rounded-full font-bold text-lg min-w-[220px] overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                }}
              >
                <span className="relative z-10 text-white">Join Our Mission</span>
              </button>
              <button
                className="group relative px-10 py-4 rounded-full font-bold text-lg min-w-[220px] overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 215, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 215, 0, 0.5)',
                  boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 215, 0, 0.35)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 215, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                }}
              >
                <span className="relative z-10 text-white">आमचे उपक्रम</span>
              </button>
            </div>

            {/* 6. Trust Strip */}
            <div
              className="inline-block px-8 py-3 rounded-full mb-8 lg:mb-0"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              <p className="text-white text-sm sm:text-base font-medium">
                २०१७ स्थापना • १०००+ लोक • शिवजयंती १९ फेब्रुवारी
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Shivaji Maharaj Premium Foreground Image */}
          <div className="flex-shrink-0 w-full lg:w-[38%] max-w-md lg:max-w-none">
            <div className="relative group">
              {/* Golden glow aura behind image */}
              <div className="absolute -inset-6 bg-gradient-to-br from-yellow-400/40 via-orange-400/30 to-yellow-500/40 rounded-3xl opacity-70 blur-3xl group-hover:opacity-90 transition duration-700"></div>
              
              {/* Premium floating frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500/30 group-hover:scale-105 transition-all duration-500"
                style={{
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <img
                  src={shivajiMaharaj}
                  alt="Chhatrapati Shivaji Maharaj"
                  className="w-full h-auto object-cover"
                  style={{
                    filter: 'contrast(1.05) brightness(1.02) saturate(1.05)'
                  }}
                />
                
                {/* Subtle golden edge glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-yellow-400/10 pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Scroll Indicator - Centered below everything */}
        <div className="flex flex-col items-center gap-2 animate-bounce mt-16">
          <p
            className="text-yellow-300 text-sm font-medium tracking-wider uppercase"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}
          >
            Explore Our Legacy
          </p>
          <div
            className="w-6 h-10 rounded-full border-2 border-yellow-300 flex justify-center pt-2"
            style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
          >
            <div className="w-1 h-2 rounded-full bg-yellow-300 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent"></div>
    </section>
  );
}