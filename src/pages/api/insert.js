
import { ytrmodal } from '../../mongodb/ytSchema'
const { connect } = require('../../mongodb/connect')

connect()
export default async function handler(req, res) {


    if (req.method == 'POST') {

        try {
            let data = await ytrmodal.insertMany([{ ...req.body }]);
            res.json(data)

        } catch (error) {
            console.log(error);
            res.json({ error: true })
        }



    }
}