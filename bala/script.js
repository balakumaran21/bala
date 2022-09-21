var rollV,nameV,fathernameV,mothernameV,dobV,ageV,genderV,mailidV,contactnumberV,cityV,stateV,addressV,imageV;
function readForm()
{
  
  rollV=document.getElementById("roll").value;
  nameV=document.getElementById("name").value;
  fathernameV=document.getElementById("fname").value;
  mothernameV=document.getElementById("mname").value;
  dobV=document.getElementById("dob").value;
  ageV=document.getElementById("age").value;
  genderV=document.getElementById("gender").value;
  mailidV=document.getElementById("emailid").value;
  contactnumberV=document.getElementById("contactnumber").value;
  cityV=document.getElementById("city").value;
  stateV=document.getElementById("state").value;
  addressV=document.getElementById("address").value;
  imageV=document.getElementById("image").value;
  console.log(rollV,nameV,fathernameV,mothernameV,dobV,ageV,genderV,mailidV,contactnumberV,cityV,stateV,addressV,imageV);
}
document.getElementById("insert").onclick= function()
{
  readForm();
  firebase.database().ref("student/" +rollV).set({RollNumber:rollV,StudentName:nameV,FatherName:fathernameV,MotherName:mothernameV,Dob:dobV,Age:ageV,Gender:genderV,MailId:mailidV,ContactNumbar:contactnumberV,City:cityV,State:stateV,Address:addressV,Image:imageV,});
  alert("Data inserted");
   document.getElementById("roll").value="";
   document.getElementById("name").value="";
   document.getElementById("fname").value="";
   document.getElementById("mname").value="";
   document.getElementById("dob").value="";
   document.getElementById("age").value="";
   document.getElementById("gender").value="";
   document.getElementById("emailid").value="";
   document.getElementById("contactnumber").value="";
   document.getElementById("city").value="";
   document.getElementById("state").value="";
   document.getElementById("address").value="";
   document.getElementById("image").value="";
  
};
document.getElementById("read").onclick= function()
{
  readForm();
  firebase.database().ref("student/"+rollV).on("value",function(snap){
     document.getElementById("roll").value=snap.val().RollNumber;
     document.getElementById("name").value=snap.val().StudentName;
     document.getElementById("fname").value=snap.val().FatherName;
     document.getElementById("mname").value=snap.val().MotherName;
     document.getElementById("dob").value=snap.val().Dob;
     document.getElementById("age").value=snap.val().Age;
     document.getElementById("gender").value=snap.val().Gender;
     document.getElementById("emailid").value=snap.val().MailId;
     document.getElementById("contactnumber").value=snap.val().ContactNumber;
     document.getElementById("city").value=snap.val().City;
     document.getElementById("state").value=snap.val().State;
     document.getElementById("address").value=snap.val().Address;
     document.getElementById("image").value=snap.val().Image;
    
  });
};
document.getElementById("update").onclick= function()
{
 
  readForm();
  firebase.database().ref("student/" +rollV).update({RollNumber:rollV,StudentName:nameV,FatherName:fathernameV,MotherName:mothernameV,Dob:dobV,Age:ageV,Gender:genderV,MailId:mailidV,ContactNumbar:contactnumberV,City:cityV,State:stateV,Address:addressV,Image:imageV,});
   alert("Data Updated");
   document.getElementById("roll").value="";
   document.getElementById("name").value="";
   document.getElementById("fname").value="";
   document.getElementById("mname").value="";
   document.getElementById("dob").value="";
   document.getElementById("age").value="";
   document.getElementById("gender").value="";
   document.getElementById("emailid").value="";
   document.getElementById("contactnumber").value="";
   document.getElementById("city").value="";
   document.getElementById("state").value="";
   document.getElementById("address").value="";
   document.getElementById("image").value="";
};
document.getElementById("delete").onclick= function()
{
 
  readForm();
  firebase.database().ref("student/" +rollV).remove();
   alert("Data deleted");
   document.getElementById("roll").value="";
   document.getElementById("name").value="";
   document.getElementById("fname").value="";
   document.getElementById("mname").value="";
   document.getElementById("dob").value="";
   document.getElementById("age").value="";
   document.getElementById("gender").value="";
   document.getElementById("emailid").value="";
   document.getElementById("contactnumber").value="";
   document.getElementById("city").value="";
   document.getElementById("state").value="";
   document.getElementById("address").value="";
   document.getElementById("image").value="";
};
