import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const schema = new Schema({
  carModelId: {
    type: String,
    index: true,
    unique: true,
  },
  carName: String,
  price: Number, // use decimal

});

export default mongoose.model('Car', schema);
