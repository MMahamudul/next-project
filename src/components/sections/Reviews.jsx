export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Verified Buyer',
      rating: 5,
      comment:
        'Amazing products and very smooth experience. The website is fast and easy to use.',
    },
    {
      id: 2,
      name: 'John D.',
      role: 'Customer',
      rating: 4,
      comment:
        'Good quality items and clean UI. Login and item details work perfectly.',
    },
    {
      id: 3,
      name: 'Amina K.',
      role: 'Customer',
      rating: 5,
      comment:
        'I love how simple and modern this app feels. Adding items is very easy.',
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-blue-800 text-center">What Our Users Say</h2>
    
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-3 flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed">
                “{review.comment}”
              </p>

              {/* User */}
              <div className="mt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
