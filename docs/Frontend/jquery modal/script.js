

    // Đọc file HTML khác và thêm vào #main-content
    $(document).ready(function () {
        $("<script" +
            " src='https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js'/>")
            .appendTo("head");
        $("<link" +
            "      rel='stylesheet'" +
            "      href='https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css'" +
            "    />").appendTo("head");
        // Xử lý sự kiện khi nút được nhấp
        $("#open-modal-btn").on("click", function () {
            // Thêm nội dung modal vào trang
            $("<div id='ex1' class='modal'>" +
                "<p>This is the modal content.</p>" +
                "<a href='#' rel='modal:close'>Close</a>" +
                "</div>")
                .appendTo("body");
            $("<style>body{background-color: aqua}</body>")
                .appendTo("body");

            // Kích hoạt modal
            $("#ex1").modal({
                escapeClose: false,
                clickClose: false,
                showClose: false,
            });
        });
    });
