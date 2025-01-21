import{a as f,S as w,i as m}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();window.global||(window.global=window);f.defaults.baseURL="https://pixabay.com/api";let h=new w(".gallery-list a",{captionsData:"alt",captionDelay:250});const u=document.querySelector("#search-form"),c=document.querySelector("#loader"),n=document.querySelector("#load-more"),d=document.querySelector(".gallery-list");let p=0,s={key:"48271120-e478f6712aa82518e8481b3a8",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20};n.classList.add("pasif");u.addEventListener("submit",async a=>{a.preventDefault(),c.classList.add("loader"),s.q=a.currentTarget.elements.query.value.trim(),s.page=1;try{const t=await g(s);if(t.hits.length<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");p=Math.ceil(t.totalHits/s.per_page),p>s.page&&(s.page+=1,n.classList.remove("pasif"));const o=y(t.hits);d.innerHTML=o,c.classList.remove("loader"),h.refresh()}catch(t){m.error({message:`${t}`,position:"topRight"}),d.innerHTML="",c.classList.remove("loader")}u.reset()});n.addEventListener("click",async()=>{try{const a=await g(s),t=y(a.hits);if(d.insertAdjacentHTML("beforeend",t),h.refresh(),s.page+=1,p<s.page)throw n.classList.add("pasif"),new Error("We're sorry, but you've reached the end of search results");window.scrollBy(0,2*b())}catch(a){m.info({position:"topRight",message:`${a}`})}});const g=async a=>(await f.get("/",{params:a})).data,y=a=>a.map(({webformatURL:t,largeImageURL:o,tags:l,likes:e,views:r,comments:i,downloads:L})=>`
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${o}">
                 <img src="${t}"  alt="${l}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${e}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${r}</p>
                </li>
                <li class="info-item">
                  <h3>Comments</h3>
                  <p>${i}</p>
               </li>
               <li class="info-item">
                 <h3>Downloads</h3>
                 <p>${L}</p>
               </li>
             </ul>
        </li>`).join(""),b=()=>document.querySelector(".card").getBoundingClientRect().height;
//# sourceMappingURL=index.js.map
