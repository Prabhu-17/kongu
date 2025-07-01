import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/students')
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}
