import{a as f,S as w,i as m}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();window.global||(window.global=window);f.defaults.baseURL="https://pixabay.com/api";let g=new w(".gallery-list a",{captionsData:"alt",captionDelay:250});const p=document.querySelector("#search-form"),c=document.querySelector("#loader"),l=document.querySelector("#load-more"),d=document.querySelector(".gallery-list"),b="48271120-e478f6712aa82518e8481b3a8";let u=0,s={key:b,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20};l.classList.add("pasif");p.addEventListener("submit",async t=>{t.preventDefault(),c.classList.add("loader"),s.q=t.currentTarget.elements.query.value.trim(),s.page=1;try{const r=await h(s);if(r.hits.length<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");u=Math.ceil(r.totalHits/s.per_page),u>s.page&&(s.page+=1,l.classList.remove("pasif"));const o=y(r.hits);d.innerHTML=o,c.classList.remove("loader"),g.refresh()}catch(r){m.error({message:`${r}`,position:"topRight"}),d.innerHTML="",c.classList.remove("loader")}p.reset()});l.addEventListener("click",async()=>{try{const t=await h(s),r=y(t.hits);if(d.insertAdjacentHTML("beforeend",r),g.refresh(),s.page+=1,u<s.page)throw l.classList.add("pasif"),s.page=1,new Error("We're sorry, but you've reached the end of search results");document.querySelector(".card")&&window.scrollBy(0,2*v())}catch(t){m.info({position:"topRight",message:`${t}`})}});const h=async t=>(await f.get("/",{params:t})).data,y=t=>t.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:a,comments:i,downloads:L})=>`
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${o}">
                 <img src="${r}"  alt="${n}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${e}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${a}</p>
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
        </li>`).join(""),v=()=>{const t=document.querySelector(".card");return t?t.getBoundingClientRect().height:0};
//# sourceMappingURL=index.js.map
