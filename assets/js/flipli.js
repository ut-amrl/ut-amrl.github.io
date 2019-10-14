//Author: Kyle Vedder - 2014
$(function()
{
    //===== Note: All following numbers are times in milliseconds =====//
    var fadeInTime = 500;
    var visibleTime = 6250;//how long each element is visible
    var fadeOutTime = 500;
    var delayBetweenDisplays = 0;//time delay between fade out of one element and the fade in of the next	

    //===== Random Start Position =====//
    var randomStartPosition = false;//if true, starts at a random phrase in the list, if false starts at the first phrase in the list


    var liArray = $('.flipli li');
    var itr = 0; //iterator var to crawl through each item in the liArray. Defaults to the first item in the array.

    if (randomStartPosition)//if starts randomly, the itr array is set to a random val in the liArray
    {
        itr = Math.floor(Math.random() * liArray.length);
    }

    var recursiveFunction = function()//the recursive function that is called over and over again.
    {
        $(liArray[itr]).fadeIn(fadeInTime, function()//fade in function. calls the next functiom, the visible time function
        {
            setTimeout(function() //visible time function, causes a "pause" for the specified time, then hands it off to the fade out function
            {
                $(liArray[itr]).fadeOut(fadeOutTime, function()//fade out function, which hides the li and calls the next function in the array.
                {
                    liArray.hide();//hides the li being used

                    itr = itr + 1;//increment itr
                    if (itr >= liArray.length)//wrap itr around
                    {
                        itr = 0;
                    }

                    setTimeout(recursiveFunction(), delayBetweenDisplays);//No delay, setTimeout used to prevent a stack overflow.
                });
            }, visibleTime);
        });
    };
    setTimeout(recursiveFunction(), 0);//first call to kick off the flipping process. No delay, setTimeout used to prevent a stack overflow.
});
