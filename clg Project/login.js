
            function login(form)/*function to check userid & password*/
            {
             /*the following code checkes whether the entered userid and password are matching*/
             if(form.fname.value == "0701CS191052" && form.lname.value == "1234")
              {
                alert("Login successfully");
                window.open('data.html')/*opens the target page while Id & password matches*/
                
              }
             else
             {
               alert("Error Password or Username")/*displays error message*/
              }
            }