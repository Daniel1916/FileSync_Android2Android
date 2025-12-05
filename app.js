
async function listFiles(){
  let r = await fetch('http://localhost:8080/files/list?path=/storage/emulated/0/');
  document.getElementById('out').textContent = JSON.stringify(await r.json(),null,2);
}
