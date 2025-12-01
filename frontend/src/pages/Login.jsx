import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Design/Login.css";

export default function LoginPage() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [emoji, setEmoji] = useState("🙂");
    const [emojiPos, setEmojiPos] = useState("upper");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("http://localhost:5000/api/login", form);
            setEmoji("😊");
            login(res.data.token, res.data.user);
            navigate("/dashboard");
        } catch {
            setEmoji("😢");
            setError("Incorrect username or password");
        }
    };

    return (
        <main className="login-container">
            <div className="login-box">
                <div className={`login-emoji ${emojiPos}`}>{emoji}</div>
                <h2 className="login-title">Login</h2>

                {error && (
                    <p className="login-error" role="alert">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-field">
                        <label htmlFor="username" className="font-medium">Username</label>
                        <input
                            id="username"
                            autoComplete="username"
                            type="text"
                            value={form.username}
                            onFocus={() => { setEmoji("🧐"); setEmojiPos("upper"); }}
                            onChange={(e) => {
                                setForm({ ...form, username: e.target.value });
                                setEmoji("🧐");
                                setEmojiPos("middle");
                            }}
                            onBlur={() => {
                                setEmoji("🙂");
                                setEmojiPos("upper");
                            }}
                            required
                            className="login-input"
                        />
                    </div>

                    <div className="login-field">
                        <label htmlFor="password" className="font-medium">Password</label>
                        <input
                            id="password"
                            autoComplete="current-password"
                            type="password"
                            value={form.password}
                            onFocus={() => { setEmoji("🧐"); setEmojiPos("lower"); }}
                            onChange={(e) => {
                                setForm({ ...form, password: e.target.value });
                                setEmoji("🧐");
                                setEmojiPos("lower");
                            }}
                            onBlur={() => {
                                setEmoji("🙂");
                                setEmojiPos("middle");
                            }}
                            required
                            className="login-input"
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}