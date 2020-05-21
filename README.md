# datepicker

- demo page https://csslick.github.io/datepicker/
- plug-in homepage: https://www.jqueryscript.net/time-clock/versatile-date-time-month-year-picker.html
- 한글화는 js폴더의 datepicker.ko.js를 수정하시오.

```
  <div class="mydate c-datepicker-date-editor  J-datepicker-range-day mt10">
    <input id="start-day" placeholder="Start" name="" class="c-datepicker-data-input only-date" value="">
    <span class="c-datepicker-range-separator">-</span>
    <input id="end-day" placeholder="End" name="" class="c-datepicker-data-input only-date" value="">
  </div>
  
  <script>
    $(function () {
      $('.mydate').datePicker({
        format: 'YY-MM-DD HH:mm:ss',
        isRange: true,  // 시작, 종료 범위 달력
        language: 'ko'  // 언어설정
      });
    })
  </script>
  
  <!-- 달력 라이브러리(하단에 추가) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
  <script src="js/datepicker.all.min.js"></script>
  <script src="js/datepicker.all.js"></script>
  <script src="js/datapicker-separate/datepicker-only-time.js"></script>
  <!-- 언어설정(한글) -->
  <script src="js/datepicker.ko.js"></script>
```
