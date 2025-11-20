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
        <main style={{ maxWidth: 400, margin: "40px auto" }}>
            <h2>Login</h2>

            {error && (
                <p style={{ color: "red" }} role="alert">
                    {error}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text" 
                    value={form.username} 
                    onChange={(e) => 
                        setForm({ ...form, username: e.target.value })
                    }
                    required 
                />

                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password" 
                    value={form.password} 
                    onChange={(e) => 
                        setForm({ ...form, password: e.target.value })
                    }
                    required 
                />

                <button type="submit" style={{ marginTop: "10px" }}>Login</button>
            </form>
        </main>
    );
}