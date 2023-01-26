import axios from 'axios'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecords, deleteRecods } from '../redux/slice'

export default function Personalscreen() {

    let show = useSelector(x => x.store.allRecords)
    let dispatch = useDispatch()
    // let data3 =0

    useLayoutEffect(() => {

        async function get() {
            let { data } = await axios.get('https://updatedugutest-harish.vercel.app/api/getRecord')

            console.log('data',data)
            dispatch(addRecords(data))
        }
        get()


    }, [])

    console.log('inside shows render: ',show);


    async function deleteit(_id) {

        let { data } = await axios.get(`https://updatedugutest-harish.vercel.app/api/delete/${_id}`)
        dispatch(deleteRecods(_id))

    }

    return (
        <div>

            <div className='bg-gray-300 min-h-screen py-5'>
            <AddLink />

                <p className='text-center text-3xl my-2'>List of Links</p>

                <div className='flex justify-center items-center'>

                    <table class="table" style={{ width: '80%' }} className='mx-auto my-10'>
                        <thead style={{ width: '80%', height: '8vh' }} className='bg-gray-400 '>
                            <tr  >
                                <th scope="col">Sno</th>
                                <th scope="col">Name</th>
                                <th scope="col">Link</th>
                                <th scope="col">Text</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* render list  */}
                            {show?.map((x, idx) => {

                                return (
                                    <tr key={idx} style={{ height: '10vh' }} className=' text-center'>
                                        <td style={{ width: '5%' }}>{idx + 1}</td>
                                        <td style={{ width: '20%' }}>{x.name}</td>
                                        <td style={{ width: '30%' }}>{x.link}</td>
                                        <td style={{ width: '45%' }}>{x.text}</td>

                                        <td style={{ width: '30%' }} >
                                            <button className='w-20 p-2 bg-red-500 hover:bg-red-700 rounded-lg' onClick={() => { deleteit(x._id) }}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>


                </div>


            </div>
        </div>
    )
}





function AddLink() {

    const [name, setname] = useState('')
    const [ytlink, setytlink] = useState('')
    const [text, settext] = useState('')
    const dispatch = useDispatch()


    async function handleSubmit(e) {

        e.preventDefault()
        try {


            let { data } = await axios.post('https://updatedugutest-harish.vercel.app/api/insert', {
                name,
                link: ytlink,
                text
            });

            dispatch(addRecords(data))
            setname('')
            setytlink('')
            settext('')
            // console.log(data)
        } catch (error) {

            console.log(error)
        }
    }



    return <div>


        <p className='text-2xl font-bold text-center'>Add a Link </p>


        <div className='flex flex-col justify-center items-center lg:w-6/12 md:w-5/12 w-11/12'>
            <p className='text-3xl'>Create Data </p>
            <div className='flex justify-center my-10 p-5 items-center bg-gray-500 w-3/6 flex-wrap rounded-lg text-black'>

                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col justify-center items-center'>

                    <input className='bg-black p-1 m-1 w-10/12 md:w-full md:p-3 md:m-2 rounded-md text-white' placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }} type="text" name="" id="" />
                    <input className='bg-black p-1 m-1 w-10/12 md:w-full md:p-3 md:m-2 rounded-md text-white' placeholder='Link Code' value={ytlink} onChange={(e) => { setytlink(e.target.value) }} type="text" name="" id="" /><br />
                    <input className='bg-black p-1 m-1 w-10/12 md:w-full md:p-3 md:m-2 rounded-md text-white' placeholder='Display Text' value={text} onChange={(e) => { settext(e.target.value) }} type="text" name="" id="" /><br />



                    <button type='sumbit' className='bg-green-400 hover:bg-green-500 rounded-md  py-3 px-6 my-3'>Create</button>
                </form>


            </div>
        </div>



    </div>

}


React.memo(AddLink)
React.memo(Personalscreen)