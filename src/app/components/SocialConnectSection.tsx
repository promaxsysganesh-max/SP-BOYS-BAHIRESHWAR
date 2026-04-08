import { Instagram } from 'lucide-react';

export function SocialConnectSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-amber-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 mb-4">
            SP Boys शी जोडलेले रहा
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Instagram CTA Card */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-3xl blur-xl opacity-30"></div>

          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 border border-orange-100">
            {/* Instagram gradient background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Instagram Icon */}
              <div className="mb-6 relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-5 rounded-2xl">
                  <Instagram className="w-12 h-12 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Marathi Description */}
              <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                आमच्या उपक्रमांचे फोटो, व्हिडिओ आणि अपडेट्स पाहण्यासाठी Instagram वर जोडलेले रहा
              </p>

              {/* CTA Button */}
              <a
                href="https://www.instagram.com/sp_boys_bahireshwar?igsh=d2F4amhjYzI4aHU4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Instagram वर Follow करा</span>
              </a>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/5 to-transparent rounded-full"></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/5 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
