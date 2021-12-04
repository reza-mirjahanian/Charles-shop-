import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const schema = new Schema({
  product_id: {
    type: String,
    index: true,
  },
  SKU: Number,
}, {
  timestamps: true,
});

export default mongoose.model('Inventory', schema);
