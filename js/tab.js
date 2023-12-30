const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab , index)=> {
  tab.addEventListener('click',()=>{
    tabs.forEach(tab=>{tab.classList.remove('Active')});
    tab.classList.add('Active');

    all_content.forEach(content=>{content.classList.remove('Active')});
    all_content[index].classList.add('Active');
  })
})