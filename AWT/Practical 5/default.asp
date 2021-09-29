<%
response.write("I am in File 1!<br>")
Server.Transfer("file2.asp")
response.write("<br>I am back in File1!")
%>
file2:
<%
response.write("This is File 2!<br>")
%>
