type TRatingReview = {
  rating: number;
  reviews: string;
};

export type TRatingReviews = {
  id: string;
  productId: string;
  value: TRatingReview[];
};
