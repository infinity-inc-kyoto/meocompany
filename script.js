document.querySelectorAll('[data-plan]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('plan').value=link.dataset.plan;}));
document.getElementById('consultation').addEventListener('submit',event=>{event.preventDefault();const status=document.getElementById('form-status');status.textContent='入力内容を確認できました。このサイトはデモのため、お問い合わせは送信されていません。';status.focus();});
