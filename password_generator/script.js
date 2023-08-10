function scrollToRange(){var e=document.getElementById("length"),t=document.querySelector(".password-container"),n=e.getBoundingClientRect().top-t.getBoundingClientRect().top;window.scrollTo({top:window.scrollY+n,behavior:"smooth"})}const passwordElement=document.getElementById("password"),lengthElement=document.getElementById("length"),lengthValueElement=document.getElementById("lengthValue"),includeNumbersElement=document.getElementById("includeNumbers"),includeSymbolsElement=document.getElementById("includeSymbols"),includeUppercaseElement=document.getElementById("includeUppercase"),strengthBarElement=document.getElementById("strength-bar"),strengthLabelElement=document.getElementById("strength-label"),generateButton=document.getElementById("generate"),generatePassword=()=>{const e=lengthElement.value;let t="abcdefghijklmnopqrstuvwxyz";includeNumbersElement.checked&&(t+="0123456789"),includeSymbolsElement.checked&&(t+="!@#$%^&*()_+"),includeUppercaseElement.checked&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ");let n="";for(let o=0;o<e;o++){n+=t[Math.floor(Math.random()*t.length)]}return n},updatePassword=()=>{const e=generatePassword();passwordElement.textContent=e;const t=calculatePasswordStrength(e),n=t/4*100;strengthBarElement.style.width=`${n}%`,strengthBarElement.style.backgroundColor=getStrengthColor(t),strengthLabelElement.textContent=`Strength: ${n.toFixed(1)}%`},calculatePasswordStrength=e=>(e.length>=8?1:0)+(/[a-z]/.test(e)&&/[A-Z]/.test(e)?1:0)+(/\d/.test(e)?1:0)+(/[!@#$%^&*()_+]/.test(e)?1:0),getStrengthColor=e=>0===e?"#ff6347":1===e?"#ffac33":2===e?"#ffee58":3===e?"#8bc34a":4===e?"#018f06":"#ccc";function setStrengthBarWidth(){var e=document.getElementById("strength-bar"),t=window.innerWidth<=600;e.style.width=t?"94%":"96.8%"}function scrollToRange(){var e=document.getElementById("length"),t=document.querySelector(".password-container"),n=e.getBoundingClientRect().top-t.getBoundingClientRect().top;window.scrollTo({top:window.scrollY+n,behavior:"smooth"})}function copyPassword(){const e=passwordElement.textContent,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),animateCopyButton()}function animateCopyButton(){const e=document.getElementById("copy-button");e.textContent="Copied!",setTimeout((()=>{e.textContent="Copy Password"}),2e3)}function setStrengthBarWidth(){var e=document.getElementById("strength-bar"),t=window.innerWidth<=600;e.style.width=t?"94%":"96.8%"}lengthElement.addEventListener("input",(()=>{lengthValueElement.textContent=lengthElement.value,updatePassword()})),includeNumbersElement.addEventListener("change",updatePassword),includeSymbolsElement.addEventListener("change",updatePassword),includeUppercaseElement.addEventListener("change",updatePassword),generateButton.addEventListener("click",updatePassword),updatePassword(),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll("label");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("checked")})),this.classList.add("checked")}))}))})),window.onload=function(){setStrengthBarWidth(),window.addEventListener("resize",setStrengthBarWidth)},window.onload=function(){setStrengthBarWidth(),window.addEventListener("resize",setStrengthBarWidth)};
