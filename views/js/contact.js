(function ($) {
  $(".checkbox").click(function () {
    this.children[0].checked = !this.children[0].checked;
  });

  $("button[type='submit']").click(function () {
    var require = true;
    var allContent = {};
    var labels = {};
    var list = [];
    $("input[type='checkbox']:checked").each((index, item) => {
      var curr = $(item);
      var val = curr.parent().text().trim();
      var name = curr.attr("name");
      var label = curr
        .parents(".button_group")
        .children(".button_group_title")
        .text()
        .trim();

      if (!list.includes(name)) {
        list.push(name);
      }
      if (!allContent[name]) {
        labels[name] = label;
        allContent[name] = val;
      } else {
        allContent[name] += "," + val;
      }
    });

    $("input[type='text']").each((index, item) => {
      var curr = $(item);
      var name = curr.attr("name");
      var label = curr.attr("placeholder").trim();
      var content = curr.val();
      if (curr.attr("required") && !content) {
        curr.siblings("span").show();
        require = false;
        return;
      } else {
        curr.siblings("span").hide();
      }
      list.push(name);
      labels[name] = label;
      allContent[name] = content;
    });

    if (require) {
      $.ajax({
        url: "/users/api/post_email",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
          labels,
          list,
          content: allContent,
          user: $("#username").val(),
        }),
        success: function (data) {
          if (data.code === 200) {
            alert("发送成功");
            location.reload();
          }
        },
      });
    }
  });
})(jQuery);
