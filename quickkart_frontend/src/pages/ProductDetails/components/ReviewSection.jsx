import { Star } from "lucide-react";

export default function ReviewSection({ reviews }) {
  return (
    <section className="w-[100%]">
      <h2 className=" m-10 text-2xl font-semibold mb-4">Customer Reviews</h2>

      {/* Overall Rating */}
      <div className=" m-10 flex items-center gap-2 mb-6">
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.round(reviews.reduce((a, r) => a + r.rating, 0) / reviews.length)
                  ? "fill-yellow-400"
                  : "fill-gray-200"
              }`}
            />
          ))}
        </div>
        <p className=" text-gray-600">
          {(
            reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
          ).toFixed(1)}{" "}
          out of 5
        </p>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6 m-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b pb-4 last:border-none last:pb-0"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{review.name}</h4>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-yellow-400" : "fill-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.comment}</p>
            <p className="text-xs text-gray-400 mt-1">{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
