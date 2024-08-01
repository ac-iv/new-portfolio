$(document).ready(function() {
  // Make windows draggable and resizable
  $(".window").draggable({
    handle: "header",
    containment: ".screen",
    scroll: false,
    stack: ".screen .window"
  });

  $("#systemDisk").resizable({
    containment: ".screen",
    minWidth: 450,
    minHeight: 140
  });

  $("#gamesDisk").resizable({
    containment: ".screen",
    minWidth: 350,
    minHeight: 140
  });

  $("#trashDisk").resizable({
    containment: ".screen",
    minWidth: 150,
    minHeight: 140
  });

  // Apply custom scrollbar
  jQuery('.content').scrollbar({
    "showArrows": true,
    "scrollx": "advanced",
    "scrolly": "advanced"
  });

  // Make items draggable
  $(".screen .item").draggable({
    containment: ".screen",
    scroll: false
  });

  // Double click to show disks
  $(".item").dblclick(function() {
    var zindexHightest = 6;
    $("#systemDisk,#gamesDisk,#trashDisk").each(function() {
      var zindexCurrent = parseInt($(this).css("zIndex"), 10);
      if (zindexCurrent > zindexHightest) {
        zindexHightest = zindexCurrent;
      }
    });

    if ($(this).is("#system")) {
      $("#systemDisk").css("z-index", (zindexHightest + 1));
      $("#systemDisk").show("pulsate", 3);
    } else if ($(this).is("#games")) {
      $("#gamesDisk").css("z-index", (zindexHightest + 1));
      $("#gamesDisk").show("pulsate", 3);
    } else if ($(this).is("#trash")) {
      $("#trashDisk").css("z-index", (zindexHightest + 1));
      $("#trashDisk").show("pulsate", 3);
    }
  });

  // Open "gamesDisk" window on page load
  $("#gamesDisk").css("z-index", 7).show("pulsate", 3);

  // Bring window to front on click
  $(".window").click(function() {
    $(this).addClass("zind");
    $(".window").not(this).removeClass("zind");
  });

  // Show about section
  $("#openAbout").click(function() {
    $("#finder").show("pulsate", 3);
  });

  // Hide about section
  $("#finder").click(function() {
    $(this).hide("pulsate", 3);
  });

  // Close window on close button click
  $(".close").mouseup(function() {
    const parentPopup = $(this).closest(".popup");
    if (parentPopup.length) {
      parentPopup.hide("pulsate", 3);
    } else {
      window.location.href = 'index.html';
    }
  });

  // Open project details pop-up
  const projectFolders = document.querySelectorAll(".project-folder");
  projectFolders.forEach(folder => {
    folder.addEventListener("click", function() {
      const projectId = folder.getAttribute("data-project");
      const popup = document.getElementById(`project${projectId}-details`);
      if (popup) {
        popup.style.display = "block";
      }
    });
  });

  // Close project details pop-up
  const closeButtons = document.querySelectorAll(".popup .close");
  closeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const popup = button.closest(".popup");
      if (popup) {
        popup.style.display = "none";
      }
    });
  });
});

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}
