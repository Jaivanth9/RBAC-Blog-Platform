import $ from 'jquery';

function handleSidebarActiveClass() {
    if ($(window).width() >= 768) {
      $("#sidebar").addClass("active");
    } else {
      $("#sidebar").removeClass("active");
    }
  }
  handleSidebarActiveClass();
  $(window).resize(() => {
    handleSidebarActiveClass();
  });
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });