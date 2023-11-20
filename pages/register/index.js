import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/nova-accent/theme.css";   
import "primereact/resources/primereact.min.css";
import Swal from 'sweetalert2';
import { Message } from 'primereact/message';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');    
    const [errCounter, seterrCounter] = useState(0);


    const features = [
        { title: 'Unlimited Inbox', image: 'live-collaboration.svg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Data Security', image: 'security.svg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Cloud Backup Williams', image: 'subscribe.svg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
    ];

    async function handleSubmit  () {
        var nameError = '';
        var emailError = '';
        var cityError = '';
        var numberError = '';
        var ageError = '';
        if(/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name) == false || name == '')
        {
            nameError = 'Please enter a valid Name.'
        }
        
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false || email ==  "")
        {
            emailError = "Please enter a valid email.";
        } 
        
        if(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(city) == false || city =="")
        {
            cityError = "Please enter a valid city."
        } 

        if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number) == false || number == "")
        {
            numberError = "Please enter a valid Mobile Number."
        } 
        var err = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name);
        var ageNumericVal = +age;
        if (ageNumericVal < 0 || ageNumericVal > 100) {
            ageError = "Please enetr a valid age.";
            
        }
        else if(age == "")
        {
            ageError = "Please enetr a valid age.";
            
        }

        if(nameError != '' || emailError !='' || cityError != '' || ageError != '' || numberError != ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: ''+nameError+'<br>'+emailError+'<br>'+numberError+'<br>'+cityError+'<br>'+ageError+''                
              })
        }
        else{
            const axios = require('axios');
            let data = JSON.stringify({
                "email": email.toLowerCase(),
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
                Swal.fire({
                    icon: 'success',
                    title: 'Congrats!!',
                    html: '<b>You are successfully registered. Click Ok to Login.</b>',               
                    confirmButtonText: 'Ok',                
                }).then(async(result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    window.location.href = "/";//Swal.fire('Saved!', '', 'success')
                } 
                })
            })
            .catch((error) => {
                console.log(error);
            });
        }
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
                                    <span className="font-medium text-black-alpha-90">About Booming bulls</span>
                                    <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">Booming Bulls is an initiative for the young generation interested in making more, willing to step forward and be free from financial situations. We provide knowledge based on self-learning, experience, and theoretical implications on the market. In general, trading is considered a business not suitable for everyone, but this is just a hoax which we clear by letting you learn about the strategies that can provide a good profit. </p>
                                </div>
                            </li>
                            {/* <li className="flex align-items-start mb-4">
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
                            </li> */}
                        </ul>
                    </div>                    
                    <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                        <div className="text-900 text-2xl font-medium mb-6">Please fill the below details to Sign Up!</div>
                        <label htmlFor="name3" className="block text-900 font-medium mb-2">Name</label>
                        <InputText id="name3" type="text" placeholder="Please enter your Name." className="w-full mb-4" 
                        onChange={(e) => {setName(e.target.value)}} />
                        {/* {nameError ? <Message severity="error" text={nameError} /> : null} */}

                        <label htmlFor="email3" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email3" keyfilter="email" placeholder="Please enter your Email address." className="w-full mb-4" 
                        onChange={(e) => {setEmail(e.target.value)}} />
                        {/* {emailError ? <Message severity="error" text={emailError} /> : null} */}

                        <label htmlFor="number" className="block text-900 font-medium mb-2">Mobile No.</label>
                        <InputText id="MobileNumber" keyfilter="num"  placeholder="Please enter your Mobile Number." className="w-full mb-4" 
                        onChange={(e) => {setNumber(e.target.value)}} />
                        {/* {numberError ? <Message severity="error" text={numberError} /> : null} */}

                        <label htmlFor="city" className="block text-900 font-medium mb-2">City</label>
                        <InputText id="City" type="text" placeholder="Please enter your City Name." className="w-full mb-4" 
                        onChange={(e) => {setCity(e.target.value)}} />
                        {/* {cityError ? <Message severity="error" text={cityError} /> : null} */}

                        <label htmlFor="age" className="block text-900 font-medium mb-2">Age</label>
                        <InputText id="Age" keyfilter="num" placeholder="Please enter your Age." className="w-full mb-4" 
                        onChange={(e) => {setAge(e.target.value)}} />
                        {/* {ageError ? <Message severity="error" text={ageError} /> : null} */}
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
