<% option explicit %>
<% 
dim sterms
sterms = request ("terms")
Response.Cookies ("lastsearch") ("terms") =sterms
Response.Cookies ("lastsearch") ("date") = date
Response.Cookies ("lastsearch").expires = date + 365
%>
<html>
<body>
<center><b><font color = red size=30>Information Here...</font>
</b></center>
<br><br>
To try another search, <a href = "default.asp">Click here</a>
</body>
</html>