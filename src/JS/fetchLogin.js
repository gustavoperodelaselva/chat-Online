export default async function fetchLogin(username, password) {
    try {
        const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ username: username, password: password }),


    });

    if (!res.ok) {
        alert("Credenciales incorrectas");
    }

    return res;

    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        throw error;
    }



}

