import "./styles.css";

$(document).ready(function () {
  let clock_face_html = "<div class='numbers'>";
  for (let i = 1; i < 13; i++) {
    clock_face_html += "<span class='nums'>" + i + "</span>";
  }
  $(".clock-face").prepend(clock_face_html);

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (hour > 12) {
    hour = hour - 12;
  }
  let nums = $(".nums");
  let hour_arrow = $("#hours");
  let min_arrow = $("#minutes");
  let sec_arrow = $("#seconds");
  let deg_s = 6 * second;
  let deg_h = 30 * hour;
  let deg_m = 6 * minute;
  let hour_transform = "translate(0, -50%) rotate(" + deg_h + "deg)";
  let min_transform = "translate(0, -50%) rotate(" + deg_m + "deg)";
  let sec_transform = "translate(0, -50%) rotate(" + deg_s + "deg)";
  nums.removeClass("current");
  $(nums[hour - 1]).addClass("current");
  hour_arrow.css("transform", hour_transform);
  min_arrow.css("transform", min_transform);
  sec_arrow.css("transform", sec_transform);

  $(function () {
    setInterval(function () {
      let seconds = new Date().getSeconds();
      let sdegree = seconds * 6;
      let srotate = "translate(0, -50%) rotate(" + sdegree + "deg)";

      sec_arrow.css({ transform: srotate });
    }, 1000);

    setInterval(function () {
      let hours = new Date().getHours();
      if (hours > 12) {
        hours = hours - 12;
      }
      let mins = new Date().getMinutes();
      let hdegree = hours * 30 + mins / 2;
      let hrotate = "translate(0, -50%) rotate(" + hdegree + "deg)";

      hour_arrow.css({ transform: hrotate });
      nums.removeClass("current");
      $(nums[hours - 1]).addClass("current");
    }, 1000);

    setInterval(function () {
      let mins = new Date().getMinutes();
      let mdegree = mins * 6;
      let mrotate = "translate(2px, -50%) rotate(" + mdegree + "deg)";

      min_arrow.css({ transform: mrotate });
    }, 1000);
  });
});
