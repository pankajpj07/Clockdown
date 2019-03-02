function submitForm()
{
  if (document.getElementById("name").value=="" || document.getElementById("email").value=="" || document.getElementById("message").value==""){
    alert("All fields are required");
  }
  else
    {
  alert("Sent sucessfully");
    }
}
