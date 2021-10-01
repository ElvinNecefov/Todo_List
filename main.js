let add = document.getElementById("add");
let tbody = document.querySelector("tbody");
let sira = true;


add.addEventListener("click", function () {

    if( sira ) {
        tbody.innerHTML += `

        <tr>
            <td></td>
            <td><input type="text" class="form-control" placeholder="ad"></td>
            <td><input type="text" class="form-control"></td>
            <td><input type="number" class="form-control"></td>
            <td>
                <button class="btn btn-success" onclick="saveRow(this)">Save</button>
                <button class="btn btn-danger" onclick="deleteRow(this)">Cansel</button>
            </td>
        </tr>
        
        `

        sira = false;

    } else {
        alert("Xanalari doldur");
    }
 

    addNumber();
});

// Sira Nomresi elave elemek....
function addNumber() {
    let num = 1;
  
    let tr = document.querySelectorAll("tbody tr");
    //console.log(tr);

    tr.forEach((element) => {
        element.querySelector("td").innerHTML = num;
        num++;
    });

};



function deleteRow (btn) {
    console.log(btn);
   // btn.parentElement.parentElement.remove();
   btn.closest("tr").remove();
   addNumber();
};




function saveRow(btn) {
    //console.log(btn);

    let td = btn.closest("tr").querySelectorAll("td:not(:first-child, :last-child)");
    //console.log(td);

    td.forEach((element) => {
        //console.log(element);
        element.innerHTML = element.querySelector("input").value;
       
    });

    //console.log(btn.nextElementSibling);
    btn.nextElementSibling.innerText = "Delete";
    //btn.remove();

    
    btn.innerText = "Edit";

    sira = true;

    let tdler = btn.closest("tr").querySelectorAll("td:not(:first-child, :last-child)");
    console.log(tdler);
    
    tdler.forEach((el) => {
      
        
        el.innerHTML +=`
        
        <tr>
            
            <td>
                <input type="text" class="form-control">
            </td>
            
        </tr>
        
        `
 
    });

    

    

};




// function saveRow(btn) {

//     if( checkInput(btn) ) {
//         //console.log(btn);

//         let td = btn.closest("tr").querySelectorAll("td:not(:first-child, :last-child)");
//         //console.log(td);

//         td.forEach((element) => {
//             console.log(element);
//             element.innerHTML = element.querySelector("input").value;
        
//         });

//         console.log(btn.nextElementSibling);
//         btn.nextElementSibling.innerText = "Delete";
//         btn.remove();
//         console.log(btn);
//     } else {
//         console.log("sasasasasasa");
//     }
 

// };



// function checkInput(gelenbuton) {
//     //return true;
//     if ( gelenbuton ) {
//         let tdler = gelenbuton.closest("tr").querySelectorAll("td:not(:first-child, :last-child)");

//         tdler.forEach((element) => {

//             //console.log(element);

//             if( element.querySelector("input").value ) {
//                 return true;
//                 // console.log(true);
//             } else {
//                 return false;
//                 // console.log(false);
                
                
//             }
            
        
//         });

       
//     }
// }



// // 1-ci numune
// function testFunction() {
//     console.log(123);
// };


// // 2-ci numune
// function testFunction(param) {
//     console.log(123);
// }

// function testFunction(param) {
//     console.log(param);
// }


// // 3-ci numune
// function testFunction(param) {
//     console.log(param);
//     console.log(123);
    
// }

