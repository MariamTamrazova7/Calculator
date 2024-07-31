let count = 0;
let opCount = [0,0,0,0];
let equalCount = 0;
let main = document.getElementById("main");
let cBool = true;
let step = 0;
let step2 = 0;
let doteCount = 0;

//holding the first 2 numbers
let number1 = "";
let number2 = "";
//holding the total
let num3 = 0;

//creating objects for each number with id and value
const block0 =
{
    val:0,
    idName: "b0"
}

const block1 =
{
    val: 1,
    idName: "b1"
}

const block2 =
{
    val:2,
    idName: "b2"
}

const block3 =
{
    val:3,
    idName: "b3"
}

const block4 =
{
    num:"",
    val:4,
    idName: "b4"
}

const block5 =
{
    num:"",
    val:5,
    idName: "b5"
}

const block6 =
{    
    num:"",
    val:6,
    idName: "b6"
}

const block7 =
{
    val:7,
    idName: "b7"
}

const block8 =
{
    val:8,
    idName: "b8"
}

const block9 =
{
    val:"9",
    idName: "b9",
}

//creating objects for operators

let plus =
{
    idName: "plus",
}

const minus =
{
    idName: "minus",
}

const mul =
{
    idName: "mul",
}

const div =
{
    idName: "division",
}

const OperatorClick = 
{
    OpCl: function()
    {
        const operator = document.getElementById(this.idName);
        const IdName = this.idName;
        operator.addEventListener("click", foo2);
        
        function foo2()
        {
    //tried to to the same by holding 'operatorcount' as a key but couldn't
    // use 'this.opcount' insid function foo2, the return was always 'undefined'
            let sum = 0;
            for(let i = 0; i < opCount.length;i++)
            {
                sum+=opCount[i];
            }
//not letting the code work when multiply operators are called or when the first number isn't 
//written yet but an operator is called
            if(step2 != 0 && sum < 1)
            {
                switch (IdName) 
                {
                    case "plus":
                        opCount[0] = 1;
                        break;
                    case "minus":
                        opCount[1] = 1;
                        break;
                    case "mul":
                        opCount[2] = 1;
                        break;
                    default:
                        opCount[3] = 1;
                        break;
                }
//decided to do like the smartphone's calculator works -> after clicking the operator number1
//is still written and disappears when the second number is being written
                number1 = main.innerHTML;
                if(cBool || step > 0)
                {
                    count+=1;
                }   
            }
        }
    }  
}

let dote = document.getElementById("dote");
dote.addEventListener("click",doteFoo);
function doteFoo()
{
//if there is already a dote in the number or no number was called the click button does nothing
    if(number1 != "" && doteCount == 0)
    {
        if(count == 0)
        {
            number1+= ".";
            main.innerHTML = number1;
        }

        if(count > 0)
        { 
            number2+= ".";
            main.innerHTML = number2;
        }
        doteCount++;
    }
}


let c = document.getElementById("c");
c.addEventListener("click",cFoo);
function cFoo()
{
    number1 = "";
    number2 = "";
    num3 = 0;
    main.innerHTML = "";
    count = 0;
    step = 0;
    step2 = 0;
    equalCount = 0;
    cBool = false;
    console.log(step);
}


const click = 
{
    numKeeper: function()
    {  
        const block = document.getElementById(this.idName);
        let main = document.getElementById("main");
        let num2 = this.val;

        block.addEventListener("click", foo);
        function foo() 
        {
            if(count == 0)
            {
//concatinating the clicked numbers while an operator isn't called
                number1+= num2;
                main.innerHTML = number1;
                step++;
                step2++;
            }

            if(count > 0)
            { 
//after calling the operator do the same with the second number
                number2+= num2;
                main.innerHTML = number2;
                step++;
                // step2 = 0;
            }
        }
    }
}

click.numKeeper.call(block0);
click.numKeeper.call(block1);
click.numKeeper.call(block2);
click.numKeeper.call(block3);
click.numKeeper.call(block4);
click.numKeeper.call(block5);
click.numKeeper.call(block6);
click.numKeeper.call(block7);
click.numKeeper.call(block8);
click.numKeeper.call(block9);
OperatorClick.OpCl.call(plus);
OperatorClick.OpCl.call(minus);
OperatorClick.OpCl.call(mul);
OperatorClick.OpCl.call(div);


const equal = document.getElementById("equal");
equal.addEventListener("click", fooEqual);
function fooEqual() 
{
    number = main.innerHTML;
//checking which operator was called
    if(opCount[3]> 0)
    {
        if(equalCount == 0)
        {
//if no operation was done calculate the total with two first numbers
            num3 = Number(number1) / Number(number2);
            main.innerHTML = num3;
            equalCount++;
        }
        else
        {
//otherwise calculate with got number
            num3 /= Number(number2); 
            main.innerHTML = num3;
        }
       
        number1 = "";
        number2 = "";
//changin the array so the statement is no longer right
        opCount[3] = 0;
    }
    else if(opCount[0] == 1)
    {
        if(equalCount == 0)
            {
                num3 = Number(number1) + Number(number2);
                main.innerHTML = num3;
                equalCount++;
            }
            else
            {
                num3 += Number(number2); 
                main.innerHTML = num3;
            }
          
            number1 = "";
            number2 = "";
            opCount[0] = 0;
    }
    else if(opCount[2] == 1)
    {
        if(equalCount == 0 || step == 0)
            {
                num3 = Number(number1) * Number(number2);
                main.innerHTML = num3;
                equalCount++;
            }
            else
            {
                num3 *= Number(number2); 
                main.innerHTML = num3;
            }
           
            number1 = "";
            number2 = "";
            opCount[2] = 0;
    }
    else if(opCount[1] == 1)
    {
        if(equalCount == 0)
            {
                num3 = Number(number1) - Number(number2);
                main.innerHTML = num3;
                equalCount++;
            }
            else
            {
                num3 -= Number(number2); 
                main.innerHTML = num3;
            }
           
            number1 = "";
            number2 = "";
            opCount[1] = 0;
    }
}