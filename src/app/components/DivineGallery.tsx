import sheshnarayanImage from 'figma:asset/7f5afa06006e9c1bcecaeacc3be0c04c4ed84c22.png';
import krishnaMurtiImage from 'figma:asset/53f7b136f62fb17c0ae88649f201fa5c122e5f4d.png';

export function DivineGallery() {
  const divineCards = [
    {
      title: 'छत्रपती शिवाजी महाराज',
      description: 'स्वराज्याचे संस्थापक, मराठी साम्राज्याचे महान योद्धा आणि आमचे प्रेरणास्थान',
      image: 'https://images.unsplash.com/photo-1773826668952-506908864e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'श्री शेषनारायण मंदिर',
      description: 'आमच्या गावाचे पवित्र स्थान, श्रद्धेचे केंद्र आणि आध्यात्मिक शक्तीचा स्रोत',
      image: sheshnarayanImage
    },
    {
      title: 'श्रीकृष्ण मूर्ती',
      description: 'धर्माचे रक्षक, प्रेमाचे अवतार, आणि आमच्या हृदयातील देव',
      image: krishnaMurtiImage
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 mb-4">
            प्रेरणा आणि दैवत
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {divineCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: '0 10px 40px rgba(251, 146, 60, 0.2)'
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Golden overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {card.description}
                </p>
              </div>

              {/* Decorative golden corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
