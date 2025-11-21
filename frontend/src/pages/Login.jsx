import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:3000/api/login", form);
            login(res.data.token);
            navigate("/dashboard");
        } catch {
            setError("Invalid username or password");
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                {error && (
                    <p className="text-red-600 text-center mb-3" role="alert">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="username" className="font-medium">Username</label>
                        <input
                            id="username"
                            autoComplete="username"
                            type="text"
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                            required
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-medium">Password</label>
                        <input
                            id="password"
                            autoComplete="current-password"
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}