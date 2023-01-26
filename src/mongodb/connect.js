import mongoose from 'mongoose'

export const connect = () => {

    // let url = 'mongodb+srv://notetaker:notetaker@cluster0.uv7vj.mongodb.net/test'
    let url = 'mongodb+srv://harish:harish@cluster0.ksz3ptz.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(url, (err) => {
        err ? console.log(err) : console.log('db connected');
    })

}



