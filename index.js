import{a as p,S as h,i as g}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();window.global||(window.global=window);const n=document.querySelector("#search-form"),l=document.querySelector("#loader"),c=document.querySelector(".gallery-list");n.addEventListener("submit",o=>{o.preventDefault(),l.classList.add("loader"),p.get("https://pixabay.com/api/",{params:{key:"48271120-e478f6712aa82518e8481b3a8",q:o.currentTarget.elements.query.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const s=t.data.hits.map(({webformatURL:e,largeImageURL:r,tags:i,likes:d,views:u,comments:m,downloads:f})=>`
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${r}">
                 <img src="${e}"  alt="${i}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${d}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${u}</p>
                </li>
                <li class="info-item">
                  <h3>Comments</h3>
                  <p>${m}</p>
               </li>
               <li class="info-item">
                 <h3>Downloads</h3>
                 <p>${f}</p>
               </li>
             </ul>
        </li>`).join("");c.innerHTML=s,l.classList.remove("loader"),new h(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{g.error({message:`${t}`,position:"topRight"}),c.innerHTML="",l.classList.remove("loader")}),n.reset()});
//# sourceMappingURL=index.js.map
