export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-orange-900 via-brown-900 to-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Logo/Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}>
            SP BOYS BAHIRESHWAR
          </h2>

          {/* Subtitle with glow */}
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-6"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 20px rgba(253, 224, 71, 0.6), 0 4px 6px rgba(0, 0, 0, 0.5)'
            }}
          >
            बहिरेश्वरचा सम्राट
          </h3>

          {/* Quote */}
          <p className="text-xl sm:text-2xl text-orange-200 font-medium mb-8 italic">
            आपली संस्कृती, आपला अभिमान, आपला बहिरेश्वर
          </p>

          {/* Divider */}
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center sm:text-left">
          {/* About */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-2 text-orange-200">
              <li>स्थापना २०१७</li>
              <li>युवा संघटना</li>
              <li>समाजसेवा</li>
              <li>सांस्कृतिक कार्यक्रम</li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Our Work</h4>
            <ul className="space-y-2 text-orange-200">
              <li>शिवजयंती उत्सव</li>
              <li>श्री कृष्ण यात्रा</li>
              <li>रक्तदान शिबीर</li>
              <li>वृक्षारोपण</li>
            </ul>
          </div>

          {/* Heritage */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Heritage</h4>
            <ul className="space-y-2 text-orange-200">
              <li>शेषनारायण मंदिर</li>
              <li>बहिरेश्वर गाव</li>
              <li>मराठी संस्कृती</li>
              <li>परंपरा संरक्षण</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-orange-200">
              <li>📍 Bahireshwar Village</li>
              <li>📧 Email Us</li>
              <li>📱 Social Media</li>
              <li>🤝 Join Movement</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {['📘', '📷', '🎥', '💬'].map((icon, index) => (
            <div
              key={index}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center text-2xl cursor-pointer hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Sacred Mantras */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl px-8 py-4">
            <p className="text-yellow-300 text-xl sm:text-2xl font-bold">
              जय शिवाजी • जय भवानी • जय श्री कृष्ण
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-700/50 pt-8 text-center">
          <p className="text-orange-300 text-sm sm:text-base mb-2">
            © 2017-2026 SP BOYS BAHIRESHWAR. All rights reserved.
          </p>
          <p className="text-orange-400/70 text-xs sm:text-sm mb-3">
            Made with ❤️ for Bahireshwar Village | आपली संस्कृती, आपला अभिमान
          </p>
          {/* Design Credit */}
          <p className="text-yellow-300/80 text-xs sm:text-sm">
            Designed & Created by{' '}
            <a
              href="https://www.linkedin.com/in/ganesh-bachate-a6435129a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-200 hover:underline transition-all duration-300 font-medium"
            >
              Ganesh Bachate
            </a>
          </p>
        </div>

        {/* Golden glow effects */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}
