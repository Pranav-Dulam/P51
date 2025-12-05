import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
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
            const res = await axios.post("http://localhost:3000/api/auth/login", {
                username: form.username,
                password: form.password
            }, {
                headers: { "Content-Type": "application/json" }
            });
            setEmoji("😊");
            login(res.data.token);
            navigate("/dashboard");
        } catch {
            setEmoji("😢");
            setError("Incorrect username or password");
        }
    };

    return (
        <main className="login-container tron-wrapper">
            <div className="tron-bg"></div>
            <div className="login-box tron-box">
                <div className={`login-emoji tron-emoji ${emojiPos}`}>{emoji}</div>
                <h2 className="login-title tron-title">Login</h2>

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
                            className="login-input tron-input"
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
                            className="login-input tron-input"
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-button tron-button"
                    >
                        Login
                    </button>
                </form>
                <p className="signup-text">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="signup-link"
                      style={{
                        color: "#3b5bfd",
                        fontWeight: "700",
                        textDecoration: "underline",
                        fontSize: "16px"
                      }}
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
}