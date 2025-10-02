function originalfunc()
        {
            function newfunc()
            {
                return "This is an original function."
            }
            return newfunc;
        }
        let myfunction = originalfunc();
        alert(myfunction());
