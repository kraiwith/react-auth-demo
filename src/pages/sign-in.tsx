import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const model = {
            email: email,
            password: password,
        }
        console.log(`✨ ~ model:`, model);

        navigate('/overview');
    }

    return (
        <div className='min-h-dvh flex justify-center items-start p-3 md:items-center'>
            <div className="bg-transparent md:bg-gray-700 rounded-lg p-3" style={{
                width: '100%',
                maxWidth: '380px'
            }}>
                <form onSubmit={handlerSubmit}>
                    <h3 className='mb-3 text-2xl text-center'>Sign in</h3>
                    <div className="mb-3">
                        <label htmlFor="" className="mb-1"> Email </label>
                        <input type="email" className='block w-full rounded-sm outline-none py-2 px-3' placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="mb-1"> Password </label>
                        <input type="password" className='block w-full rounded-sm outline-none py-2 px-3' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="">
                        <button type='submit' className='uppercase block w-full bg-purple-600 rounded-lg py-2 px-3 hover:bg-purple-800 transition-colors'>
                            login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
