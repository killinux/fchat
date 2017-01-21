<%@ page language="java" import="java.sql.*,java.util.*,net.sf.json.JSONObject,com.hao.object.User" contentType="text/html; charset=utf-8" %>
<%
System.out.println("dologin.jsp");
String RL = "jdbc:mysql://"+request.getServerName()+":3306/haochat?useUnicode=true&characterEncoding=utf-8&user=root&password=Haoning123";
String u=request.getParameter("u");
String p=request.getParameter("p");
String sqlStr = "select * from users where username='"+u+"' and passwd='"+p+"'";

try {
	Class.forName("com.mysql.jdbc.Driver");
	Connection con = DriverManager.getConnection(RL);
	Statement st = con.createStatement();
	ResultSet rs = st.executeQuery(sqlStr);
	//List users=new ArrayList();
	User user = null;
	while (rs.next()) {
		user = new User();
		user.setId(rs.getInt("id"));
		user.setUsername(rs.getString("username"));
		user.setNickname(rs.getString("nickname"));
		user.setImg_url(rs.getString("img_url"));
		user.setOther(rs.getString("other"));
		//users.add(user);
	}
	
	JSONObject jsonObj = JSONObject.fromObject( user);  
    out.println( jsonObj );  
	rs.close();
	st.close();
	con.close();
} catch (Exception err) {
	out.println("err");
	err.printStackTrace();
}
%>