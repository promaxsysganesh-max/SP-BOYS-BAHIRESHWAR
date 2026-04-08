export function SocialImpactSection() {
  const impactStats = [
    {
      year: '२०१७',
      label: 'स्थापना',
      description: 'Journey Started',
      icon: '🏛️',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      year: '१०००+',
      label: 'लोकांपर्यंत पोहोच',
      description: 'People Reached',
      icon: '👥',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      year: '५०+',
      label: 'रक्तदाते',
      description: 'Blood Donors',
      icon: '❤️',
      gradient: 'from-red-500 to-rose-600'
    },
    {
      year: '५००+',
      label: 'वृक्षारोपण',
      description: 'Trees Planted',
      icon: '🌳',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 mb-4">
            आमचा समाज प्रभाव
          </h2>
          <p className="text-xl text-orange-600 font-medium">Our Social Impact</p>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>

                {/* Main stat */}
                <div className="text-5xl font-extrabold text-white mb-3 relative z-10" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  {stat.year}
                </div>

                {/* Label in Marathi */}
                <div className="text-xl font-bold text-white/95 mb-2 relative z-10">
                  {stat.label}
                </div>

                {/* English description */}
                <div className="text-white/80 font-medium relative z-10">
                  {stat.description}
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>

              {/* Glowing border effect on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Impact Story */}
        <div className="mt-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 sm:p-12 shadow-2xl border border-orange-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-4">
              एक गाव, अनेक स्वप्ने, एकच ध्येय
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <p className="mb-4">
                <strong className="text-orange-700">SP BOYS BAHIRESHWAR</strong> ने गेल्या सहा वर्षांत बहिरेश्वर गावाच्या विकासात महत्वाची भूमिका बजावली आहे. आम्ही केवळ कार्यक्रम आयोजित करत नाही, तर समाजात बदल घडवून आणतो.
              </p>
              <p>
                आमच्या प्रत्येक उपक्रमामागे गावाच्या प्रगतीचा, युवकांच्या विकासाचा, आणि सांस्कृतिक मूल्यांच्या संरक्षणाचा उद्देश आहे.
              </p>
            </div>
            <div>
              <p className="mb-4">
                रक्तदान शिबिरांमधून आम्ही जीवन वाचवतो, वृक्षारोपणातून निसर्गाची सेवा करतो, आणि शैक्षणिक मदतीतून भविष्याची पिढी तयार करतो.
              </p>
              <p className="font-bold text-orange-700">
                आमचं स्वप्न आहे - बहिरेश्वरला एक आदर्श गाव बनवायचं, जिथे परंपरा आणि प्रगती हातात हात घालून चालतात.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
