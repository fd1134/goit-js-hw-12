import{S as y,i as g}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();window.global||(window.global=window);const n=document.querySelector("#search-form"),l=document.querySelector("#loader"),c=document.querySelector(".gallery-list"),L="https://pixabay.com/api/?",w="48271120-e478f6712aa82518e8481b3a8",u=new URLSearchParams({key:w,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0});n.addEventListener("submit",a=>{a.preventDefault(),l.classList.add("loader"),u.set("q",a.currentTarget.elements.query.value.trim());const o=`${L}${u.toString()}`;fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const i=t.hits.map(({webformatURL:r,largeImageURL:s,tags:m,likes:d,views:f,comments:h,downloads:p})=>`
            <li class="card">
              <div class="card-image">
               <a class="gallery-link" href="${s}">
                 <img src="${r}"  alt="${m}" class="gallery-image"/>
               </a>
             </div>
              <ul class="card-info">
                <li class="info-item">
                   <h3>Likes</h3>
                   <p>${d}</p>
                </li>
                <li class="info-item">
                  <h3>Views</h3>
                  <p>${f}</p>
                </li>
                <li class="info-item">
                  <h3>Comments</h3>
                  <p>${h}</p>
               </li>
               <li class="info-item">
                 <h3>Downloads</h3>
                 <p>${p}</p>
               </li>
             </ul>
        </li>`).join("");c.innerHTML=i,l.classList.remove("loader"),new y(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{g.error({message:`${t}`,position:"topRight"}),c.innerHTML="",l.classList.remove("loader")}),n.reset()});
//# sourceMappingURL=index.js.map
