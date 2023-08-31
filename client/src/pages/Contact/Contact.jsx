import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import FileBase from 'react-file-base64'
import { Attachment, Clear } from '@mui/icons-material'
import { contact } from '../../redux/actions/contact'
import { Footer } from '../../components'

const Contact = () => {

    const fileBase64Ref = useRef(null)
    const dispatch = useDispatch()
    const { contactUsers, isFetching } = useSelector(state => state.contact)

    const initialContactData = { name: '', email: '', subject: '', message: '', images: [] }
    const [contactData, setContactData] = useState(initialContactData)


    useEffect(() => {
        console.log(`contactData`, contactData)
    }, [contactData])
    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }
    const handleImageButtonClick = (e) => {
        e.preventDefault();
        fileBase64Ref.current.querySelector('input[type="file"]').click();
    }
    const handleAddImage = (files) => {
        if (contactData.images.length + files.length > 5) {
            alert('You can only upload up to 5 images');
            return;
        }

        const newFiles = [...contactData.images];
        files.forEach((file) => {
            const existingFile = newFiles.find((image) => image.name === file.name);
            if (existingFile) {
                alert(`File ${file.name} is already present in the array`);
                return;
            }
            newFiles.push(file);
        });
        const images = newFiles.map(file => file.base64)
        setContactData({ ...contactData, images });
    };
    const handleDeleteImage = () => {
        setContactData({ ...contactData, image: '' })
    }

    const handleContact = (e) => {
        e.preventDefault()
        const { name, email, message, subject } = contactData
        if (!name || !email || !message || !subject) alert('provide all fields')
        dispatch(contact(contactData, setContactData))
    }


    return (
        <>
            <div className='w-full min-h-screen bg-lighter-brown flex flex-col items-center  ' >

                <div className={`wrapper lg:w-[50rem] md:w-[44rem] sm:w-[40rem] w-full md:px-0 px-[1rem] flex flex-col gap-[1rem]  `} >

                    <h2 className='text-[32px] font-bold ' >Need Help</h2>

                    <div className='w-full flex flex-col gap-[8px] ' >
                        <p className='font-light ' >Complete the form below for any product questions or concerns!</p>
                        <p className='font-light ' >
                            <span className='' >For domestic returns visit </span>
                            <Link to='/pages/return-policy' className={`underline font-semibold `} >Return Policy</Link>
                        </p>
                    </div>

                    <div className='p-[2rem] bg-white flex flex-col gap-[1rem] ' >
                        <h4 className='text-[26px] font-semibold ' >Contact us</h4>
                        {/* <hr className='w-full h-[2px] bg-gray ' /> */}
                        <form onSubmit={handleContact} className='flex flex-col gap-[1rem] ' >
                            <div className='flex flex-col gap-[8px] ' >
                                <label className='' >First Name <span className='text-red-500 ' >*</span></label>
                                <input type='text' value={contactData.name} name='name' onChange={handleChange} placeholder={`Name`} className='w-full border-[1px] border-black rounded-[2px] p-[12px] ' />
                            </div>
                            <div className='flex flex-col gap-[8px] ' >
                                <label className='' >Email <span className='text-red-500 ' >*</span></label>
                                <input type='text' value={contactData.email} name='email' onChange={handleChange} placeholder={`Email`} className='w-full border-[1px] border-black rounded-[2px] p-[12px] ' />
                            </div>
                            <div className='flex flex-col gap-[8px] ' >
                                <label className='' >Subject <span className='text-red-500 ' >*</span></label>
                                <input type='text' value={contactData.subject} name='subject' onChange={handleChange} placeholder={`Subject`} className='w-full border-[1px] border-black rounded-[2px] p-[12px] ' />
                            </div>
                            <div className='flex flex-col gap-[8px] ' >
                                <label className='' >Message <span className='text-red-500 ' >*</span></label>
                                <textarea rows={5} type='text' value={contactData.message} name='message' onChange={handleChange} placeholder={`Message`} className='w-full border-[1px] border-black rounded-[2px] p-[12px] ' />
                            </div>


                            <div className="w-full flex justify-center items-center flex-col">
                                {
                                    contactData.images.length
                                        ?
                                        <div className="relative w-[12rem] h-[12rem] p-[8px] rounded-[10px] flex justify-center items-center  " >
                                            <img src={contactData.images[0]} alt="" className="rounded-[10px] w-full h-full " />
                                            <button onClick={() => handleDeleteImage()} className="absolute top-[12px] right-[12px] text-white   " ><Clear /></button>
                                        </div>
                                        :
                                        <div ref={fileBase64Ref} id="filebase_image" className="w-full border-[1px] border-black p-[12px] flex justify-center items-center " >
                                            <button onClick={handleImageButtonClick} className="w-full flex justify-center items-center gap-[8px] text-textGray  " >
                                                <Attachment /><span className='' >Attach Files</span>
                                            </button>
                                            <FileBase type="file" onDone={(filesArr) => { handleAddImage(filesArr) }} multiple />
                                        </div>
                                }
                            </div>


                            <button type={`submit`} className='w-full bg-black p-[1rem] text-white ' >{
                                isFetching ? 'Loading...' : 'Send'
                            }</button>
                        </form>
                    </div>

                </div>


            </div>
            <Footer />

        </>
    )
}


export default Contact