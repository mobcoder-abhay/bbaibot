import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import Link from 'next/link';
import * as axios from 'axios';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cityError, setCityError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [errCounter, seterrCounter] = useState(0);


    const features = [
        { title: 'Unlimited Inbox', image: 'live-collaboration.svg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Data Security', image: 'security.svg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Cloud Backup Williams', image: 'subscribe.svg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
    ];

    async function handleSubmit  () {
        // /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name) === false ? setNameError("Please enter a valid Name.")  : null;
        // name == "" ? setNameError("This field is required!")  : null;
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false ? setEmailError("Please enter a valid email.") : null;
        // email == "" ? setEmailError("This field is required!") : null;
        // /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(city) === false ? setCityError("Please enter a valid city.") : null;
        // city == "" ? setCityError("This field is required!") : null;
        // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number) === false ? setNumberError("Please enter a valid Mobile Number.")   : null;
        // number == "" ? setNumberError("This field is required!") : null;
        
        // var ageNumericVal = +age;
        // if (ageNumericVal < 0 || ageNumericVal > 200) {
        //     setAgeError("Please enetr a valid age.")
        // }
        // else if(age == "")
        // {
        //     setAgeError("This field is required!") 
        // }


        const axios = require('axios');
        let data = JSON.stringify({
            "email": email,
            "name": name,
            "city": city,
            "number": number,
            "age": age
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:1234/api/users',
            headers: { 
                'Content-Type': 'application/json'
            },
        data : data
        };

        await axios.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });


        <Link href='/signin'></Link>
        window.location.href = 'http://localhost:3000/signin';
        
        
        console.log('Name : ' +name)
    }

    return (
        <>

            <div style={{ background: 'url("/demo/images/blocks/logos/BackgroundBB2.jpg") no-repeat', backgroundSize: 'cover' }} className="px-4 py-8 md:px-6 lg:px-8">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6 p-4 lg:p-7" style={{ backgroundColor: 'rgba(255,255,255,.7)' }}>
                        <img src="/demo/images/blocks/logos/Booming Bulls.png" alt="Image" height="75" className="mb-6" />
                        <div className="text-xl text-black-alpha-90 font-500 mb-3">Welcome to Booming Bulls AI Bot</div>
                        <p className="text-black-alpha-50 line-height-3 mt-0 mb-6">Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse platea dictumst quisque.</p>
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-start mb-4">
                                <div>
                                    <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                                        <i className="text-xl text-white pi pi-inbox"></i>
                                    </span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-medium text-black-alpha-90">Unlimited Inbox</span>
                                    <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. </p>
                                </div>
                            </li>
                            <li className="flex align-items-start mb-4">
                                <div>
                                    <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                                        <i className="text-xl text-white pi pi-shield"></i>
                                    </span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-medium text-black-alpha-90">Premium Security</span>
                                    <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Scelerisque purus semper eget duis at tellus at urna. Sed risus pretium quam vulputate.</p>
                                </div>
                            </li>
                            <li className="flex align-items-start">
                                <div>
                                    <span className="flex align-items-center justify-content-center bg-purple-400" style={{ width: '38px', height: '38px', borderRadius: '10px' }}>
                                        <i className="text-xl text-white pi pi-globe"></i>
                                    </span>
                                </div>
                                <div className="ml-3">
                                    <span className="font-medium text-black-alpha-90">Cloud Backups Inbox</span>
                                    <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Egestas sed tempus urna et. Auctor elit sed vulputate mi sit amet mauris commodo.</p>
                                </div>
                            </li>
                        </ul>
                    </div>                    
                    <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                        <div className="text-900 text-2xl font-medium mb-6">Please fill the below details to Sign Up!</div>
                        <label htmlFor="name3" className="block text-900 font-medium mb-2">Name</label>
                        <InputText id="name3" type="text" placeholder="Please enter your Name." className="w-full mb-4" 
                        onChange={(e) => {setName(e.target.value)}} />

                        <label htmlFor="email3" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email3" keyfilter="email" placeholder="Please enter your Email address." className="w-full mb-4" 
                        onChange={(e) => {setEmail(e.target.value)}} />

                        <label htmlFor="number" className="block text-900 font-medium mb-2">Mobile No.</label>
                        <InputText id="MobileNumber" keyfilter="num" type="password" placeholder="Please enter your Mobile Number." className="w-full mb-4" 
                        onChange={(e) => {setNumber(e.target.value)}} />

                        <label htmlFor="name3" className="block text-900 font-medium mb-2">City</label>
                        <InputText id="City" type="text" placeholder="Please enter your City Name." className="w-full mb-4" 
                        onChange={(e) => {setCity(e.target.value)}} />

                        <label htmlFor="email3" className="block text-900 font-medium mb-2">Age</label>
                        <InputText id="Age" keyfilter="num" placeholder="Please enter your Age." className="w-full mb-4" 
                        onChange={(e) => {setAge(e.target.value)}} />
                        <br></br>
                    <br></br>
                    <br></br>
                        <Button label="Sign Up" icon="pi pi-user" className="w-full" onClick={handleSubmit} />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Register;
