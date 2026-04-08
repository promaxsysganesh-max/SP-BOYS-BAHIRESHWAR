import villageTempleImage from 'figma:asset/f48f654f22f3ca6cde81203fe821c516567c2cf7.png';
import krishnaMurtiImage from 'figma:asset/05fa37a93729cb76cbedfa338e89d2dbf0ba079a.png';

export function TempleSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-900 via-orange-950 to-brown-900 relative overflow-hidden">
      {/* Sacred glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-300 mb-4" style={{ textShadow: '0 0 30px rgba(253, 224, 71, 0.6)' }}>
            श्री शेषनारायण देवस्थान
          </h2>
          <p className="text-xl text-orange-200 font-medium">The Sacred Heart of Bahireshwar</p>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Temple Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Temple View */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={villageTempleImage}
                alt="Shri Sheshnarayan Temple Lake View"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
              <div className="absolute inset-0 border-4 border-yellow-500/30 rounded-3xl"></div>
            </div>
          </div>

          {/* Right - Murti and Content */}
          <div className="space-y-6">
            {/* Murti Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group mb-8">
              <img
                src={krishnaMurtiImage}
                alt="Shri Krishna Murti"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute inset-0 border-4 border-yellow-500/30 rounded-3xl"></div>
            </div>

            {/* Devotional Content */}
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-700/20 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8">
              <p className="text-orange-100 text-lg leading-relaxed mb-6">
                श्री शेषनारायण देवस्थान हे आमच्या गावाचे अत्यंत पवित्र आणि प्राचीन स्थान आहे. येथे भगवान विष्णूच्या शेषशय्येवरील स्वरूपाची पूजा होते. भक्तिभावाने या मंदिरात येणारे प्रत्येक श्रद्धाळू शांती आणि दैवी कृपेचा अनुभव घेतो.
              </p>
              <p className="text-orange-100 text-lg leading-relaxed mb-6">
                बाल श्रीकृष्णाची पूजा आणि श्रीकृष्ण यात्रा या मंदिराच्या महत्वाचे उपक्रम आहेत. गावकरी मोठ्या उत्साहाने आणि भक्तिभावाने या कार्यक्रमांमध्ये सहभागी होतात.
              </p>

              {/* Sacred Quote */}
              <div className="relative mt-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border-l-4 border-yellow-400">
                <div className="absolute -top-4 -left-4 text-6xl text-yellow-400/40">"</div>
                <p className="text-yellow-100 text-xl font-bold italic relative z-10">
                  श्रीकृष्णाची कृपा आणि शेषनारायणाचे आशीर्वाद हेच आमच्या गावाचे सामर्थ्य
                </p>
                <div className="absolute -bottom-4 -right-4 text-6xl text-yellow-400/40 rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divinity Elements */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl">
            <div className="text-5xl mb-3">🙏</div>
            <h4 className="text-yellow-300 font-bold text-xl mb-2">दैनंदिन पूजा</h4>
            <p className="text-orange-200">नित्य आरती आणि पूजा अर्चा</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl">
            <div className="text-5xl mb-3">🎊</div>
            <h4 className="text-yellow-300 font-bold text-xl mb-2">विशेष उत्सव</h4>
            <p className="text-orange-200">जन्माष्टमी आणि इतर सण</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl">
            <div className="text-5xl mb-3">🕉️</div>
            <h4 className="text-yellow-300 font-bold text-xl mb-2">आध्यात्मिक शांती</h4>
            <p className="text-orange-200">ध्यान आणि भक्तिमार्ग</p>
          </div>
        </div>
      </div>
    </section>
  );
}
