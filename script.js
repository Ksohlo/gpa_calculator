//---------------MAIN SECTION--------------
const gpaEl = document.getElementById('gpa');
const cgpaEl = document.getElementById('cgpa');

const gpaInner = document.getElementById('gpa-inner');
const cgpaInner = document.getElementById('cgpa-inner');

gpaEl.addEventListener('click', showGpa);
cgpaEl.addEventListener('click', showCgpa);



function showGpa() {
    gpaInner.style.display = 'flex';
    cgpaInner.style.display = 'none';
    
    if(!gpaEl.classList.contains('active')){
        gpaEl.classList.add('active')
    }
    if(cgpaEl.classList.contains('active')){
        cgpaEl.classList.remove('active');
    }
}

function showCgpa() {
    cgpaInner.style.display = 'flex';
    gpaInner.style.display = 'none';
    if(!cgpaEl.classList.contains('active')){
        cgpaEl.classList.add('active')
    }
    if(gpaEl.classList.contains('active')){
        gpaEl.classList.remove('active');
    }
}





//------------GPA SECTION--------------

const codeEl = document.getElementById('course-code');
const unitEl = document.getElementById('course-unit');
const gradeEl = document.getElementById('grade');
const btn = document.getElementById('add');
const calculate = document.getElementById('result');
const elementContainer = document.getElementById('elecont');

const element = {
    courseUnit : [],
    grade : [],
    gradeUnit : []
}

function addElement() {
    //html file
    let code = `<div class="course-element">
                    <div class="ccode">${codeEl.value}</div>
                    <div class="cunit">${unitEl.value}</div>
                    <div class="cgrade">${gradeEl.value}</div>
                </div>`;
    //update array
    updateArray();
    
    //add to screen
    elementContainer.insertAdjacentHTML('beforeend', code)
    
    //clear inputs
    reset();
}

function reset() {
    codeEl.value = '';
    unitEl.value = '';
    gradeEl.value = 'none';
}

function updateArray() {
    element.courseUnit.push(unitEl.value);
    element.grade.push(gradeEl.value);
    
    let gradeUnits = unitEl.value * gradeEl.value;
    element.gradeUnit.push(gradeUnits);
}

function calculateGp() {
    let numerator = eval(element.gradeUnit.join("+"));
    let denominator = eval(element.courseUnit.join("+"));
    let total = (numerator/denominator);
    let toTotal = total.toFixed(2);
    
    
//    console.log(numerator);
//    console.log(denominator);
//    console.log(total);
    
    alert(`Your GPA for this semester is :  ${toTotal}`);
    
}

btn.addEventListener('click', addElement);
calculate.addEventListener('click', calculateGp);





//---------------CGPA SECTION----------------------

const semesterEl = document.getElementById('semester');
const gpEl = document.getElementById('gpaa');
const addGpEl = document.getElementById('add-gp');
const calculateCgpaEl = document.getElementById('cgpresult');
const eleContEl = document.getElementById('elecont-gp');

const gpArr = [];

function addElem(){
    const ele = `<div class="CGP-element">
                    <div class="semester">${semesterEl.value}</div>
                    <div class="Cgpp">${gpEl.value}</div>
                    <div></div>
                </div>`;
    eleContEl.insertAdjacentHTML('beforeend',ele);
}

function resetInput() {
    semesterEl.value = '';
    gpEl.value = '';
}


// event listener for adding elements
addGpEl.addEventListener('click', ()=>{
    //add elements
    addElem();
    
    //update array
    gpArr.push(gpEl.value);
    
    // reset input
    resetInput();
});


//event listener for calculating CGPA
calculateCgpaEl.addEventListener('click', ()=> {
    let cgNumerator = eval(gpArr.join('+'));
    let cgDenominator = gpArr.length;
    let cgResult = (cgNumerator/cgDenominator).toFixed(2);
    
    alert(`Your current CGPA is : ${cgResult}`);
});