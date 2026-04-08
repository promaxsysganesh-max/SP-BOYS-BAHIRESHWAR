export function ActivitiesSection() {
  const activities = [
    {
      title: 'शिवजयंती उत्सव',
      description: 'छत्रपती शिवाजी महाराजांच्या जयंतीचा भव्य दिव्य कार्यक्रम',
      icon: '🚩',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'श्री कृष्ण यात्रा रॅली',
      description: 'गावभर भक्तिमय वातावरण निर्माण करणारी मोठी यात्रा',
      icon: '🎺',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'रक्तदान शिबीर',
      description: 'जीवनदान देऊन समाजसेवा करण्याची संधी',
      icon: '💉',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'युवा धावण्याची स्पर्धा',
      description: 'युवकांमध्ये क्रीडा भावना आणि स्पर्धा वृत्ती वाढवणारे कार्यक्रम',
      icon: '🏃',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'वृक्षारोपण',
      description: 'पर्यावरण संवर्धन आणि निसर्ग संरक्षणाचे उपक्रम',
      icon: '🌳',
      color: 'from-green-600 to-emerald-700'
    },
    {
      title: 'शाळकरी मुलांना मदत',
      description: 'शिक्षण सामग्री वाटप आणि विद्यार्थ्यांना मार्गदर्शन',
      icon: '📚',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 mb-4">
            आमचे उपक्रम
          </h2>
          <p className="text-xl text-orange-600 font-medium">Our Activities</p>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>

              {/* Card content */}
              <div className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${activity.color} text-white text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {activity.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>

                {/* Decorative element */}
                <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${activity.color} group-hover:w-full transition-all duration-500`}></div>
              </div>

              {/* Background pattern */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                  backgroundSize: '10px 10px'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 shadow-2xl">
            <p className="text-white text-xl sm:text-2xl font-bold mb-4">
              आमच्या उपक्रमांमध्ये सहभागी व्हा!
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors duration-300 shadow-lg">
              Join Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
