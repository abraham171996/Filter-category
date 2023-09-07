const base_url = "http://localhost:3001";

  // POST REQUEST FOOTBALL NEWS
  const football_image = document.querySelector("#football-image");
  const football_title = document.querySelector("#football-title");
  const football_description = document.querySelector("#football-description");
  const save_football = document.querySelector("#save_football");

  save_football &&
    save_football.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        !football_image.value ||
        !football_title.value ||
        !football_description.value
      ) {
        return swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill all the fields",
        });
      }

      const postData = {
        id: self.crypto.randomUUID(),
        image: football_image.value,
        title: football_title.value,
        description: football_description.value,
      };

      axios.post(`${base_url}/footballs`, postData)
        .then((res) => {
          if (res.status === 201) {
            swal.fire({
              icon: "success", 
              title: "Success",
              text: "Product added successfully",
            });
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });


  // GET REQUEST FOOTBALL NEWS      

  const getFootball = document.querySelector(".football-body");


  axios.get(`${base_url}/footballs`)
    .then((res)=>{
        res.data.map((football) => {
            getFootball.innerHTML += `
            <tr style="height:150px"  data-key=${football.id} >
            <td style="height:150px" ><img src=${football.image} 
              style="width: 150px; height: 150px; object-fit: cover;"
              alt=""
            ></td>
            <td style="height:150px ; padding-top:75px; "  >${football.title}</td>
            <td style="height:150px ; padding-top:75px; "  >${football.description}</td>
            <td style="height:200px" class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-danger delete-range" data-football-id="${football.id}">Delete</button>
            </td>
          </tr>
            `
            // DELETE REQUEST FOOTBALL NEWS  
            const deleteButtons = document.querySelectorAll(".delete-range");
            deleteButtons.forEach((deleteButton) => {
              deleteButton.addEventListener("click", (e) => {
                e.preventDefault();
                const footballId = e.target.getAttribute("data-football-id");
                axios.delete(`${base_url}/footballs/${footballId}`)
                  .then((response) => {
                    if (response.status === 200) {
                      swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Delete product has been added!",
                      });
                    }
                  })
            
              });
            });
        })
    })

  // POST REQUEST BASKETBALL NEWS
  const basketball_image = document.querySelector("#basketball-image");
  const basketball_title = document.querySelector("#basketball-title");
  const basketball_description = document.querySelector("#basketball-description");
  const save_basketball = document.querySelector("#save_basketball");

  save_basketball &&
    save_basketball.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        !basketball_image.value ||
        !basketball_title.value ||
        !basketball_description.value
      ) {
        return swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill all the fields",
        });
      }

      const postData = {
        id: self.crypto.randomUUID(),
        image: basketball_image.value,
        title: basketball_title.value,
        description: basketball_description.value,
      };

      axios.post(`${base_url}/basketballs`, postData)
        .then((res) => {
          if (res.status === 201) {
            swal.fire({
              icon: "success", 
              title: "Success",
              text: "Product added successfully",
            });
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });

  // GET REQUEST BASKETBALL NEWS  

  const getBasketball = document.querySelector(".basketball-body");


  axios.get(`${base_url}/basketballs`)
    .then((res)=>{
        res.data.map((basketball) => {
            getBasketball.innerHTML += `
            <tr style="height:150px"  data-key=${basketball.id} >
            <td style="height:150px" ><img src=${basketball.image} 
              style="width: 150px; height: 150px; object-fit: cover;"
              alt=""
            ></td>
            <td style="height:150px ; padding-top:75px; "  >${basketball.title}</td>
            <td style="height:150px ; padding-top:75px; "  >${basketball.description}</td>
            <td style="height:200px" class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-danger delete-range" data-basketball-id="${basketball.id}">Delete</button>
            </td>
          </tr>
            `
               // DELETE REQUEST BASKETBALL NEWS  
               const deleteButtons = document.querySelectorAll(".delete-range");
               deleteButtons.forEach((deleteButton) => {
                 deleteButton.addEventListener("click", (e) => {
                   e.preventDefault();
                   const basketballId = e.target.getAttribute("data-basketball-id");
                   axios.delete(`${base_url}/basketballs/${basketballId}`)
                     .then((response) => {
                       if (response.status === 200) {
                         swal.fire({
                           icon: "success",
                           title: "Success",
                           text: "Delete product has been added!",
                         });
                       }
                     })
               
                 });
               });
        })
    })

  // POST REQUEST TENNIS NEWS
  const tennis_image = document.querySelector("#tennis-image");
  const tennis_title = document.querySelector("#tennis-title");
  const tennis_description = document.querySelector("#tennis-description");
  const save_tennis = document.querySelector("#save_tennis");

  save_tennis &&
    save_tennis.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        !tennis_image.value ||
        !tennis_title.value ||
        !tennis_description.value
      ) {
        return swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill all the fields",
        });
      }

      const postData = {
        id: self.crypto.randomUUID(),
        image: tennis_image.value,
        title: tennis_title.value,
        description: tennis_description.value,
      };

      axios.post(`${base_url}/tennis`, postData)
        .then((res) => {
          if (res.status === 201) {
            swal.fire({
              icon: "success", 
              title: "Success",
              text: "Product added successfully",
            });
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });

// GET REQUEST TENNIS NEWS  

const getTennis = document.querySelector(".tennis-body");


axios.get(`${base_url}/tennis`)
  .then((res)=>{
      res.data.map((tennis) => {
          getTennis.innerHTML += `
          <tr style="height:150px"  data-key=${tennis.id} >
          <td style="height:150px" ><img src=${tennis.image} 
            style="width: 150px; height: 150px; object-fit: cover;"
            alt=""
          ></td>
          <td style="height:150px ; padding-top:75px; "  >${tennis.title}</td>
          <td style="height:150px ; padding-top:75px; "  >${tennis.description}</td>
          <td style="height:200px" class="d-flex align-items-center justify-content-end">
            <button type="button" class="btn btn-danger delete-range" data-tennis-id="${tennis.id}">Delete</button>
          </td>
        </tr>
          `
           // DELETE REQUEST TENNIS NEWS  
           const deleteButtons = document.querySelectorAll(".delete-range");
           deleteButtons.forEach((deleteButton) => {
             deleteButton.addEventListener("click", (e) => {
               e.preventDefault();
               const tenisId = e.target.getAttribute("data-tennis-id");
               axios.delete(`${base_url}/tennis/${tenisId}`)
                 .then((response) => {
                   if (response.status === 200) {
                     swal.fire({
                       icon: "success",
                       title: "Success",
                       text: "Delete product has been added!",
                     });
                   }
                 })
           
             });
           });
      })
  })




// POST REQUEST ALL ITEMS
const save_all_items = document.querySelectorAll(".save_all_items");
save_all_items.forEach((saveAllData) => {
  saveAllData && saveAllData.addEventListener("click", (e) => {
    e.preventDefault();
    const footballRows = document.querySelectorAll(".football-body tr");
    const basketballRows = document.querySelectorAll(".basketball-body tr");
    const tennisRows = document.querySelectorAll(".tennis-body tr");
    
    const footballData = {
      items: [],
    };
    const basketballData = {
      items: [],
    };
    const tennisData = {
      items: [],
    };


    
    footballRows.forEach((row) => {
      const id = row.getAttribute("data-key");
      const image = row.querySelector("td img").getAttribute("src");
      const title = row.querySelector("td:nth-child(2)").textContent;
      const description = row.querySelector("td:nth-child(3)").textContent;
      footballData.items.push({
        id,
        image,
        title,
        description,
      });
    });


    
    basketballRows.forEach((row) => {
      const id = row.getAttribute("data-key");
      const image = row.querySelector("td img").getAttribute("src");
      const title = row.querySelector("td:nth-child(2)").textContent;
      const description = row.querySelector("td:nth-child(3)").textContent;
      basketballData.items.push({
        id,
        image,
        title,
        description,
      });
    });


    
    tennisRows.forEach((row) => {
      const id = row.getAttribute("data-key");
      const image = row.querySelector("td img").getAttribute("src");
      const title = row.querySelector("td:nth-child(2)").textContent;
      const description = row.querySelector("td:nth-child(3)").textContent;
      tennisData.items.push({
        id,
        image,
        title,
        description,
      });
      
    });
    
    
    const postData = {
      footballs: footballData.items,
      basketballs: basketballData.items,
      tennis: tennisData.items,
    };


    axios.post(`${base_url}/allItems`, postData)
      .then((res) => {
        if (res.status === 201) {
          swal.fire({
            icon: "success",
            title: "Success",
            text: "All items added successfully",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });
  
});





