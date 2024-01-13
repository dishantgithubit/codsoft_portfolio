    let typed = new Typed('#Typed', {
      strings: ['Web Developer', 'Java Developer','Web Developer'],
      typeSpeed: 70,
    });

    function showslidebar(){
      const slidebar = document.querySelector('.slidebar')
      slidebar.style.display='flex'
    }

    function hideslidebar(){
      const slidebar = document.querySelector('.slidebar')
      slidebar.style.display='none'
    }
