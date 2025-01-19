import{S as h,i as y,a as g}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();window.global||(window.global=window);const n=document.querySelector("#search-form"),l=document.querySelector("#loader"),c=document.querySelector(".gallery-list"),L="https://pixabay.com/api/";let u={key:"48271120-e478f6712aa82518e8481b3a8",image_type:"photo",orientation:"horizontal",safesearch:!0};const w=async(s,t)=>(await g.get(s,{params:t})).data;n.addEventListener("submit",async s=>{s.preventDefault(),l.classList.add("loader"),u.q=s.currentTarget.elements.query.value.trim(),w(L,u).then(t=>{if(t.hits.length<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const o=t.hits.map(({webformatURL:e,largeImageURL:r,tags:i,likes:m,views:d,comments:p,downloads:f})=>`
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${r}">
                 <img src="${e}"  alt="${i}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${m}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${d}</p>
                </li>
                <li class="info-item">
                  <h3>Comments</h3>
                  <p>${p}</p>
               </li>
               <li class="info-item">
                 <h3>Downloads</h3>
                 <p>${f}</p>
               </li>
             </ul>
        </li>`).join("");c.innerHTML=o,l.classList.remove("loader"),new h(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{y.error({message:`${t}`,position:"topRight"}),c.innerHTML="",l.classList.remove("loader")}),n.reset()});
//# sourceMappingURL=index.js.map
