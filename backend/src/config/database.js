import mongoose from "mongoose"

const connectDB = async () => {
    try {
     const connectInstance = await mongoose.connect
    (`${process.env.DATABASE_URI}`)
    console.log("\n Yeah! baby, MongoDb Conection Successfull!", connectInstance.connection.host)
    } catch (error) {
        console.log("Oh no!, MongoDb Conection Error", error)
        process.exit(1)
    }
}

export default connectDB