document.addEventListener('DOMContentLoaded',()=>{
 const buttons=document.querySelectorAll('.add-cart');
 const cartList=document.getElementById('cart-items');
 const totalEl=document.getElementById('total');
 const toast=document.getElementById('toast');
 let total=0;
 buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.card');
    const name=card.querySelector('h2').textContent;
    const price=parseInt(card.dataset.price);
    const li=document.createElement('li');
    li.textContent=name+' - ₩'+price.toLocaleString();
    cartList.appendChild(li);
    total+=price;
    totalEl.textContent='₩'+total.toLocaleString();
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),2000);
  });
 });
 document.getElementById('clear-cart').addEventListener('click',()=>{
   cartList.innerHTML=''; total=0; totalEl.textContent='₩0';
 });
});