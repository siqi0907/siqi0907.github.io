window.onload = function(){
            var oMenu = document.getElementsByClassName("menu");
            var oNav = document.getElementsByTagName("nav");
            var onOff = true;
            oMenu[0].onclick = function(){
                if(onOff){
                    oNav[0].style.display = "block";
                    onOff = false;
                }else{
                    oNav[0].style.display = "none";
                    onOff = true;
                }

            }
        }