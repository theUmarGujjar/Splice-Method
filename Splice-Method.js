//Splice Method of string...

let array = [1,2,3,4,5,6,7,8,9,10];
let arrC = [];
let array1 = [];
let foundD = false;
let foundI = false;
let j = 0;
let k = 0;

//datatypes belong to deletion..
let delN = prompt("How many numbers you want to delete :");
let delS = prompt("From where you want to start deletion :");

//datatype belong to insertion..
let insN = prompt("How many numbers you want to insert : ");
let insE = [];

//input inserting elements..
for(let i = 0 ; i<insN ; i++){
    insE[i]=prompt(`Enter the # ${i} element :`);
}

//deletion procedure..
for (element of array){

    //when foundD becomes true..
    if(foundD){
        delN--;
        if(delN == 0){
            foundD = false;
        }
        continue;
    }

    //check condition for foundD..
    if(element == delS){
        foundD = true;
    }

    //inserting elements to arrC..
    arrC[j] = element;
    j++;
    

}

console.log(arrC);
array = arrC;

// inserting elements back in original array..
j=0;
for(element of array){
    if(foundI){
        for(let i = 0; i<insN ; i++ ){
            array1[j]=insE[i];
            j++;
        }
        foundI = false;
    }

    //open found switch after founding delS..
    if(element == delS){
        foundI = true;
    }

    //normal inserting
    array1[j]= element;
    j++

}

    //display final array..
    console.log(array1);
