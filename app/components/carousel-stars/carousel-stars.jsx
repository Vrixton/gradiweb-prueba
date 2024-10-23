import React from 'react';
import Star from '../star/star';

const CarouselStars = ({ tags = [] }) => {
    if (!Array.isArray(tags)) {
      return <div>No hay etiquetas disponibles.</div>;
    }

    const numericTags = tags
      .filter(tag => !isNaN(tag))
      .map(tag => parseInt(tag, 10));
  
    const averageRating = numericTags.length > 0 
      ? numericTags.reduce((sum, value) => sum + value, 0) / numericTags.length 
      : 0;
  
    let starCount = 0;

    if (averageRating >= 0 && averageRating < 100) {
      starCount = 1;
    } else if (averageRating < 200) {
      starCount = 2;
    } else if (averageRating < 300) {
      starCount = 3;
    } else if (averageRating < 400) {
      starCount = 4;
    } else if (averageRating <= 500) {
      starCount = 5;
    }

    return (
        <div>
            <div>
                {Array.from({ length: starCount }, (_, index) => (
                    <Star key={index} filled />
                ))}
                {[...Array(5 - starCount)].map((_, i) => (
                    <Star key={i + starCount} filled={false} />
                ))}
            </div>
        </div>
      );
    };

export default CarouselStars;
