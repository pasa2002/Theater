 function openNavigation(){
    document.getElementById('content-navbar').classList.remove('d-none');
    document.getElementById('navigation').classList.add('d-none');
 }

function closeNavigation(){
    document.getElementById('content-navbar').classList.add('d-none');
    document.getElementById('navigation').classList.remove('d-none');
}