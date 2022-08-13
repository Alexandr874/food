
'use stric';



window.addEventListener('DOMContentLoaded', () => {


    // tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

          function hidenTabsContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('sshow', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');

            });
          }
          

          function showTabsContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');

            tabs[i].classList.add('tabheader__item_active');
          }


          hidenTabsContent();
          showTabsContent();

          tabsParent.addEventListener('click', (event) => {

            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {

                    tabs.forEach((item, i) => {

                        if(target === item) {
                            hidenTabsContent();
                            showTabsContent(i);
                        }

                    });
            }

          }); 


    //timer

          const deadline = '2022-08-18';

          function getTimRimaining(endtaim) {
            const t = Date.parse(endtaim) - Date.parse(new Date()),
                  days = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                  minutes = Math.floor((t / 1000 / 60) % 60),
                  seconds = Math.floor((t / 1000) % 60);

                  return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds 
                  };

          }

          function getZero(num) {
            if (num >= 0 && num < 10) {
              return `0${num}`;
            } else {
              return num;
            }

          }


          function setClock(selector, endtaim) {
             const timer = document.querySelector(selector),
                   days = timer.querySelector('#days'),
                   hours = timer.querySelector('#hours'),
                   minutes = timer.querySelector('#minutes'),
                   seconds = timer.querySelector('#seconds'),
                   timeInterval = setInterval(updateClock, 1000);


                   updateClock();


              function updateClock() {
                const t = getTimRimaining(endtaim);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                  clearInterval(timeInterval);
                }
              }

          }

          setClock('.timer', deadline);




          //modals



          const modalOpenBtn = document.querySelectorAll('[data-modal]'),
                modalContent = document.querySelector('.modal'),
                modalCloseBtn = document.querySelector('[data-close]');


          modalOpenBtn.forEach(item => {
                item.addEventListener('click', (e) => {
                      modalContent.classList.add('show');
                      modalContent.classList.remove('hide');
                      
                });
          });

          modalCloseBtn.addEventListener('click', (e) => {
            modalContent.classList.add('hide');
            modalContent.classList.remove('show');
            
          });



        



});
    

 
 










