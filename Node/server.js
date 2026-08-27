const http=require('http');
function requestListener(req,res){//Request and response are the parameters of the function
    console.log(req);
    process.exit();//This will terminate the server after the first request
}
const server=http.createServer(requestListener);
const PORT=3010;
server.listen(PORT,()=>{
    console.log(`Server is running on address http://localhost:${PORT}`)
});
