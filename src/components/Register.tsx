import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    const {data} = await axios.post("/register", {username, password})

    console.log(data);
  }
  return (
    <div>
      <form onSubmit={register}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
