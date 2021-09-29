<% option explicit %>
<% 
dim searchterms, date, objad
searchterms = request.cookies ("lastsearch") ("terms")
date = request.cookies ("lastsearch") ("date")
%>
<html>
<body>
<form method = post action="ABC.asp"><center>
<br><br>
<b><center> Search What You Want ....</center></b>
<%
if isdate (date) then
response.write"(last visited on " & now & ")"
end if 
%>
<hr>
<center><font color = yellow size = 10>Google : 
<input type = text name = terms value="<%= searchterms %>">
<br><br>
<input type = submit value="Search">
</center> 
<% set objad = nothing %>
</center></form>
</body>
</html>