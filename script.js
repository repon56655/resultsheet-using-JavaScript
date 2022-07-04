// =================================
// Bangla Calculating Function
// =================================

function result_bangla(){

    var _theory_marks = document.getElementById("theory-marks-bangla").value;
    var _practical_marks = document.getElementById("practical-marks-bangla").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-bangla").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-bangla").value="A+";
            document.getElementById("point-bangla").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-bangla").value="A";
            document.getElementById("point-bangla").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-bangla").value="A-";
            document.getElementById("point-bangla").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-bangla").value="B";
            document.getElementById("point-bangla").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-bangla").value="C";
            document.getElementById("point-bangla").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-bangla").value="D";
            document.getElementById("point-bangla").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-bangla").value="F";
            document.getElementById("point-bangla").value="0.00";
        }
        else{
            alert("Invalid Input");
        }
    
    
    }

}
// =================================
// English Calculating Function
// =================================

function result_english(){

    var _theory_marks = document.getElementById("theory-marks-english").value;
    var _practical_marks = document.getElementById("practical-marks-english").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-english").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-english").value="A+";
            document.getElementById("point-english").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-english").value="A";
            document.getElementById("point-english").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-english").value="A-";
            document.getElementById("point-english").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-english").value="B";
            document.getElementById("point-english").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-english").value="C";
            document.getElementById("point-english").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-english").value="D";
            document.getElementById("point-english").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-english").value="F";
            document.getElementById("point-english").value="0.00";
        }
        else{
            alert("Invalid Input");
        }
    
    
    }

}

// =================================
// Physics Calculating Function
// =================================


function result_physics(){

    var _theory_marks = document.getElementById("theory-marks-physics").value;
    var _practical_marks = document.getElementById("practical-marks-physics").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-physics").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-physics").value="A+";
            document.getElementById("point-physics").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-physics").value="A";
            document.getElementById("point-physics").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-physics").value="A-";
            document.getElementById("point-physics").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-physics").value="B";
            document.getElementById("point-physics").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-physics").value="C";
            document.getElementById("point-physics").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-physics").value="D";
            document.getElementById("point-physics").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-physics").value="F";
            document.getElementById("point-physics").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}

// =================================
// Chemistry Calculating Function
// =================================


function result_chemistry(){

    var _theory_marks = document.getElementById("theory-marks-chemistry").value;
    var _practical_marks = document.getElementById("practical-marks-chemistry").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-chemistry").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-chemistry").value="A+";
            document.getElementById("point-chemistry").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-chemistry").value="A";
            document.getElementById("point-chemistry").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-chemistry").value="A-";
            document.getElementById("point-chemistry").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-chemistry").value="B";
            document.getElementById("point-chemistry").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-chemistry").value="C";
            document.getElementById("point-chemistry").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-chemistry").value="D";
            document.getElementById("point-chemistry").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-chemistry").value="F";
            document.getElementById("point-chemistry").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}

// =================================
// Biology Calculating Function
// =================================


function result_biology(){

    var _theory_marks = document.getElementById("theory-marks-biology").value;
    var _practical_marks = document.getElementById("practical-marks-biology").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-biology").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-biology").value="A+";
            document.getElementById("point-biology").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-biology").value="A";
            document.getElementById("point-biology").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-biology").value="A-";
            document.getElementById("point-biology").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-biology").value="B";
            document.getElementById("point-biology").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-biology").value="C";
            document.getElementById("point-biology").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-biology").value="D";
            document.getElementById("point-biology").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-biology").value="F";
            document.getElementById("point-biology").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}



// =================================
// Higher Mathematics Calculating Function
// =================================


function result_higher_math(){

    var _theory_marks = document.getElementById("theory-marks-higher-math").value;
    var _practical_marks = document.getElementById("practical-marks-higher-math").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-higher-math").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-higher-math").value="A+";
            document.getElementById("point-higher-math").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-higher-math").value="A";
            document.getElementById("point-higher-math").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-higher-math").value="A-";
            document.getElementById("point-higher-math").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-higher-math").value="B";
            document.getElementById("point-higher-math").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-higher-math").value="C";
            document.getElementById("point-higher-math").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-higher-math").value="D";
            document.getElementById("point-higher-math").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-higher-math").value="F";
            document.getElementById("point-higher-math").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}






// =================================
// Information and Communication Technology Calculating Function
// =================================


function result_ict(){

    var _theory_marks = document.getElementById("theory-marks-ict").value;
    var _practical_marks = document.getElementById("practical-marks-ict").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-ict").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-ict").value="A+";
            document.getElementById("point-ict").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-ict").value="A";
            document.getElementById("point-ict").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-ict").value="A-";
            document.getElementById("point-ict").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-ict").value="B";
            document.getElementById("point-ict").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-ict").value="C";
            document.getElementById("point-ict").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-ict").value="D";
            document.getElementById("point-ict").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-ict").value="F";
            document.getElementById("point-ict").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}






// =================================
// Psychology Calculating Function
// =================================


function result_psychology(){

    var _theory_marks = document.getElementById("theory-marks-psychology").value;
    var _practical_marks = document.getElementById("practical-marks-psychology").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-psychology").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-psychology").value="A+";
            document.getElementById("point-psychology").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-psychology").value="A";
            document.getElementById("point-psychology").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-psychology").value="A-";
            document.getElementById("point-psychology").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-psychology").value="B";
            document.getElementById("point-psychology").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-psychology").value="C";
            document.getElementById("point-psychology").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-psychology").value="D";
            document.getElementById("point-psychology").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-psychology").value="F";
            document.getElementById("point-psychology").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}






// =================================
// Geography Calculating Function
// =================================


function result_geography(){

    var _theory_marks = document.getElementById("theory-marks-geography").value;
    var _practical_marks = document.getElementById("practical-marks-geography").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-geography").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-geography").value="A+";
            document.getElementById("point-geography").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-geography").value="A";
            document.getElementById("point-geography").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-geography").value="A-";
            document.getElementById("point-geography").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-geography").value="B";
            document.getElementById("point-geography").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-geography").value="C";
            document.getElementById("point-geography").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-geography").value="D";
            document.getElementById("point-geography").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-geography").value="F";
            document.getElementById("point-geography").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}






// =================================
// Statics Calculating Function
// =================================


function result_statics(){

    var _theory_marks = document.getElementById("theory-marks-statics").value;
    var _practical_marks = document.getElementById("practical-marks-statics").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-statics").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-statics").value="A+";
            document.getElementById("point-statics").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-statics").value="A";
            document.getElementById("point-statics").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-statics").value="A-";
            document.getElementById("point-statics").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-statics").value="B";
            document.getElementById("point-statics").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-statics").value="C";
            document.getElementById("point-statics").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-statics").value="D";
            document.getElementById("point-statics").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-statics").value="F";
            document.getElementById("point-statics").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}






// =================================
// Economics Calculating Function
// =================================


function result_economics(){

    var _theory_marks = document.getElementById("theory-marks-economics").value;
    var _practical_marks = document.getElementById("practical-marks-economics").value;

    

    if(_theory_marks=="" || _practical_marks==""){
        alert("theory marks and practical marks are empty");
    }
    else{
        var result = parseInt(_theory_marks)+parseInt(_practical_marks);

        document.getElementById("total-marks-economics").value=result;

        if(result >=80 && result <= 100){
            document.getElementById("grade-economics").value="A+";
            document.getElementById("point-economics").value="5.00";
        }
        else if(result >=70 && result <= 79){
            document.getElementById("grade-economics").value="A";
            document.getElementById("point-economics").value="4.00";
        }
        else if(result >=60 && result <= 69){
            document.getElementById("grade-economics").value="A-";
            document.getElementById("point-economics").value="3.50";
        }
        else if(result >=50 && result <= 59){
            document.getElementById("grade-economics").value="B";
            document.getElementById("point-economics").value="3.00";
        }
        else if(result >=40 && result <= 49){
            document.getElementById("grade-economics").value="C";
            document.getElementById("point-economics").value="2.00";
        }
        else if(result >=33 && result <= 39){
            document.getElementById("grade-economics").value="D";
            document.getElementById("point-economics").value="1.00";
        }
        else if(result >=0 && result <= 32){
            document.getElementById("grade-economics").value="F";
            document.getElementById("point-economics").value="0.00";
        }

        else{
            alert("Invalid Input");
        }
    
    
    }

}

function Final_result(){
    if(
    document.getElementById("grade-bangla").value == "F" || document.getElementById("grade-english").value == "F" || document.getElementById("grade-physics").value == "F" || document.getElementById("grade-chemistry").value == "F" || document.getElementById("grade-biology").value == "F" || document.getElementById("grade-higher-math").value == "F" || document.getElementById("grade-ict").value == "F" || 
    document.getElementById("grade-psychology").value == "F" || 
    document.getElementById("grade-geography").value == "F" || 
    document.getElementById("grade-statics").value == "F" ||
    document.getElementById("grade-economics").value == "F"
    )
    {
        document.getElementById("grade").value="Fail";
        document.getElementById("total-marks").value="0";
        document.getElementById("point").value="0";
    }
    else {

        var _total_marks_bangla = document.getElementById("total-marks-bangla").value;
        var _total_marks_english = document.getElementById("total-marks-english").value;
        var _total_marks_physics = document.getElementById("total-marks-physics").value;
        var _total_marks_chemistry = document.getElementById("total-marks-chemistry").value;
        var _total_marks_biology = document.getElementById("total-marks-biology").value;
        var _total_marks_higher_math = document.getElementById("total-marks-higher-math").value;
        var _total_marks_ict = document.getElementById("total-marks-ict").value;
        var _total_marks_psychology = document.getElementById("total-marks-psychology").value;
        var _total_marks_geography = document.getElementById("total-marks-geography").value;
        var _total_marks_statics = document.getElementById("total-marks-statics").value;
        var _total_marks_economics = document.getElementById("total-marks-economics").value;


        var _totalMarks = parseInt(_total_marks_bangla)+parseInt(_total_marks_english)+parseInt(_total_marks_physics)+parseInt(_total_marks_chemistry)+parseInt(_total_marks_biology)+parseInt(_total_marks_higher_math)+parseInt(_total_marks_ict)+parseInt(_total_marks_psychology)+parseInt(_total_marks_geography)+parseInt(_total_marks_statics)+parseInt(_total_marks_economics);

        document.getElementById("total-marks").value=_totalMarks;


        var _total_point_bangla = document.getElementById("point-bangla").value;
        var _total_point_english = document.getElementById("point-english").value;
        var _total_point_physics = document.getElementById("point-physics").value;
        var _total_point_chemistry = document.getElementById("point-chemistry").value;
        var _total_point_biology = document.getElementById("point-biology").value;
        var _total_point_higher_math = document.getElementById("point-higher-math").value;
        var _total_point_ict = document.getElementById("point-ict").value;
        var _total_point_psychology = document.getElementById("point-psychology").value;
        var _total_point_geography = document.getElementById("point-geography").value;
        var _total_point_statics = document.getElementById("point-statics").value;
        var _total_point_economics = document.getElementById("point-economics").value;


        var _totalPoints = ((parseFloat(_total_point_bangla)+parseFloat(_total_point_english)+parseFloat(_total_point_physics)+parseFloat(_total_point_chemistry)+parseFloat(_total_point_biology)+parseFloat(_total_point_higher_math)+parseFloat(_total_point_ict)+parseFloat(_total_point_psychology)+parseFloat(_total_point_geography)+parseFloat(_total_point_statics)+parseFloat(_total_point_economics))/11);

        document.getElementById("point").value=_totalPoints;


        if(_totalPoints ==5.00){

            document.getElementById("grade").value="A+";
        }
        else if(_totalPoints >=4.00 && _totalPoints <= 4.99){

            document.getElementById("grade").value="A";
        }
        else if(_totalPoints >=3.50 && _totalPoints <= 3.99){

            document.getElementById("grade").value="A-";
        }
        else if(_totalPoints >=3.00 && _totalPoints <= 3.49){

            document.getElementById("grade").value="B";
        }
        else if(_totalPoints >=2.00 && _totalPoints <= 2.99){

            document.getElementById("grade").value="C";
        }
        else if(_totalPoints >=1.00 && _totalPoints <= 1.99){

            document.getElementById("grade").value="D";
        }



    
    }

}





// =================================
// Without 4th Subject  Calculating Function
// =================================




function Final_result_4th(){
    if(
    document.getElementById("grade-bangla").value == "F" || document.getElementById("grade-english").value == "F" || document.getElementById("grade-physics").value == "F" || document.getElementById("grade-chemistry").value == "F" || document.getElementById("grade-higher-math").value == "F" || document.getElementById("grade-ict").value == "F" || 
    document.getElementById("grade-psychology").value == "F" || 
    document.getElementById("grade-geography").value == "F" || 
    document.getElementById("grade-statics").value == "F" ||
    document.getElementById("grade-economics").value == "F"
    )
    {
        document.getElementById("grade-4th").value="Fail";
        document.getElementById("point-4th").value="0";
    }
    else {


        var _total_point_bangla = document.getElementById("point-bangla").value;
        var _total_point_english = document.getElementById("point-english").value;
        var _total_point_physics = document.getElementById("point-physics").value;
        var _total_point_chemistry = document.getElementById("point-chemistry").value;
        var _total_point_higher_math = document.getElementById("point-higher-math").value;
        var _total_point_ict = document.getElementById("point-ict").value;
        var _total_point_psychology = document.getElementById("point-psychology").value;
        var _total_point_geography = document.getElementById("point-geography").value;
        var _total_point_statics = document.getElementById("point-statics").value;
        var _total_point_economics = document.getElementById("point-economics").value;


        var _totalPoints = ((parseFloat(_total_point_bangla)+parseFloat(_total_point_english)+parseFloat(_total_point_physics)+parseFloat(_total_point_chemistry)+parseFloat(_total_point_higher_math)+parseFloat(_total_point_ict)+parseFloat(_total_point_psychology)+parseFloat(_total_point_geography)+parseFloat(_total_point_statics)+parseFloat(_total_point_economics))/10);

        document.getElementById("point-4th").value=_totalPoints;


        if(_totalPoints ==5.00){

            document.getElementById("grade-4th").value="A+";
        }
        else if(_totalPoints >=4.00 && _totalPoints <= 4.99){

            document.getElementById("grade-4th").value="A";
        }
        else if(_totalPoints >=3.50 && _totalPoints <= 3.99){

            document.getElementById("grade-4th").value="A-";
        }
        else if(_totalPoints >=3.00 && _totalPoints <= 3.49){

            document.getElementById("grade-4th").value="B";
        }
        else if(_totalPoints >=2.00 && _totalPoints <= 2.99){

            document.getElementById("grade-4th").value="C";
        }
        else if(_totalPoints >=1.00 && _totalPoints <= 1.99){

            document.getElementById("grade-4th").value="D";
        }



    
    }

}