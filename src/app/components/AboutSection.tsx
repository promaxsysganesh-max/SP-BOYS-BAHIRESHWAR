export function AboutSection() {
  const stats = [
    { label: 'स्थापना', value: '२०१७', icon: '🏛️' },
    { label: 'शिवजयंती', value: '१९ फेब्रुवारी', icon: '🚩' },
    { label: 'युवा शक्ती', value: 'एकसंध', icon: '💪' },
    { label: 'समाजसेवा', value: 'निरंतर', icon: '🤝' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 mb-4">
            आमच्या विषयी
          </h2>
          <p className="text-xl text-orange-600 font-medium">About Our Community</p>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-orange-100 font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 border border-orange-200">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-orange-600">SP BOYS BAHIRESHWAR</span> ची स्थापना <span className="font-bold">२०१७</span> मध्ये झाली. आम्ही बहिरेश्वर गावातील युवकांची एक सामाजिक संस्था आहोत ज्याचा उद्देश गावाचा विकास, सांस्कृतिक मूल्यांचे संरक्षण आणि युवा पिढीला एकत्र आणण्याचा आहे.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Our Mission</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span>Celebrating <strong>Shivjayanti</strong> every <strong>19th February</strong> with grand festivities and cultural programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span>Organizing the magnificent <strong>Shri Krishna Yatra rally</strong> that brings the entire village together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span>Conducting <strong>blood donation camps</strong> to save lives and serve humanity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span>Hosting <strong>race competitions</strong> to promote fitness and youth participation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">समाजसेवा</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span><strong>शाळकरी मुलांना मदत</strong> - शिक्षण सामग्री आणि मार्गदर्शन</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span><strong>वृक्षारोपण</strong> - पर्यावरण संवर्धन आणि हरितक्रांती</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span><strong>युवा एकत्रीकरण</strong> - सामाजिक बांधिलकी आणि नेतृत्व विकास</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🔸</span>
                    <span><strong>सांस्कृतिक कार्यक्रम</strong> - मराठी परंपरांचे जतन</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl border-l-4 border-orange-500">
              <p className="text-lg text-orange-900 italic font-medium">
                "आम्ही फक्त एक संस्था नाही, तर एक परिवार आहोत. बहिरेश्वरच्या प्रत्येक युवकाच्या हृदयात सांस्कृतिक अभिमान आणि समाजसेवेची भावना जागृत करणे हेच आमचे ध्येय आहे."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
