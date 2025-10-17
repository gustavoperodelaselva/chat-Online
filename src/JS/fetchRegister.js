export default async function fetchRegister(username, password) {

try {
    const res = await fetch("http://localhost:8000/create_users", {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({ username: username, password: password,  }),   

});

if (!res.ok) {
    alert("Error al registrar el usuario");
}

return res;

} catch (error) {
    console.error("Error al conectar con el servidor:", error);
    throw error;
} 
}

