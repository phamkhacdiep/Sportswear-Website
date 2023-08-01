var MenuItems = document.getElementById("MenuItems");
        MenuItems.style.maxHeight = "0px";

        function handClick() {
            if (MenuItems.style.maxHeight == "0px")
            {
                MenuItems.style.maxHeight = "250px";
            }
            else
            {
                MenuItems.style.maxHeight = "0px";
            }
        }

