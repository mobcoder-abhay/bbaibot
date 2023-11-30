import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import Link from 'next/link';
import Swal from 'sweetalert2';




const SignIn = () => {

    const [email, setEmail] = useState('');   

    async function handleSubmit(){
        
        if(email === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<b>Please enter the Email to proceed.</b>'                
              })
        }
        else if(email !== ""){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                const axios = require('axios');
                let data = '';

                let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.boomingbulls.org/api/users/'+email.toLowerCase()+'',
                headers: { },
                data : data
                };

                await axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        window.location.href = '/bot';

                })
                .catch(async (error) => {
                    console.log(error);
                    if(error.response.data.error === "User not found"){
                        await Swal.fire({
                            title: 'You are not registered with us. Please click on SignUp button to register!',
                            showDenyButton: true,                            
                            confirmButtonText: 'Sign Up',
                            denyButtonText: `Cancel`,
                          }).then(async( result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                               window.location.href = "/register";
                              //Swal.fire('Saved!', '', 'success')
                            } else if (result.isDenied) {
                              await Swal.fire('Thanks for visiting Booming Bulls AI Bot!!', '', '')
                            }
                          })
                    }                    
                });
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: '<b>Please enter a <u>valid Email</u> to proceed.</b>'                
                  })
            }            
        }
    }
    const features = [
        { title: 'About Booming bulls', image: 'live-collaboration.svg', text: 'Booming Bulls is an initiative for the young generation interested in making more, willing to step forward and be free from financial situations. We provide knowledge based on self-learning, experience, and theoretical implications on the market. In general, trading is considered a business not suitable for everyone, but this is just a hoax which we clear by letting you learn about the strategies that can provide a good profit.' },
        // { title: 'Data Security', image: 'security.svg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        // { title: 'Cloud Backup Williams', image: 'subscribe.svg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
    ];

    return (
        <>            
            <div style={{ background: 'url("/demo/images/blocks/logos/BackgroundBB2.jpg") no-repeat', backgroundSize: 'cover' }} className="px-4 py-8 md:px-6 lg:px-8">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6 p-4 lg:p-7" style={{ backgroundColor: 'rgba(255,255,255,.7)' }}>
                        <img src="/demo/images/blocks/logos/Booming Bulls.png" alt="Image" height="150" className="mb-6" />
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
                        <div className="text-900 text-2xl font-medium mb-6">Login</div>
                        <label htmlFor="email3" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email3" type="text" placeholder="Email address" className="w-full mb-4"
                        onChange={(e) => {setEmail(e.target.value)}} />
                        {/* <Message severity="error" text="Email is required" /> */}
                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                {/* <Checkbox id="rememberme3" className="mr-2" checked={checked3} onChange={(e) => setChecked3(e.checked)} /> */}
                                {/* <label htmlFor="rememberme3">Remember me</label> */}
                            </div>
                            {/* <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a> */}
                        </div>

                        <Button label="Login" icon="pi pi-user" className="w-full" onClick={handleSubmit} />

                        <div className="mt-6 text-center text-600">
                            Do not have an account? <Link href='/register' tabIndex="0" className="font-medium text-blue-500">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default SignIn;
