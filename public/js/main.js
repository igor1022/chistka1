function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtЗначение = a[i].textСодержание || a[i].innerText;
      if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  token = "5738212504:AAFQQJq3gZFK_5klpdQiDBnOy_RMurPzOds";
  chat_id = "-640522763";

  const uri_api = `https://api.telegram.org/bot${ token }/sendMessage`;

  const form_inner = document.querySelector('.form-inner');
  const form = document.querySelector('form');
  const elem = document.getElementsByName('user_name');
  const phone = document.getElementsByName('user_phone');
  const message = document.getElementsByName('user_message');
  form.addEventListener('submit', (ev) => {
    console.log(elem[0].value);
    ev.preventDefault();
    axios.post(uri_api, {
        chat_id : chat_id,
        parse_mode : 'html',
        text: `Имя: ${elem[0].value}:  Номер: ${phone[0].value} Сообщение: ${message[0].value}`
    })

    window.location.href = '/thank';
  })