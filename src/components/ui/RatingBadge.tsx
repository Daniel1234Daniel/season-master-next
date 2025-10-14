import React from 'react'
import { Star } from 'lucide-react';
interface RatingBadgeProps {
  rating: number;
}

const RatingBadge = ({ rating }: RatingBadgeProps) => (
  <div className="flex items-center justify-center gap-2 text-sm">
     <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="w-5 h-5"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.84-6.84C35.5 2.93 30.19 0.5 24 0.5 14.82 0.5 6.85 5.98 3.16 13.86l7.98 6.2C12.95 13.4 17.97 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.14 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.5c-.54 2.84-2.19 5.25-4.67 6.89l7.25 5.63C43.5 37.02 46.14 31.24 46.14 24.5z"
      />
      <path
        fill="#4A90E2"
        d="M11.14 28.06c-1.03-3.09-1.03-6.53 0-9.62l-7.98-6.2C.75 17.23 0 20.55 0 24s.75 6.77 3.16 9.76l7.98-6.2z"
      />
      <path
        fill="#FBBC05"
        d="M24 47.5c6.19 0 11.39-2.03 15.18-5.54l-7.25-5.63c-2.01 1.35-4.59 2.17-7.93 2.17-6.03 0-11.05-3.9-12.86-9.36l-7.98 6.2C6.85 42.02 14.82 47.5 24 47.5z"
      />
    </svg>
    </div>
    <div className='flex flex-col items-start '>
    <span>Goole Rating </span>
    <div className='flex flex-row'>
            <Star className="w-[17.48px] h-[18px] text-orange-400 fill-orange-400" />
            <Star className="w-[17.48px] h-[18px] text-orange-400 fill-orange-400" />
            <Star className="w-[17.48px] h-[18px] text-orange-400 fill-orange-400" />
            <Star className="w-[17.48px] h-[18px] text-orange-400 fill-orange-400" />
            <Star className="w-[17.48px] h-[18px] text-orange-400 fill-orange-400" />
            <Star className="w-[17.48px] h-[18px] text-orange-400 fill-orange-400" />

    </div>
    </div>
    <div>
        <span className="">Rated 4.9/5</span>
    </div>
  </div>
);

export default RatingBadge;
