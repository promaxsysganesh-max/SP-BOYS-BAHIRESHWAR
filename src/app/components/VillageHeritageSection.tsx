import villageImage from 'figma:asset/f48f654f22f3ca6cde81203fe821c516567c2cf7.png';

export function VillageHeritageSection() {
  const heritageCards = [
    { title: 'इतिहास', icon: '📜', description: 'प्राचीन वारसा' },
    { title: 'मंदिर', icon: '🛕', description: 'आध्यात्मिक केंद्र' },
    { title: 'एकता', icon: '🤝', description: 'लोकांचा संघ' },
    { title: 'शेती', icon: '🌾', description: 'आमची जीवनरेखा' },
    { title: 'युवा', icon: '💪', description: 'भविष्याची शक्ती' },
    { title: 'उत्सव', icon: '🎊', description: 'सांस्कृतिक वैभव' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-900 via-brown-800 to-orange-900 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-300 mb-4" style={{ textShadow: '0 0 20px rgba(253, 224, 71, 0.5)' }}>
            आपले गाव — बहिरेश्वर
          </h2>
          <p className="text-xl text-orange-200 font-medium">Our Village Heritage</p>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Village Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-96">
            <img
              src={villageImage}
              alt="Bahireshwar Village Temple Lake View"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-xl sm:text-2xl font-medium italic text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                "जिथे परंपरा आणि आधुनिकता एकत्र येतात"
              </p>
            </div>
          </div>
        </div>

        {/* Heritage Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {heritageCards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-600/20 to-orange-700/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <div className="text-5xl mb-3">{card.icon}</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">{card.title}</h3>
              <p className="text-orange-200 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Heritage Quote */}
        <div className="mt-16 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 backdrop-blur-sm border border-yellow-500/40 rounded-3xl p-8 sm:p-12 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl text-yellow-100 font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            "बहिरेश्वर - आमचे मूळ, आमची ओळख"
          </p>
          <p className="text-lg sm:text-xl text-orange-200 leading-relaxed max-w-4xl mx-auto">
            आमच्या गावात प्राचीन मंदिरे, समृद्ध शेती, आणि एकमेकांवर प्रेम करणारे लोक आहेत. येथील प्रत्येक गल्लीबोळात इतिहास आहे, प्रत्येक चौकात संस्कृती आहे. आम्ही आमच्या वारसाचा अभिमान घेतो आणि भविष्याची निर्मिती करतो.
          </p>
        </div>
      </div>
    </section>
  );
}
