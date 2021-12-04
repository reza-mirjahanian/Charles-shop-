import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const schema = new Schema({
  product_id: {
    type: String,
    index: true,
  },
  customer_id: {
    type: String,
    index: true,
  },
  price: Number, // Use decimal
  count: Number,
  comment: String,
  extra: Object, //
}, {
  timestamps: true,
});

export default mongoose.model('Sale', schema);
