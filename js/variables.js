export const months = document.querySelectorAll('.month'),
             MONTHS = 12,
             monthDays = document.querySelectorAll('.month_days'),
             prev = document.querySelector('.prev'),
             next = document.querySelector('.next'),
             monthBtn = document.querySelector('.month_btn'),
             yearBtn = document.querySelector('.year_btn'),
             dayBtn = document.querySelector('.day_btn'),
             calendarWrapperBtn = document.querySelector('.calendar-wrapper_btn'),
             newDay = document.querySelector('.todo-btnday'),
             overlay = document.querySelector('.overlay'),
             calendarClose = document.querySelector('.calendar_close'),
             week_days = document.querySelectorAll('.week_day'),
             toDoDay = document.querySelector('.todo-day'),
             year = document.querySelector('.year'),
             monthList = document.querySelector('.month_list'),

             overlayLittleClose = document.querySelector('.overlay-alert_close'),
             overlayLittle = document.querySelector('.overlay_little'), 
             toDoInput = document.querySelector('.todo-input'), 
             ol = document.querySelector('.todo-wrapper'), 
             btnAdd = document.querySelector('.todo-add'),
             toDoClear = document.querySelector('.todo-clear'),

             database = firebase.database(),
             rootRef = database.ref('todo');


