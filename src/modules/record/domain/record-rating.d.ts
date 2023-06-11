interface RecordRating {
  id: number;
  comment: string;
  customer: User;
  rating: number;
  record: Record;
}
