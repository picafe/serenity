"use client"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/app/lib/database.types'
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { title } from '@/components/primitives'

export default function LoginPage() {
	const [selectedOption, setSelectedOption] = useState<'signIn' | 'magicLink' | 'signUp'>('signIn');
	
	// const router = useRouter()
	const supabase = createClientComponentClient<Database>()
	
	//   useEffect(() => {
	// 	const LoginCheck = setInterval(async () => {
	// 		const {
	// 			data: { user },
	// 		  } = await supabase.auth.getUser()
	// 		user && router.push('/dashboard')
	// 	}, 500) 	
	// 	return () => clearInterval(LoginCheck)
	// }, [])

	const renderComponent = () => {
		switch (selectedOption) {
		  case 'signIn':
			return <Auth
			supabaseClient={supabase}
			// view="magic_link"
			appearance={{
				theme: ThemeSupa,
				extend: true,
				className: {
					button: 'bg-gradient-to-r from-violet-400 to-indigo-700 border-indigo-900',
				},
				variables: {
					default: {
					  colors: {
						brand: 'rgb(49 46 129)',
						brandAccent: 'rgb(49 46 129)',
					  },
					},
				  },
			  }}
			showLinks={false}
			theme="dark"
			providers={[]}
			redirectTo={`https://localhost:3001/dashboard`}
		/>;
		  case 'magicLink':
			return <Auth
			supabaseClient={supabase}
			view="magic_link"
			appearance={{
				theme: ThemeSupa,
				extend: true,
				className: {
					button: 'bg-gradient-to-r from-violet-400 to-indigo-700 border-indigo-900',
				},
				variables: {
					default: {
					  colors: {
						brand: 'rgb(49 46 129)',
						brandAccent: 'rgb(49 46 129)',
					  },
					},
				  },
			  }}
			showLinks={false}
			theme="dark"
			providers={[]}
			redirectTo={`https://localhost:3001/auth/callback`}
		/>;
		  case 'signUp':
			return <Auth
			supabaseClient={supabase}
			view="sign_up"
			appearance={{
				theme: ThemeSupa,
				extend: true,
				className: {
					button: 'bg-gradient-to-r from-violet-400 to-indigo-700 border-indigo-900',
				},
				variables: {
					default: {
					  colors: {
						brand: 'rgb(49 46 129)',
						brandAccent: 'rgb(49 46 129)',
					  },
					},
				  },
			  }}
			showLinks={false}
			theme="dark"
			providers={[]}
			redirectTo={`http://localhost:3001/auth/callback`}
		/>;
		  default:
			return <Auth
			supabaseClient={supabase}
			// view="magic_link"
			appearance={{
				theme: ThemeSupa,
				extend: true,
				className: {
					button: 'bg-gradient-to-r from-violet-400 to-indigo-700 border-indigo-900',
				},
				variables: {
					default: {
					  colors: {
						brand: 'rgb(49 46 129)',
						brandAccent: 'rgb(49 46 129)',
					  },
					},
				  },
			  }}
			showLinks={false}
			theme="dark"
			providers={[]}
			redirectTo={`http://localhost:3001/dashboard`}
		/>;
		}
	}


	return (
		<div>
			<div className="flex justify-stretch items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <h2 className={title()}>Welcome</h2>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setSelectedOption('signIn')}
            className={`py-2 px-4 mr-2 rounded-lg ${
              selectedOption === 'signIn' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setSelectedOption('magicLink')}
            className={`py-2 px-4 mr-2 rounded-lg ${
              selectedOption === 'magicLink' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            Sign In with Magic Link
          </button>
          <button
            onClick={() => setSelectedOption('signUp')}
            className={`py-2 px-4 rounded-lg ${
              selectedOption === 'signUp' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            Sign Up
          </button>
        </div>
        {renderComponent()}
      </div>
    </div>

			
		</div>
		
	);
}
