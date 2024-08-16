import axios from "axios";
//axios seervve para fazer requisições http

axios.post("http://localhost:3002/api/client",{
    nome : "Felipe",
})

axios.get("http://localhost:3002/api/client")
    .then(response => {
        console.log("Axios response: ",response.data)
    })