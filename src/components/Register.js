

function Register() {
    return (

<div class="h-screen bg-gradient-to-tl from-neutral-100 via-gray-300 to-gray-200 flex justify-center ">
<div class="lg:w-2/5 md:w-1/2 w-2/3">
    <form class="bg-white px-2 rounded-lg shadow-lg w-full my-20 ">
        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Form register</h1>
        <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Username</label>
            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
  </div>
            <div>
                <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
                <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
  </div>
                <div>
                    <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                    <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
  </div>
                    <div>
                        <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Confirm password</label>
                        <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
  </div>
                       
  <button type="submit" class="w-full mt-6  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
                      
  <div className="mt-4">
   <p className="text-center text-sm text-gray-900">
         already account?
        <a className="underline font-medium " href="/login">Sign in</a>
     </p>
 </div>
    </form>
</div>
</div>
     
    );
  }
  
  export default Register;
  