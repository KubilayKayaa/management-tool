$(function () {
  $(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input").focus();
  });

  $(".field-wrapper input").on("keyup", function (e) {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.add("active-span");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.remove("active-span");
    }
  });

  $(".field-wrapper-date input[type='date']").on("change", function (e) {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
      $(this).closest(".field-wrapper-date span").addClass("active-span");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.add("active-span");
      e.target.classList.add("active-input-date");
      e.target.classList.remove("deactive-input-date");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
      $(this).closest(".field-wrapper-date span").removeClass("active-span");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.remove("active-span");
      e.target.classList.remove("active-input-date");
      e.target.classList.add("deactive-input-date");
    }
  });

  $(".field-wrapperTextArea textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapperTextArea").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapperTextArea").removeClass("hasValue");
    }
  });
});

function specialInputs(){
  $(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input").focus();
  });

  $(".field-wrapper input").on("keyup", function (e) {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.add("active-span");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.remove("active-span");
    }
  });

  $(".field-wrapper-date input[type='date']").on("change", function (e) {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
      $(this).closest(".field-wrapper-date span").addClass("active-span");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.add("active-span");
      e.target.classList.add("active-input-date");
      e.target.classList.remove("deactive-input-date");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
      $(this).closest(".field-wrapper-date span").removeClass("active-span");
      e.target.nextElementSibling
        .querySelector("span")
        .classList.remove("active-span");
      e.target.classList.remove("active-input-date");
      e.target.classList.add("deactive-input-date");
    }
  });

  $(".field-wrapperTextArea textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
      $(this).closest(".field-wrapperTextArea").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapperTextArea").removeClass("hasValue");
    }
  });
}

$(".dashboard-search-report h5").click(function () {
  $(".dashboard-search-report h5 svg").toggleClass("active");
});

const itemReportMenu = document.querySelectorAll(".item-report-menu");

$(".item-report-action button").click(function (e) {
  if (e.target.nextElementSibling.classList.length == 2) {
    for (let i = 0; i < itemReportMenu.length; i++) {
      console.log(itemReportMenu[i]);
      itemReportMenu[i].classList.remove("active");
    }
    e.target.nextElementSibling.classList.remove("active");
  } else {
    for (let i = 0; i < itemReportMenu.length; i++) {
      console.log(itemReportMenu[i]);
      itemReportMenu[i].classList.remove("active");
    }
    e.target.nextElementSibling.classList.add("active");
  }
});

$(window).click(function () {
  for (let i = 0; i < itemReportMenu.length; i++) {
    console.log(itemReportMenu[i]);
    itemReportMenu[i].classList.remove("active");
  }
});

$(".item-report-action button").click(function (event) {
  event.stopPropagation();
  console.log("buttona tıklandı");
});

const dashboardNavbarItems = document.querySelectorAll(
  ".dashboard-navbar-items a"
);

dashboardNavbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < dashboardNavbarItems.length; i++) {
      dashboardNavbarItems[i].classList.remove("active");
    }
    item.classList.add("active");
  });
});

const addVehicle = () => {
  return `  <div class="item-vehicle">
  <div class="vehicle-header d-flex align-items-center justify-content-between">
    <h5>Vehicle <span></span></h5>
    <button class='delete-vehicle-btn'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a{fill:none;opacity:0.87;}.b{fill:#f26969;}</style></defs><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm4.3,14.3a1,1,0,0,1-1.41,0L12,13.41,9.11,16.3A1,1,0,1,1,7.7,14.89L10.59,12,7.7,9.11A1,1,0,0,1,9.11,7.7L12,10.59,14.89,7.7A1,1,0,0,1,16.3,9.11L13.41,12l2.89,2.89a1.014,1.014,0,0,1,0,1.41Z"/></svg>    </button>
  </div>
  <div class="vehicle-info-section ">
                      <div class="field-wrapper">
                        <input type="text" name="operation-number" />
                        <div class="field-placeholder"><span>Operation number</span></div>
                      </div>
                   </div>
                   <div class="vehicle-info-section ">
                      <div class="field-wrapper">
                        <input type="text" name="vehicle-classification-society" />
                        <div class="field-placeholder"><span>Vehicle classification society</span></div>
                      </div>
                   </div>
                   <div class="vehicle-info-section ">
                      <div class="field-wrapper">
                        <input type="text" name="vehicle-name" />
                        <div class="field-placeholder"><span>Vehicle name</span></div>
                      </div>
                   </div>
                   <div class="vehicle-info-section ">
                      <div class="field-wrapper">
                        <input type="text" name="vehicle-imo-number" />
                        <div class="field-placeholder"><span>Vehicle imo number</span></div>
                      </div>
                   </div>
                   <div class="vehicle-info-section ">
                      <select>
                        <option>Vehicle category</option>
                      </select>
                   </div>
                   <div class="vehicle-info-section ">
                     <div class="field-wrapper">
                       <input type="text" name="vehicle-year-of-build" />
                       <div class="field-placeholder"><span>Vehicle year of build</span></div>
                     </div>
                  </div>
                  <div class="vehicle-info-section ">
                     <div class="field-wrapper">
                       <input type="text" name="vehicle-specification" />
                       <div class="field-placeholder"><span>Vehicle specification</span></div>
                     </div>
                  </div>
                  <div class="vehicle-info-section ">
                     <div class="field-wrapper">
                       <input type="text" name="relevant-vehicle-systems" />
                       <div class="field-placeholder"><span>Relevant vehicle systems</span></div>
                     </div>
                  </div>
                  <div class="vehicle-info-section ">
                     <select>
                       <option>Flag state</option>
                     </select>
                  </div>
                  <div class="vehicle-info-section ">
                     <div class="field-wrapper">
                       <input type="text" name="operator" />
                       <div class="field-placeholder"><span>Operator</span></div>
                     </div>
                  </div>
                  <div class="vehicle-info-section ">
                     <select>
                       <option>Operation type</option>
                     </select>
                  </div>
                  <div class="vehicle-info-section ">
                     <select>
                       <option>Operation phase</option>
                     </select>
                  </div>
                  <div class="vehicle-info-section ">
                     <select>
                       <option>Level of operation</option>
                     </select>
                  </div>
                  <div class="vehicle-info-section ">
                     <textarea cols="30" rows="3" placeholder="Notes"></textarea>
                  </div>
 </div>`;
};

const addActor = () => {
  return `   <div class="item-actor">
  <div class="actor-header d-flex align-items-center justify-content-between">
    <h5>Actor <span></span></h5>
    <button class='delete-actor-btn'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a{fill:none;opacity:0.87;}.b{fill:#f26969;}</style></defs><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm4.3,14.3a1,1,0,0,1-1.41,0L12,13.41,9.11,16.3A1,1,0,1,1,7.7,14.89L10.59,12,7.7,9.11A1,1,0,0,1,9.11,7.7L12,10.59,14.89,7.7A1,1,0,0,1,16.3,9.11L13.41,12l2.89,2.89a1.014,1.014,0,0,1,0,1.41Z"/></svg>    </button>
  </div>
  <div class="actor-info-section ">
  <select>
    <option>Type of Actor</option>
  </select>
</div>
<div class="actor-info-section ">
  <select>
    <option>Role</option>
  </select>
</div>
<div class="actor-info-section ">
   <div class="field-wrapper">
     <input type="text" name="activity" />
     <div class="field-placeholder"><span>Activity</span></div>
   </div>
</div>
<div class="actor-info-section ">
 <select>
   <option>Qualification</option>
 </select>
 </div>
<div class="actor-info-section ">
   <select>
     <option>Certificate issuance state</option>
   </select>
</div>
<div class="actor-info-section ">
  <div class="field-wrapper">
    <input type="text" name="experience-(yrs)" />
    <div class="field-placeholder"><span>Experience (yrs)</span></div>
  </div>
</div>
<div class="actor-info-section ">
  <div class="field-wrapper">
    <input type="text" name="pilot-experience-(flight-hrs)" />
    <div class="field-placeholder"><span>Pilot experience (flight hrs)</span></div>
  </div>
</div>
<div class="actor-info-section ">
  <div class="field-wrapper">
    <input type="text" name="time-on-shift-minutes" />
    <div class="field-placeholder"><span>Time on shift minutes</span></div>
  </div>
</div>
<div class="actor-info-section ">
 <div class="field-wrapper">
   <input type="text" name="time-on-sector-minutes" />
   <div class="field-placeholder"><span>Time on sector minutes</span></div>
 </div>
</div>
<div class="actor-info-section ">
 <div class="field-wrapper">
   <input type="text" name="time-on-board-days" />
   <div class="field-placeholder"><span>Time on board days</span></div>
 </div>
</div>
<div class="actor-info-section ">
<div class="field-wrapper">
 <input type="text" name="age" />
 <div class="field-placeholder"><span>Age</span></div>
</div>
</div>
<div class="actor-info-section ">
<select>
<option>Natonality</option>
</select>
</div>
<div class="actor-info-section ">
  <textarea cols="30" rows="3" placeholder="Notes"></textarea>
</div>
</div>
 </div>`;
};

$(".add-vehicle-btn").click(function () {
  let item = document.querySelectorAll(".vehicle-container .item-vehicle");

  $(".add-vehicle").before(addVehicle());

  for (let i = 1; i < $(".item-vehicle").length; i++) {
    $(".item-vehicle")[i].querySelector("span").innerHTML = i + 1;
  }

  if (item.length === 5) {
    $(".add-vehicle").addClass("none");
  } else {
    $(".add-vehicle").removeClass("none");
  }

  $(".delete-vehicle-btn").click(function (e) {
    const target = e.target.parentElement.parentElement;
    for (let i = 1; i < $(".item-vehicle").length; i++) {
      $(".item-vehicle")[i].querySelector("span").innerHTML = i + 1;
    }
    target.remove();
    if (item.length < 6) {
      $(".add-vehicle").removeClass("none");
    }
  });
  specialInputs();
});

for (let i = 1; i < $(".item-vehicle").length; i++) {
  $(".item-vehicle")[i].querySelector("span").innerHTML = i + 1;
}

$(".delete-vehicle-btn").click(function (e) {
  const target = e.target.parentElement.parentElement;
  for (let i = 1; i < $(".item-vehicle").length; i++) {
    $(".item-vehicle")[i].querySelector("span").innerHTML = i + 1;
  }
  target.remove();
  if (item.length < 6) {
    $(".add-vehicle").removeClass("none");
  }
});

$(".add-actor-btn").click(function () {
  let item = document.querySelectorAll(".actor-container .item-actor");

  $(".add-actor").before(addActor());

  for (let i = 1; i < $(".item-actor").length; i++) {
    $(".item-actor")[i].querySelector("span").innerHTML = i + 1;
  }

  if (item.length === 5) {
    $(".add-actor").addClass("none");
  } else {
    $(".add-actor").removeClass("none");
  }

  $(".delete-actor-btn").click(function (e) {
    const target = e.target.parentElement.parentElement;
    for (let i = 1; i < $(".item-actor").length; i++) {
      $(".item-actor")[i].querySelector("span").innerHTML = i + 1;
    }
    target.remove();
    if (item.length < 6) {
      $(".add-actor").removeClass("none");
    }
  });
});

$(".delete-actor-btn").click(function (e) {
  const target = e.target.parentElement.parentElement;
  for (let i = 1; i < $(".item-actor").length; i++) {
    $(".item-actor")[i].querySelector("span").innerHTML = i + 1;
  }
  target.remove();
  if (item.length < 6) {
    $(".add-actor").removeClass("none");
  }
});

for (let i = 1; i < $(".item-actor").length; i++) {
  $(".item-actor")[i].querySelector("span").innerHTML = i + 1;
}

const humanFactor = () => {
  return ` <div class="human-factors-actions">
  <select>
  <option>Select Layer</option>
</select>
<select>
  <option>Select Category</option>
</select>
<select>
  <option>Select Code and Descriptor</option>
</select>
<textarea cols="30" rows="1" placeholder="Field will fill automatically"></textarea>
<textarea cols="30" rows="1" placeholder="Write your reasoning"></textarea>
<select>
  <option>Select Actor</option>
</select>
<select>
  <option>Select Vehicle</option>
</select>
  <button class='delete-human-factor-btn'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a{fill:none;opacity:0.87;}.b{fill:#f26969;}</style></defs><path class="a" d="M0,0H24V24H0Z"/><path class="b" d="M12,2A10,10,0,1,0,22,12,9.991,9.991,0,0,0,12,2Zm4.3,14.3a1,1,0,0,1-1.41,0L12,13.41,9.11,16.3A1,1,0,1,1,7.7,14.89L10.59,12,7.7,9.11A1,1,0,0,1,9.11,7.7L12,10.59,14.89,7.7A1,1,0,0,1,16.3,9.11L13.41,12l2.89,2.89a1.014,1.014,0,0,1,0,1.41Z"/></svg>  </button>
</div>`;
};

$(".add-human-factor-btn").click(function () {
  $(".add-human-factor").before(humanFactor());
  $(".delete-human-factor-btn").click(function (e) {
    e.target.parentElement.remove();
  });
});

$(".delete-human-factor-btn").click(function (e) {
  e.target.parentElement.remove();
});