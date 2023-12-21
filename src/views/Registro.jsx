import { Link } from 'react-router-dom';
export default function Registro() {
    return (
        <>

            <h1 className=" text-4xl font-black">Crear Cuenta</h1>
            <p>Llena el formulario!</p>

            <div className=" bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form >
                    <div className=" mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="name"
                        >Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            className=" mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Tu Nombre"
                        />
                    </div>
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
                    <div className=" mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="password_confirmation"
                        >Repetir Password:</label>
                        <input
                            type="text"
                            id="password_confirmation"
                            name="password_confirmation"
                            className=" mt-2 w-full p-3 bg-gray-50"
                            placeholder="Repite tu password"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Crear Cuenta"
                        className="bg-blue-600 hover:bg-blue-800 text-white w-full mtt-5 p-3 uppercase fornt-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/login">Iniciar Sesión</Link>
            </nav>
        </>
    )
}
