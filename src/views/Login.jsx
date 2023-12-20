
export default function Login() {
  return (
    <>

    <h1 className=" text-4xl font-black">Iniciar Sesión</h1>
    <p>Para crear un pedido debes iniciar sesión.</p>

    <div className=" bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form >
            <div className=" mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Email:</label>
                <input
                    type="text"
                    id="email"
                    className=" mt-2 w-full p-3 bg-gray-50"
                    name="name"
                    placeholder="correo@correo.com"
                />
            </div>
            <div className=" mb-4">
                <label
                    className="text-slate-800"
                    htmlFor="password"
                >Password:</label>
                <input
                    type="text"
                    id="email"
                    className=" mt-2 w-full p-3 bg-gray-50"
                    name="password"
                    placeholder="Tu password"
                />
            </div>

            <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-blue-600 hover:bg-blue-800 text-white w-full mtt-5 p-3 uppercase fornt-bold cursor-pointer"
            />
        </form>
    </div>
</>
  )
}
