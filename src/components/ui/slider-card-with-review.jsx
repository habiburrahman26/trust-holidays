import Link from 'next/link';
import { Star } from 'lucide-react';
import Image from 'next/image';

const SliderCardWithReview = ({link, image, alt, name :title, review, rating}) => {
  return (
    <Link href="#" key={link} className="block group transition-all">
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="w-full h-full object-cover group-hover:scale-105 transition-all"
      />
    </div>
    <div className="pt-4">
      <h3 className="text-lg truncate font-medium mb-1 group-hover:text-primary group-hover:underline transition-colors delay-100">{title}</h3>
      <div className="flex items-center gap-1.5 text-sm">
        <span className="font-medium">{rating}</span>
        <Star className="w-4 h-4 fill-primary text-primary" />
        <s4an className="text-black/50 ">
          ({review} Review&apos;s)
        </s4an>
      </div>
    </div>
  </Link>
  )
}

export default SliderCardWithReview