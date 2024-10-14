
<script>
      // Product Page Delivery Date and Time for 
      // App ArrivesBy
      function deliveryDateDisplay(){
        let deliveryDate = document.querySelector('.delivery-date-earliest-value');
        let deliverySentence = deliveryDate.textContent;
        let deliveryFirstWord = deliverySentence.split(" ");

        // Display Block of App Text Element
        document.querySelector('.arrivesby-dt-wrapper').style.display = 'block';
        
        // Split Text
        deliveryDate.innerHTML = deliveryFirstWord[0];

        // Get Date
        const weekday = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
        const now = new Date();

        // Get Hour and less than 1 hour
        let getHour = now.getHours() + 1;

        // Get Weekly Date
        let getDay = now.getDay();

        deliveryDate.textContent = deliveryFirstWord[0];

        // GET DATA FROM ARRIVES APP FOR DELIVERY TIME -START
        const arriveEelement = document.querySelector(".arrivesby-dt");
        
        if (arriveEelement.hasAttribute("data-defaults")) {
          const dataAttrArrives = arriveEelement.getAttribute("data-defaults");
          const arrivesDataJson = JSON.parse(dataAttrArrives);
          let arrivesDeliveryTime = arrivesDataJson.cutoff_time;
          // GET DATA FROM ARRIVES APP FOR DELIVERY TIME -END

          // HOUR LOGIC START
          if (getHour > arrivesDeliveryTime){
            deliveryDate.textContent = deliveryFirstWord[0];
          } else{
            deliveryDate.textContent = 'morgen';
          }
  
          if(weekday[getDay] == 'Vrijdag' && getHour > arrivesDeliveryTime){
            deliveryDate.textContent = 'Dinsdag';
          } else if(weekday[getDay] == 'Vrijdag' && getHour < arrivesDeliveryTime){
            deliveryDate.textContent = 'morgen';   
          }
  
          if(weekday[getDay] == 'Zaterdag' || weekday[getDay] == 'Zondag'){
            deliveryDate.textContent = 'Dinsdag';
          }
  
          if(weekday[getDay] == 'Maandag' && getHour < arrivesDeliveryTime){
            deliveryDate.textContent = 'morgen';   
          }
          // HOUR LOGIC END
  
        }
        // GET DATA FROM ARRIVES APP FOR DELIVERY TIME -END
      }
       

      var intervalId = setInterval(deliveryDateDisplay, 0);

      setTimeout(stopInterval, 4500);

      function stopInterval(){
        clearInterval(intervalId);
      }
      
    </script>
