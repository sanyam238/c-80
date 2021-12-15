var name_of_the_student_array = [];

function submit(){

for (var j=1; j <= 4 ; j++)
{
    var student_name = document.getElementById("name_of_the_student_" + j).value;
console.log(student_name);
 name_of_the_student_array.push(student_name);
 console.log(name_of_the_student_array);
}

var length_of_student_array = name_of_the_student_array.length;
console.log(length_of_student_array);

var display_student_array = [];

for ( var k=0 ;k < length_of_student_array; k++)
{
    display_student_array.push("<h4>Name- "+ name_of_the_student_array[k]+"</h4>");
    console.log(display_student_array);
}
document.getElementById("display_name_with_commas").innerHTML = display_student_array;

var remove_commas = display_student_array.join(" ");
console.log(remove_commas);

document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block"
}

function sorting(){
    name_of_the_student_array.sort();
     console.log(name_of_the_student_array);

     var display_student_array_sorting = [];

     var name_of_the_student_array_length = name_of_the_student_array.length;
     console.log(name_of_the_student_array_length);

     for (  var x=0 ; x < name_of_the_student_array_length; x++)
     {
      display_student_array_sorting.push( "<h4>Name- "+ name_of_the_student_array[x]+"</h4>" );
      console.log(display_student_array_sorting);

      var sorting_remove_commas = display_student_array_sorting.join(" ");
      console.log(sorting_remove_commas);

      document.getElementById("display_name_without_commas").innerHTML = sorting_remove_commas;
     }
}